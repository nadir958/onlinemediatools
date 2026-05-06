from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import Job, JobStatus
import os
from pathlib import Path

router = APIRouter()

@router.get("/download/{job_id}")
def download_file(job_id: str, db: Session = Depends(get_db)):
    job = db.query(Job).filter(Job.id == job_id).first()
    if not job:
        raise HTTPException(404, "Job not found")
    if job.status != JobStatus.completed:
        raise HTTPException(400, "Job not completed yet")
    if not job.output_path or not os.path.exists(job.output_path):
        raise HTTPException(404, "Output file not found")

    filename = Path(job.output_path).name
    original = Path(job.original_filename).stem
    ext = Path(job.output_path).suffix
    download_name = f"{original}_converted{ext}"

    return FileResponse(
        job.output_path,
        filename=download_name,
        media_type="application/octet-stream",
    )
