from fastapi import APIRouter, UploadFile, File, HTTPException
from app.schemas import MetadataResponse
from app.services.file_service import validate_and_save, cleanup_file
from app.config import settings
import subprocess, json, os

router = APIRouter()

@router.post("/metadata", response_model=MetadataResponse)
async def get_metadata(file: UploadFile = File(...)):
    input_path, _, _, size = validate_and_save(file, settings.max_file_size_bytes)
    try:
        cmd = [
            "ffprobe", "-v", "quiet", "-print_format", "json",
            "-show_streams", "-show_format", input_path
        ]
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
        data = json.loads(result.stdout)

        fmt = data.get("format", {})
        streams = data.get("streams", [])
        video = next((s for s in streams if s.get("codec_type") == "video"), None)

        resolution = None
        codec = None
        if video:
            w = video.get("width")
            h = video.get("height")
            resolution = f"{w}x{h}" if w and h else None
            codec = video.get("codec_name")

        return MetadataResponse(
            duration=float(fmt.get("duration", 0)) if fmt.get("duration") else None,
            codec=codec,
            resolution=resolution,
            bitrate=int(fmt.get("bit_rate", 0)) if fmt.get("bit_rate") else None,
            file_size=size,
            format=fmt.get("format_name"),
        )
    finally:
        cleanup_file(input_path)
