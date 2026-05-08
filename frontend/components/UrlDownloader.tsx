'use client';
import { useState } from 'react';
import { getCopy, type Locale } from '@/lib/copy';
import { pollJob, getDownloadUrl } from '@/lib/api';

const API_URL = '/api';

export default function UrlDownloader({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const dl = copy.urlDownloader;

  const [url, setUrl] = useState('');
  const [format, setFormat] = useState<'video' | 'audio'>('video');
  const [status, setStatus] = useState<'idle' | 'loading' | 'polling' | 'done' | 'error'>('idle');
  const [jobId, setJobId] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const isValidUrl = (val: string) => {
    try { return Boolean(new URL(val)); } catch { return false; }
  };

  const handleSubmit = async () => {
    if (!isValidUrl(url)) { setErrorMsg(dl.invalidUrl); return; }
    setStatus('loading');
    setErrorMsg('');
    setDownloadUrl(null);
    try {
      const res = await fetch(`${API_URL}/url-jobs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, format }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || dl.failed);
      }
      const data = await res.json();
      setJobId(data.job_id);
      setStatus('polling');
      poll(data.job_id);
    } catch (e: unknown) {
      setStatus('error');
      setErrorMsg(e instanceof Error ? e.message : dl.failed);
    }
  };

  const poll = async (id: string) => {
    const interval = setInterval(async () => {
      try {
        const job = await pollJob(id, dl.failed);
        if (job.status === 'completed') {
          clearInterval(interval);
          setDownloadUrl(getDownloadUrl(id));
          setStatus('done');
        } else if (job.status === 'failed') {
          clearInterval(interval);
          setStatus('error');
          setErrorMsg(job.error_message || dl.failed);
        }
      } catch {
        clearInterval(interval);
        setStatus('error');
        setErrorMsg(dl.failed);
      }
    }, 2000);
  };

  const reset = () => { setStatus('idle'); setUrl(''); setJobId(null); setDownloadUrl(null); setErrorMsg(''); };

  return (
    <div className="space-y-6">
      {/* Format Toggle */}
      <div className="flex gap-3">
        {(['video', 'audio'] as const).map(f => (
          <button
            key={f}
            type="button"
            onClick={() => setFormat(f)}
            className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-all ${
              format === f
                ? 'bg-green-400 text-gray-900'
                : 'border border-white/20 text-white/70 hover:bg-white/10'
            }`}
          >
            {f === 'video' ? dl.videoFormat : dl.audioFormat}
          </button>
        ))}
      </div>

      {/* URL Input */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-white/70">{dl.pasteUrl}</label>
        <div className="flex gap-3">
          <input
            type="url"
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder={dl.urlPlaceholder}
            disabled={status === 'loading' || status === 'polling'}
            className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:border-green-400 focus:bg-white/15 transition-all"
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
          />
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!url || status === 'loading' || status === 'polling'}
            className="px-6 py-3 rounded-xl font-bold text-gray-900 bg-green-400 hover:bg-green-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            {status === 'loading' || status === 'polling' ? dl.processing : dl.download}
          </button>
        </div>
        {errorMsg && <p className="text-sm text-red-400">{errorMsg}</p>}
      </div>

      {/* Supported platforms */}
      <div className="flex flex-wrap gap-2">
        {['YouTube', 'TikTok', 'Twitter/X', 'Instagram', 'Vimeo', 'Facebook', 'Dailymotion', '+1000'].map(p => (
          <span key={p} className="px-3 py-1 rounded-full text-xs font-medium border border-white/15 text-white/50">
            {p}
          </span>
        ))}
      </div>

      {/* Processing state */}
      {(status === 'loading' || status === 'polling') && (
        <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-white/5 border border-white/10">
          <div className="w-5 h-5 rounded-full border-2 border-green-400 border-t-transparent animate-spin shrink-0" />
          <span className="text-white/70 text-sm">{dl.processing}</span>
        </div>
      )}

      {/* Done state */}
      {status === 'done' && downloadUrl && (
        <div className="space-y-4">
          <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-green-400/10 border border-green-400/30">
            <svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-green-300 font-semibold text-sm">{dl.complete}</span>
          </div>
          <div className="flex gap-3">
            <a
              href={downloadUrl}
              download
              className="flex-1 py-3 rounded-xl font-bold text-center text-gray-900 bg-green-400 hover:bg-green-300 transition-all"
            >
              {format === 'video' ? dl.downloadVideo : dl.downloadAudio}
            </a>
            <button
              type="button"
              onClick={reset}
              className="px-5 py-3 rounded-xl border border-white/20 text-white/70 hover:bg-white/10 transition-all text-sm"
            >
              {dl.another}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
