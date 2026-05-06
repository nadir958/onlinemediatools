import subprocess, os
from app.services.file_service import get_output_path
from fastapi import HTTPException

def run_ffmpeg(args: list[str]) -> None:
    cmd = ["ffmpeg", "-y"] + args
    try:
        result = subprocess.run(
            cmd, capture_output=True, text=True, timeout=1200
        )
        if result.returncode != 0:
            raise HTTPException(500, f"FFmpeg error: {result.stderr[-500:]}")
    except subprocess.TimeoutExpired:
        raise HTTPException(500, "Processing timed out")

def webm_to_mp4(input_path: str) -> str:
    out = get_output_path(".mp4")
    run_ffmpeg(["-i", input_path, "-c:v", "libx264", "-c:a", "aac", "-movflags", "+faststart", out])
    return out

def mov_to_mp4(input_path: str) -> str:
    out = get_output_path(".mp4")
    run_ffmpeg(["-i", input_path, "-c:v", "libx264", "-c:a", "aac", "-movflags", "+faststart", out])
    return out

def mp4_to_mp3(input_path: str, bitrate: str = "192k") -> str:
    out = get_output_path(".mp3")
    run_ffmpeg(["-i", input_path, "-vn", "-acodec", "libmp3lame", "-ab", bitrate, out])
    return out

def video_to_mp3(input_path: str, bitrate: str = "192k") -> str:
    return mp4_to_mp3(input_path, bitrate)

def compress_video(input_path: str, quality: str = "balanced") -> str:
    crf_map = {"high_quality": "23", "balanced": "28", "small_size": "32"}
    crf = crf_map.get(quality, "28")
    out = get_output_path(".mp4")
    run_ffmpeg(["-i", input_path, "-c:v", "libx264", "-crf", crf, "-c:a", "aac", "-movflags", "+faststart", out])
    return out

def extract_audio(input_path: str, fmt: str = "mp3") -> str:
    ext = f".{fmt}"
    out = get_output_path(ext)
    codec_map = {"mp3": "libmp3lame", "aac": "aac", "wav": "pcm_s16le"}
    codec = codec_map.get(fmt, "libmp3lame")
    run_ffmpeg(["-i", input_path, "-vn", "-acodec", codec, out])
    return out

def remove_audio(input_path: str) -> str:
    out = get_output_path(".mp4")
    run_ffmpeg(["-i", input_path, "-c:v", "copy", "-an", out])
    return out

def convert_video(input_path: str, target_fmt: str = "mp4") -> str:
    ext = f".{target_fmt}"
    out = get_output_path(ext)
    if target_fmt == "mp4":
        run_ffmpeg(["-i", input_path, "-c:v", "libx264", "-c:a", "aac", "-movflags", "+faststart", out])
    else:
        run_ffmpeg(["-i", input_path, out])
    return out

def convert_audio(input_path: str, target_fmt: str = "mp3") -> str:
    ext = f".{target_fmt}"
    out = get_output_path(ext)
    run_ffmpeg(["-i", input_path, out])
    return out

def trim_video(input_path: str, start: str = "00:00:00", end: str = "00:01:00") -> str:
    out = get_output_path(".mp4")
    run_ffmpeg(["-i", input_path, "-ss", start, "-to", end, "-c:v", "libx264", "-c:a", "aac", out])
    return out

TOOL_MAP = {
    "webm_to_mp4": webm_to_mp4,
    "mov_to_mp4": mov_to_mp4,
    "mp4_to_mp3": mp4_to_mp3,
    "video_to_mp3": video_to_mp3,
    "compress_video": compress_video,
    "extract_audio": extract_audio,
    "remove_audio": remove_audio,
    "audio_converter": convert_audio,
    "video_converter": convert_video,
    "trim_video": trim_video,
}
