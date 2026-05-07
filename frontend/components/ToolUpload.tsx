'use client';
import { useState, useRef, useCallback, DragEvent, ChangeEvent } from 'react';
import SiteIcon from '@/components/SiteIcon';
import { getCopy } from '@/lib/copy';
import type { Locale } from '@/lib/i18n';
import { Tool } from '@/lib/tools';
import { submitJob, JobStatus } from '@/lib/api';
import ToolOptions from './ToolOptions';
import JobStatusComp from './JobStatus';
import DownloadResult from './DownloadResult';

function getFileExtension(fileName: string) {
  const dotIndex = fileName.lastIndexOf('.');
  return dotIndex >= 0 ? fileName.slice(dotIndex).toLowerCase() : '';
}

function parseTimeToSeconds(value: string) {
  if (!/^\d{2}:\d{2}:\d{2}$/.test(value)) return null;
  const [hours, minutes, seconds] = value.split(':').map(Number);
  if (minutes > 59 || seconds > 59) return null;
  return hours * 3600 + minutes * 60 + seconds;
}

function formatText(template: string, values: Record<string, string>) {
  return Object.entries(values).reduce((acc, [key, value]) => acc.replace(`{${key}}`, value), template);
}

export default function ToolUpload({ tool, locale }: { tool: Tool; locale: Locale }) {
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [jobId, setJobId] = useState<string | null>(null);
  const [completed, setCompleted] = useState<JobStatus | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState<Record<string, string>>({});
  const inputRef = useRef<HTMLInputElement>(null);
  const copy = getCopy(locale).upload;

  const validateFile = useCallback((candidate: File) => {
    const extension = getFileExtension(candidate.name);
    if (!tool.accepts.includes(extension)) {
      const supported = tool.accepts.join(', ').toUpperCase();
      setError(formatText(copy.unsupportedType, { supported }));
      setFile(null);
      return false;
    }
    setError('');
    setFile(candidate);
    return true;
  }, [tool.accepts, copy.unsupportedType]);

  const onDrop = useCallback((e: DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) validateFile(droppedFile);
  }, [validateFile]);

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) validateFile(selectedFile);
  };

  const validateOptions = () => {
    if (tool.toolType !== 'trim_video') return true;

    const startValue = options.start || tool.options?.find(option => option.key === 'start')?.defaultValue || '00:00:00';
    const endValue = options.end || tool.options?.find(option => option.key === 'end')?.defaultValue || '00:01:00';
    const startSeconds = parseTimeToSeconds(startValue);
    const endSeconds = parseTimeToSeconds(endValue);

    if (startSeconds === null || endSeconds === null) {
      setError(copy.invalidTrim);
      return false;
    }

    if (endSeconds <= startSeconds) {
      setError(copy.invalidTrimOrder);
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!file) return;
    if (!validateOptions()) return;

    setError('');
    setLoading(true);
    setJobId(null);
    setCompleted(null);

    try {
      const job = await submitJob(file, tool.toolType, options, copy.uploadFailed);
      setJobId(job.job_id);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : copy.uploadFailed);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setFile(null);
    setJobId(null);
    setCompleted(null);
    setError('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!jobId ? (
        <div className="space-y-5">
          <div
            onDrop={onDrop}
            onDragOver={e => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onClick={() => inputRef.current?.click()}
            className={`upload-zone p-12 text-center cursor-pointer ${dragging ? 'dragging' : ''} ${file ? 'has-file' : ''}`}
          >
            <input ref={inputRef} type="file" className="hidden" accept={tool.accepts.join(',')} onChange={onFileChange} />
            {file ? (
              <div>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'rgba(74,222,128,0.2)', border: '2px solid #4ade80' }}>
                  <SiteIcon name="fileReady" className="w-8 h-8 text-green-400" />
                </div>
                <p className="text-white font-bold text-lg">{file.name}</p>
                <p className="text-white/60 text-sm mt-1">{(file.size / 1024 / 1024).toFixed(1)} MB</p>
                <p className="text-green-400 text-sm mt-2 font-medium" style={{ color: '#4ade80' }}>{copy.ready}</p>
              </div>
            ) : (
              <div>
                <SiteIcon name={tool.icon} className="w-12 h-12 mx-auto mb-5 text-white" />
                <p className="text-xl font-bold text-white">{copy.dropFile}</p>
                <p className="text-white/60 mt-2">{copy.orBrowse} <span className="text-white font-semibold underline decoration-dotted cursor-pointer">{copy.clickBrowse}</span></p>
                <p className="text-white/40 text-sm mt-4">{formatText(copy.supports, { supported: tool.accepts.join(', ').toUpperCase() })}</p>
              </div>
            )}
          </div>

          <ToolOptions tool={tool} values={options} onChange={(key, value) => setOptions(prev => ({ ...prev, [key]: value }))} />

          {error && (
            <div className="px-4 py-3 rounded-xl text-sm font-medium" style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.4)', color: '#fca5a5' }}>
              {error}
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={!file || loading}
            className="btn-white w-full py-4 text-lg font-bold rounded-2xl disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
            style={{ fontSize: '1.05rem' }}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                {copy.uploading}
              </span>
            ) : tool.actionLabel}
          </button>
          <p className="text-xs text-white/40 text-center">{copy.ownership}</p>
        </div>
      ) : (
        <div>
          <JobStatusComp jobId={jobId} onComplete={setCompleted} locale={locale} />
          {completed && <DownloadResult job={completed} locale={locale} />}
          <button onClick={reset} className="mt-5 text-sm text-white/50 hover:text-white underline decoration-dotted transition-colors">
            {copy.processAnother}
          </button>
        </div>
      )}
    </div>
  );
}
