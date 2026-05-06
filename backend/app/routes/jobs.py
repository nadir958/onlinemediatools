from fastapi import APIRouter, Depends, Request, UploadFile, File, Form, HTTPException
from sqlalchemy.orm import Session
from datetime import datetime, timedelta
from app.database import get_db
from app.models import Job, JobStatus
from app.schemas import JobResponse
from app.services.file_service import validate_and_save
from app.services.security import generate_job_token, get_client_ip
from app.worker.tasks import process_job
from app.config import settings
import uuid, json

router = APIRouter()

VALID_TOOLS = [
    "webm_to_mp4","mov_to_mp4","mp4_to_mp3","video_to_mp3",
    "compress_video","extract_audio","remove_audio",
    "audio_converter","video_converter","trim_video"
]

@router.post("/jobs", response_model=JobResponse)
async def create_job(
    request: Request,
    file: UploadFile = File(...),
    tool_type: str = Form(...),
    options: str = Form(default="{}"),
    db: Session = Depends(get_db),
):
    if tool_type not in VALID_TOOLS:
        raise HTTPException(400, f"Invalid tool: {tool_type}")

    try:
        opts = json.loads(options)
    except Exception:
        opts = {}

    input_path, ext, mime, size = validate_and_save(file, settings.max_file_size_bytes)

    job = Job(
        id=uuid.uuid4(),
        original_filename=file.filename or "upload",
        input_path=input_path,
        tool_type=tool_type,
        options=opts,
        status=JobStatus.pending,
        file_size=size,
        input_mime=mime,
        user_ip=get_client_ip(request),
        job_token=generate_job_token(),
        expires_at=datetime.utcnow() + timedelta(hours=2),
    )
    db.add(job)
    db.commit()
    db.refresh(job)

    process_job.apply_async(args=[str(job.id)], queue="media_jobs")

    return JobResponse(
        job_id=str(job.id),
        status=job.status.value,
        progress=job.progress,
        original_filename=job.original_filename,
        expires_at=job.expires_at,
    )

@router.get("/jobs/{job_id}", response_model=JobResponse)
def get_job(job_id: str, db: Session = Depends(get_db)):
    job = db.query(Job).filter(Job.id == job_id).first()
    if not job:
        raise HTTPException(404, "Job not found")

    download_url = None
    if job.status == JobStatus.completed and job.output_path:
        download_url = f"/api/download/{job_id}"

    return JobResponse(
        job_id=str(job.id),
        status=job.status.value,
        progress=job.progress,
        error_message=job.error_message,
        download_url=download_url,
        expires_at=job.expires_at,
        original_filename=job.original_filename,
    )
