import uuid
from datetime import datetime
from sqlalchemy import Column, String, DateTime, Integer, Text, JSON, Enum as SAEnum
from sqlalchemy.dialects.postgresql import UUID
from app.database import Base
import enum

class JobStatus(str, enum.Enum):
    pending = "pending"
    processing = "processing"
    completed = "completed"
    failed = "failed"

class Job(Base):
    __tablename__ = "jobs"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    original_filename = Column(String(255), nullable=False)
    input_path = Column(String(500), nullable=False)
    output_path = Column(String(500), nullable=True)
    tool_type = Column(String(50), nullable=False)
    options = Column(JSON, default={})
    status = Column(SAEnum(JobStatus), default=JobStatus.pending, nullable=False)
    progress = Column(Integer, default=0)
    error_message = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    started_at = Column(DateTime, nullable=True)
    completed_at = Column(DateTime, nullable=True)
    expires_at = Column(DateTime, nullable=True)
    user_ip = Column(String(45), nullable=True)
    file_size = Column(Integer, nullable=True)
    input_mime = Column(String(100), nullable=True)
    output_format = Column(String(20), nullable=True)
    job_token = Column(String(64), nullable=True)
