# OnlineMediaTools

Free Online Video & Audio Tools — Convert, compress, extract, and optimize media files.

## Stack
- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: FastAPI, Python 3.11
- **Queue**: Celery + Redis
- **Database**: PostgreSQL
- **Processing**: FFmpeg / FFprobe
- **Infrastructure**: Docker, Nginx

## Quick Start

```bash
# 1. Clone
git clone https://github.com/nadir958/onlinemediatools.git
cd onlinemediatools

# 2. Configure
cp .env.example .env
# Edit .env with your domain and secure passwords

# 3. Run
docker compose up -d --build
```

App runs at http://localhost (port 80).

## Tools Available
1. WebM to MP4
2. MOV to MP4
3. MP4 to MP3
4. Video to MP3
5. Compress Video
6. Extract Audio
7. Remove Audio from Video
8. Audio Converter
9. Video Converter
10. Trim Video

## API Endpoints
- `POST /api/jobs` — Submit a conversion job
- `GET /api/jobs/{id}` — Poll job status
- `GET /api/download/{id}` — Download result
- `POST /api/metadata` — Get file metadata
- `GET /api/health` — Health check
- `GET /api/docs` — Swagger UI

## Production Notes
- Set `ALLOWED_ORIGINS` in `.env` to your domain
- Set `FRONTEND_URL` and `API_URL` to your domain
- Add SSL certs to `nginx/ssl/` and update `nginx.conf`
- Max upload: 200 MB
- Files auto-deleted after 2 hours
- Celery concurrency = 1 (safe for 4 GB VPS)
