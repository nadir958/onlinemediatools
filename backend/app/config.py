from pydantic_settings import BaseSettings
from typing import List

class Settings(BaseSettings):
    DATABASE_URL: str = "postgresql://omtuser:changeme@postgres:5432/onlinemediatools"
    REDIS_URL: str = "redis://redis:6379/0"
    SECRET_KEY: str = "changeme_32char_secret_key_here_x"
    ALLOWED_ORIGINS: str = "http://localhost,https://onlinemediatools.com"
    UPLOAD_DIR: str = "/app/storage/uploads"
    OUTPUT_DIR: str = "/app/storage/outputs"
    MAX_FILE_SIZE_MB: int = 200
    MAX_VIDEO_DURATION_MINUTES: int = 20
    ENVIRONMENT: str = "production"
    FRONTEND_URL: str = "https://onlinemediatools.com"

    @property
    def origins(self) -> List[str]:
        return [o.strip() for o in self.ALLOWED_ORIGINS.split(",")]

    @property
    def max_file_size_bytes(self) -> int:
        return self.MAX_FILE_SIZE_MB * 1024 * 1024

    class Config:
        env_file = ".env"

settings = Settings()
