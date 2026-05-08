import os
import subprocess
from celery import Celery
from app.database import SessionLocal
from app.models import Job

CELERY_BROKER_URL = os.environ.get("CELERY_BROKER_URL", "redis://redis:6379/0")
CELERY_RESULT_BACKEND = os.environ.get("CELERY_RESULT_BACKEND", "redis://redis:6379/0")

celery = Celery(__name__, broker=CELERY_BROKER_URL, backend=CELERY_RESULT_BACKEND)
celery.conf.task_default_queue = "media_jobs"

def get_ai_services():
    import app.ai_services as ai
    return ai

@celery.task(bind=True, name="process_media")
def process_media(self, job_id: str, input_path: str, output_path: str, tool_type: str, options: dict = None):
    db = SessionLocal()
    job = db.query(Job).filter(Job.id == job_id).first()
    if not job:
        db.close()
        return "Job not found"
    
    job.status = "processing"
    db.commit()

    options = options or {}
    success = False

    try:
        if tool_type == "webm-to-mp4" or tool_type == "mov-to-mp4":
            cmd = ["ffmpeg", "-y", "-i", input_path, "-c:v", "libx264", "-preset", "fast", "-c:a", "aac", output_path]
            subprocess.run(cmd, check=True)
            success = True
            
        elif tool_type == "mp4-to-mp3" or tool_type == "video-to-mp3" or tool_type == "extract-audio":
            cmd = ["ffmpeg", "-y", "-i", input_path, "-q:a", "0", "-map", "a", output_path]
            subprocess.run(cmd, check=True)
            success = True
            
        elif tool_type == "compress-video":
            cmd = ["ffmpeg", "-y", "-i", input_path, "-vcodec", "libx264", "-crf", "28", output_path]
            subprocess.run(cmd, check=True)
            success = True
            
        elif tool_type == "trim-video":
            start = options.get("start", "00:00:00")
            end = options.get("end", "00:00:10")
            cmd = ["ffmpeg", "-y", "-i", input_path, "-ss", start, "-to", end, "-c", "copy", output_path]
            subprocess.run(cmd, check=True)
            success = True
            
        elif tool_type == "remove-audio":
            cmd = ["ffmpeg", "-y", "-i", input_path, "-c", "copy", "-an", output_path]
            subprocess.run(cmd, check=True)
            success = True
            
        elif tool_type == "video-converter" or tool_type == "audio-converter":
            cmd = ["ffmpeg", "-y", "-i", input_path, output_path]
            subprocess.run(cmd, check=True)
            success = True
            
        elif tool_type == "transcribe" or tool_type == "auto-subtitle":
            fmt = options.get("format", "srt")
            ai = get_ai_services()
            ai.transcribe_audio(input_path, output_path, out_format=fmt)
            success = True
            
        elif tool_type == "translate-subtitle":
            target_lang = options.get("language", "fr")
            ai = get_ai_services()
            temp_srt = input_path + ".en.srt"
            ai.transcribe_audio(input_path, temp_srt, out_format="srt", task="translate")
            if target_lang == "en":
                os.rename(temp_srt, output_path)
            else:
                ai.translate_srt(temp_srt, output_path, target_lang)
                if os.path.exists(temp_srt):
                    os.remove(temp_srt)
            success = True
            
        elif tool_type == "clean-audio":
            cmd = ["ffmpeg", "-y", "-i", input_path, "-af", "afftdn", output_path]
            subprocess.run(cmd, check=True)
            success = True

        if success:
            job.status = "completed"
        else:
            job.status = "failed"
            job.error_message = "Tool type not supported"
            
    except Exception as e:
        job.status = "failed"
        job.error_message = str(e)
        
    db.commit()
    db.close()
    return job.status


@celery.task(name="download_from_url", bind=True, max_retries=2)
def download_from_url(self, job_id: str, url: str, format_type: str = "video"):
    """Download video or audio from URL using yt-dlp (max 480p for video)."""
    import subprocess, os, uuid
    from sqlalchemy import create_engine
    from sqlalchemy.orm import sessionmaker
    DATABASE_URL = os.environ.get("DATABASE_URL", "sqlite:////app/storage/jobs.db")
    engine = create_engine(DATABASE_URL)
    Session = sessionmaker(bind=engine)
    db = Session()
    
    try:
        from app.models import Job
        job = db.query(Job).filter(Job.job_id == job_id).first()
        if not job:
            return
        job.status = "processing"
        db.commit()

        STORAGE = "/app/storage"
        out_id = str(uuid.uuid4())

        if format_type == "audio":
            output_path = f"{STORAGE}/{out_id}_out.mp3"
            cmd = [
                "yt-dlp",
                "--no-playlist",
                "--extract-audio",
                "--audio-format", "mp3",
                "--audio-quality", "5",
                "--output", output_path.replace(".mp3", ".%(ext)s"),
                "--no-warnings",
                "--quiet",
                url,
            ]
            # yt-dlp adds extension, find the file
            result = subprocess.run(cmd, check=True, capture_output=True, text=True, timeout=300)
            # Find the actual output file
            import glob
            pattern = output_path.replace(".mp3", ".*")
            files = glob.glob(pattern)
            if files:
                actual_file = files[0]
                if actual_file != output_path:
                    os.rename(actual_file, output_path)
        else:
            output_path = f"{STORAGE}/{out_id}_out.mp4"
            cmd = [
                "yt-dlp",
                "--no-playlist",
                # Max 480p, prefer mp4
                "--format", "bestvideo[height<=480][ext=mp4]+bestaudio[ext=m4a]/best[height<=480][ext=mp4]/best[height<=480]/best",
                "--merge-output-format", "mp4",
                "--output", output_path,
                "--no-warnings",
                "--quiet",
                url,
            ]
            subprocess.run(cmd, check=True, capture_output=True, text=True, timeout=300)

        job.output_path = output_path
        job.status = "completed"
        db.commit()

    except subprocess.CalledProcessError as e:
        job.status = "failed"
        job.error_message = f"Download failed: {e.stderr[:200] if e.stderr else 'Unknown error'}"
        db.commit()
    except Exception as e:
        job.status = "failed"
        job.error_message = str(e)[:300]
        db.commit()
    finally:
        db.close()
    return job_id

@celery.task(name="cleanup_files")
def cleanup_files():
    import time
    from glob import glob
    STORAGE = "/app/storage"
    now = time.time()
    for f in glob(f"{STORAGE}/*"):
        if os.stat(f).st_mtime < now - 7200:
            os.remove(f)
