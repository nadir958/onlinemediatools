from app.worker.celery_app import celery_app
from app.database import SessionLocal
from app.models import Job, JobStatus
from app.services.ffmpeg_service import TOOL_MAP
from datetime import datetime
import logging

logger = logging.getLogger(__name__)

@celery_app.task(bind=True, name="app.worker.tasks.process_job", max_retries=0)
def process_job(self, job_id: str):
    db = SessionLocal()
    try:
        job = db.query(Job).filter(Job.id == job_id).first()
        if not job:
            return

        job.status = JobStatus.processing
        job.started_at = datetime.utcnow()
        job.progress = 10
        db.commit()

        handler = TOOL_MAP.get(job.tool_type)
        if not handler:
            raise ValueError(f"Unknown tool: {job.tool_type}")

        opts = job.options or {}
        output_path = handler(job.input_path, **opts)

        job.output_path = output_path
        job.status = JobStatus.completed
        job.completed_at = datetime.utcnow()
        job.progress = 100
        db.commit()

    except Exception as e:
        logger.error(f"Job {job_id} failed: {e}")
        if job:
            job.status = JobStatus.failed
            job.error_message = str(e)[:500]
            job.progress = 0
            db.commit()
    finally:
        db.close()
