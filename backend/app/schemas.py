from pydantic import BaseModel
from typing import Optional, Dict, Any
from datetime import datetime
from uuid import UUID

class JobResponse(BaseModel):
    job_id: str
    status: str
    progress: int
    error_message: Optional[str] = None
    download_url: Optional[str] = None
    expires_at: Optional[datetime] = None
    original_filename: str

    class Config:
        from_attributes = True

class MetadataResponse(BaseModel):
    duration: Optional[float] = None
    codec: Optional[str] = None
    resolution: Optional[str] = None
    bitrate: Optional[int] = None
    file_size: int
    format: Optional[str] = None
