import os
import uuid
from fastapi import FastAPI, File, UploadFile, Form, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from app.worker.celery_app import process_media
from app.database import engine, Base, SessionLocal
from app.models import Job

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

def get_output_ext(tool_type: str, filename: str, options: dict) -> str:
    exts = {
        "webm-to-mp4": ".mp4",
        "mov-to-mp4": ".mp4",
        "mp4-to-mp3": ".mp3",
        "video-to-mp3": ".mp3",
        "extract-audio": ".mp3",
        "remove-audio": ".mp4",
        "clean-audio": ".mp3" if filename.endswith((".mp3", ".wav", ".m4a")) else ".mp4"
    }
    if tool_type in exts:
        return exts[tool_type]
    if tool_type == "transcribe" or tool_type == "auto-subtitle":
        return "." + options.get("format", "srt")
    if tool_type == "translate-subtitle":
        return ".srt"
    
    if "format" in options:
        return "." + options["format"]
    return ".mp4"

@app.post("/api/v1/jobs")
async def create_job(
    file: UploadFile = File(...),
    tool_type: str = Form(...),
    options: str = Form("{}")
):
    import json
    opts = json.loads(options)
    
    job_id = str(uuid.uuid4())
    input_ext = os.path.splitext(file.filename)[1]
    input_path = os.path.join(STORAGE_DIR, f"{job_id}_in{input_ext}")
    
    out_ext = get_output_ext(tool_type, file.filename, opts)
    output_path = os.path.join(STORAGE_DIR, f"{job_id}_out{out_ext}")
    
    with open(input_path, "wb") as buffer:
        buffer.write(await file.read())
        
    db = SessionLocal()
    job = Job(id=job_id, status="pending", tool_type=tool_type, original_filename=file.filename)
    db.add(job)
    db.commit()
    db.close()
    
    process_media.delay(job_id, input_path, output_path, tool_type, opts)
    
    return {"job_id": job_id, "status": "pending"}

@app.get("/api/v1/jobs/{job_id}")
async def get_job(job_id: str):
    db = SessionLocal()
    job = db.query(Job).filter(Job.id == job_id).first()
    db.close()
    if not job:
        return {"error": "Job not found"}
    return {
        "job_id": job.id,
        "status": job.status,
        "error": job.error_message
    }

@app.get("/api/v1/jobs/{job_id}/download")
async def download_job(job_id: str):
    from fastapi.responses import FileResponse
    from glob import glob
    
    files = glob(os.path.join(STORAGE_DIR, f"{job_id}_out.*"))
    if not files:
        return {"error": "File not found"}
        
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
        content_disposition_type="attachment"
    )
