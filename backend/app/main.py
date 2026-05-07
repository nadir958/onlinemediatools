import json
import os
import uuid
from datetime import datetime, timedelta
from glob import glob
from typing import Any

from fastapi import FastAPI, File, Form, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse

from app.database import Base, SessionLocal, engine
from app.models import Job
from app.worker.celery_app import process_media

app = FastAPI(title="OnlineMediaTools API")

Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

STORAGE_DIR = "/app/storage"
os.makedirs(STORAGE_DIR, exist_ok=True)

TOOL_ALIASES = {
    "webm_to_mp4": "webm-to-mp4",
    "mov_to_mp4": "mov-to-mp4",
    "mp4_to_mp3": "mp4-to-mp3",
    "video_to_mp3": "video-to-mp3",
    "compress_video": "compress-video",
    "extract_audio": "extract-audio",
    "remove_audio": "remove-audio",
    "audio_converter": "audio-converter",
    "video_converter": "video-converter",
    "trim_video": "trim-video",
    "translate-subtitles": "translate-subtitle",
    "translate_subtitle": "translate-subtitle",
}

VALID_TOOLS = {
    "webm-to-mp4",
    "mov-to-mp4",
    "mp4-to-mp3",
    "video-to-mp3",
    "compress-video",
    "extract-audio",
    "remove-audio",
    "audio-converter",
    "video-converter",
    "trim-video",
    "transcribe",
    "auto-subtitle",
    "translate-subtitle",
    "clean-audio",
}


def normalize_tool_type(tool_type: str) -> str:
    return TOOL_ALIASES.get(tool_type, tool_type)


def get_output_ext(tool_type: str, filename: str, options: dict[str, Any]) -> str:
    exts = {
        "webm-to-mp4": ".mp4",
        "mov-to-mp4": ".mp4",
        "mp4-to-mp3": ".mp3",
        "video-to-mp3": ".mp3",
        "extract-audio": ".mp3",
        "remove-audio": ".mp4",
        "clean-audio": ".mp3" if filename.lower().endswith((".mp3", ".wav", ".m4a", ".aac", ".ogg", ".flac")) else ".mp4",
    }
    if tool_type in exts:
        return exts[tool_type]
    if tool_type in {"transcribe", "auto-subtitle"}:
        return "." + options.get("format", "srt")
    if tool_type == "translate-subtitle":
        return ".srt"
    if "target_fmt" in options:
        return "." + options["target_fmt"]
    if "format" in options:
        return "." + options["format"]
    return ".mp4"


async def _create_job(file: UploadFile, tool_type: str, options: str):
    opts = json.loads(options or "{}")
    normalized_tool = normalize_tool_type(tool_type)
    if normalized_tool not in VALID_TOOLS:
        raise HTTPException(400, f"Invalid tool: {tool_type}")

    job_id = str(uuid.uuid4())
    input_ext = os.path.splitext(file.filename or "")[1]
    input_path = os.path.join(STORAGE_DIR, f"{job_id}_in{input_ext}")
    out_ext = get_output_ext(normalized_tool, file.filename or "upload", opts)
    output_path = os.path.join(STORAGE_DIR, f"{job_id}_out{out_ext}")

    with open(input_path, "wb") as buffer:
        buffer.write(await file.read())

    expires_at = datetime.utcnow() + timedelta(hours=2)
    db = SessionLocal()
    job = Job(
        id=job_id,
        status="pending",
        tool_type=normalized_tool,
        original_filename=file.filename or "upload",
        input_path=input_path,
        output_path=output_path,
        options=opts,
        progress=0,
        expires_at=expires_at,
        output_format=out_ext.lstrip("."),
        file_size=os.path.getsize(input_path),
        input_mime=file.content_type,
    )
    db.add(job)
    db.commit()
    db.close()

    process_media.apply_async(args=[job_id, input_path, output_path, normalized_tool, opts], queue="media_jobs")

    return {
        "job_id": job_id,
        "status": "pending",
        "progress": 0,
        "original_filename": file.filename or "upload",
        "expires_at": expires_at.isoformat(),
    }


def _serialize_job(job_id: str):
    db = SessionLocal()
    job = db.query(Job).filter(Job.id == job_id).first()
    db.close()
    if not job:
        raise HTTPException(404, "Job not found")

    status_value = job.status.value if hasattr(job.status, "value") else str(job.status)
    download_url = None
    if status_value == "completed":
        files = glob(os.path.join(STORAGE_DIR, f"{job_id}_out.*"))
        if files:
            download_url = f"/api/download/{job_id}"

    return {
        "job_id": str(job.id),
        "status": status_value,
        "progress": job.progress or (100 if status_value == "completed" else 0),
        "error_message": job.error_message,
        "download_url": download_url,
        "expires_at": job.expires_at.isoformat() if job.expires_at else None,
        "original_filename": job.original_filename,
    }


@app.post("/api/jobs")
@app.post("/api/v1/jobs")
async def create_job(
    file: UploadFile = File(...),
    tool_type: str = Form(...),
    options: str = Form("{}"),
):
    return await _create_job(file, tool_type, options)


@app.get("/api/jobs/{job_id}")
@app.get("/api/v1/jobs/{job_id}")
async def get_job(job_id: str):
    return _serialize_job(job_id)


@app.get("/api/download/{job_id}")
@app.get("/api/jobs/{job_id}/download")
@app.get("/api/v1/jobs/{job_id}/download")
async def download_job(job_id: str):
    files = glob(os.path.join(STORAGE_DIR, f"{job_id}_out.*"))
    if not files:
        raise HTTPException(404, "File not found")

    out_path = files[0]
    db = SessionLocal()
    job = db.query(Job).filter(Job.id == job_id).first()
    db.close()

    orig_name = job.original_filename if job else "output"
    base_name = os.path.splitext(orig_name)[0]
    out_ext = os.path.splitext(out_path)[1]

    return FileResponse(
        out_path,
        filename=f"{base_name}_OnlineMediaTools{out_ext}",
        content_disposition_type="attachment",
    )
