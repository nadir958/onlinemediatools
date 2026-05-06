'use client';
import { useState, useRef, useCallback, DragEvent, ChangeEvent } from 'react';
import { Tool } from '@/lib/tools';
import { submitJob, JobStatus } from '@/lib/api';
import ToolOptions from './ToolOptions';
import JobStatusComp from './JobStatus';
import DownloadResult from './DownloadResult';

export default function ToolUpload({ tool }: { tool: Tool }) {
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [jobId, setJobId] = useState<string | null>(null);
  const [completed, setCompleted] = useState<JobStatus | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState<Record<string, string>>({});
  const inputRef = useRef<HTMLInputElement>(null);

  const onDrop = useCallback((e: DragEvent) => {
    e.preventDefault(); setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) setFile(f);
  }, []);

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) setFile(f);
  };

  const handleSubmit = async () => {
    if (!file) return;
    setError(''); setLoading(true); setJobId(null); setCompleted(null);
    try {
      const job = await submitJob(file, tool.toolType, options);
      setJobId(job.job_id);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Upload failed');
    } finally {
      setLoading(false);
    }
  };

  const reset = () => { setFile(null); setJobId(null); setCompleted(null); setError(''); };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!jobId ? (
        <div className="space-y-4">
          <div
            onDrop={onDrop}
            onDragOver={e => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onClick={() => inputRef.current?.click()}
            className={`relative border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all
              ${dragging ? 'border-indigo-400 bg-indigo-500/10 scale-[1.01]' : 'border-white/20 hover:border-indigo-500/50 hover:bg-white/5'}
              ${file ? 'border-green-500/50 bg-green-500/5' : ''}`}
          >
            <input ref={inputRef} type="file" className="hidden" accept={tool.accepts.join(',')} onChange={onFileChange} />
            {file ? (
              <div>
                <div className="text-4xl mb-2">✅</div>
                <p className="text-white font-semibold">{file.name}</p>
                <p className="text-sm text-slate-400">{(file.size / 1024 / 1024).toFixed(1)} MB</p>
              </div>
            ) : (
              <div>
                <div className="text-5xl mb-4">{tool.icon}</div>
                <p className="text-lg font-semibold text-white">Drop your file here or click to browse</p>
                <p className="text-sm text-slate-400 mt-2">Accepts: {tool.accepts.join(', ')} — Max 200 MB</p>
              </div>
            )}
          </div>

          <ToolOptions tool={tool} values={options} onChange={(k, v) => setOptions(prev => ({ ...prev, [k]: v }))} />

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            onClick={handleSubmit}
            disabled={!file || loading}
            className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-lg rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.99]"
          >
            {loading ? 'Uploading...' : `Convert Now →`}
          </button>
          <p className="text-xs text-slate-500 text-center">By uploading, you confirm you own or have permission to process this file.</p>
        </div>
      ) : (
        <div>
          <JobStatusComp jobId={jobId} onComplete={setCompleted} />
          {completed && <DownloadResult job={completed} />}
          <button onClick={reset} className="mt-4 text-sm text-slate-400 hover:text-white underline transition-colors">Convert another file</button>
        </div>
      )}
    </div>
  );
}
