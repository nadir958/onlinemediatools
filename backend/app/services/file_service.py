import os, uuid, magic, shutil
from pathlib import Path
from fastapi import UploadFile, HTTPException
from app.config import settings

ALLOWED_EXTENSIONS = {
    "video": [".mp4", ".webm", ".mov", ".avi", ".mkv", ".flv", ".wmv", ".m4v"],
    "audio": [".mp3", ".wav", ".aac", ".ogg", ".flac", ".m4a", ".wma"],
}
ALL_ALLOWED = [e for exts in ALLOWED_EXTENSIONS.values() for e in exts]

ALLOWED_MIMES = {
    "video/mp4", "video/webm", "video/quicktime", "video/x-msvideo",
    "video/x-matroska", "video/x-flv", "video/x-ms-wmv",
    "audio/mpeg", "audio/wav", "audio/aac", "audio/ogg",
    "audio/flac", "audio/x-m4a", "audio/mp4",
}

def validate_and_save(file: UploadFile, max_bytes: int) -> tuple[str, str, str, int]:
    ext = Path(file.filename or "").suffix.lower()
    if ext not in ALL_ALLOWED:
        raise HTTPException(400, f"File type {ext} not allowed")

    os.makedirs(settings.UPLOAD_DIR, exist_ok=True)
    unique_name = f"{uuid.uuid4()}{ext}"
    save_path = os.path.join(settings.UPLOAD_DIR, unique_name)

    size = 0
    with open(save_path, "wb") as f:
        while chunk := file.file.read(1024 * 1024):
            size += len(chunk)
            if size > max_bytes:
                os.unlink(save_path)
                raise HTTPException(413, f"File too large. Max {max_bytes // 1024 // 1024} MB")
            f.write(chunk)

    mime = magic.from_file(save_path, mime=True)
    if mime not in ALLOWED_MIMES:
        os.unlink(save_path)
        raise HTTPException(400, f"Invalid MIME type: {mime}")

    return save_path, ext, mime, size

def get_output_path(ext: str) -> str:
    os.makedirs(settings.OUTPUT_DIR, exist_ok=True)
    return os.path.join(settings.OUTPUT_DIR, f"{uuid.uuid4()}{ext}")

def cleanup_file(path: str):
    try:
        if path and os.path.exists(path):
            os.unlink(path)
    except Exception:
        pass
