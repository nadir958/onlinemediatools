'use client';
import { JobStatus } from '@/lib/api';

interface Props { job: JobStatus; }

export default function DownloadResult({ job }: Props) {
  if (job.status !== 'completed' || !job.download_url) return null;
  return (
    <div className="mt-6 p-5 bg-green-500/10 border border-green-500/30 rounded-xl">
      <p className="text-green-400 font-semibold mb-3">Conversion complete!</p>
      <a
        href={job.download_url}
        download
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download File
      </a>
      {job.expires_at && (
        <p className="text-xs text-slate-400 mt-3">File available until {new Date(job.expires_at).toLocaleTimeString()} (auto-deleted after 2h)</p>
      )}
    </div>
  );
}
