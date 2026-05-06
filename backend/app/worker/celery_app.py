from celery import Celery
from app.config import settings

celery_app = Celery(
    "omt_worker",
    broker=settings.REDIS_URL,
    backend=settings.REDIS_URL,
    include=["app.worker.tasks", "app.worker.cleanup"],
)

celery_app.conf.update(
    task_serializer="json",
    result_serializer="json",
    accept_content=["json"],
    timezone="UTC",
    enable_utc=True,
    worker_max_tasks_per_child=50,
    task_acks_late=True,
    task_routes={"app.worker.tasks.process_job": {"queue": "media_jobs"}},
    beat_schedule={
        "cleanup-expired-jobs": {
            "task": "app.worker.cleanup.cleanup_expired_jobs",
            "schedule": 900.0,
        },
    },
)
