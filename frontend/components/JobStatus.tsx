'use client';
import { useEffect, useState, useCallback } from 'react';
import { getCopy } from '@/lib/copy';
import type { Locale } from '@/lib/i18n';
import { pollJob, JobStatus as IJobStatus } from '@/lib/api';

interface Props {
  jobId: string;
  onComplete: (job: IJobStatus) => void;
  locale: Locale;
}

export default function JobStatus({ jobId, onComplete, locale }: Props) {
  const [job, setJob] = useState<IJobStatus | null>(null);
  const copy = getCopy(locale).upload;

  const poll = useCallback(async () => {
    try {
      const data = await pollJob(jobId, copy.statusFailed);
      setJob(data);
      if (data.status === 'completed') onComplete(data);
      return data.status;
    } catch { return 'error'; }
  }, [jobId, onComplete, copy.statusFailed]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const start = async () => {
      const status = await poll();
      if (status !== 'completed' && status !== 'failed') {
        interval = setInterval(async () => {
          const s = await poll();
          if (s === 'completed' || s === 'failed') clearInterval(interval);
        }, 2000);
      }
    };
    start();
    return () => clearInterval(interval);
  }, [poll]);

  if (!job) return <div className="mt-6 text-slate-400 text-sm animate-pulse">{copy.startingJob}</div>;

  const statusColor = {
    pending: 'text-yellow-400',
    processing: 'text-indigo-400',
    completed: 'text-green-400',
    failed: 'text-red-400',
  }[job.status] || 'text-slate-400';

  const label = job.status === 'processing'
    ? copy.processing
    : locale === 'fr'
      ? { pending: 'En attente', completed: 'Terminé', failed: 'Échec' }[job.status] || job.status
      : job.status;

  return (
    <div className="mt-6 space-y-3">
      <div className={`text-sm font-semibold ${statusColor} capitalize`}>
        {label}
      </div>
      {(job.status === 'pending' || job.status === 'processing') && (
        <div className="w-full bg-white/10 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-500 animate-pulse"
            style={{ width: `${job.progress || 30}%` }}
          />
        </div>
      )}
      {job.status === 'failed' && (
        <p className="text-sm text-red-400">{job.error_message || copy.failed}</p>
      )}
    </div>
  );
}
