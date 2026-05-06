from app.worker.celery_app import celery_app
from app.database import SessionLocal
from app.models import Job, JobStatus
from app.services.file_service import cleanup_file
from datetime import datetime
import logging

logger = logging.getLogger(__name__)

@celery_app.task(name="app.worker.cleanup.cleanup_expired_jobs")
def cleanup_expired_jobs():
    db = SessionLocal()
    try:
        expired = db.query(Job).filter(
            Job.expires_at < datetime.utcnow(),
            Job.status.in_([JobStatus.completed, JobStatus.failed])
        ).all()

        count = 0
        for job in expired:
            cleanup_file(job.input_path)
            cleanup_file(job.output_path)
            db.delete(job)
            count += 1

        db.commit()
        logger.info(f"Cleaned up {count} expired jobs")
        return count
    finally:
        db.close()
