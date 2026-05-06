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
        <div className="space-y-5">
          {/* Drop zone */}
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
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl" style={{background:'rgba(74,222,128,0.2)', border:'2px solid #4ade80'}}>✅</div>
                <p className="text-white font-bold text-lg">{file.name}</p>
                <p className="text-white/60 text-sm mt-1">{(file.size / 1024 / 1024).toFixed(1)} MB</p>
                <p className="text-green-400 text-sm mt-2 font-medium" style={{color:'#4ade80'}}>Ready to convert</p>
              </div>
            ) : (
              <div>
                <div className="text-5xl mb-5">{tool.icon}</div>
                <p className="text-xl font-bold text-white">Drop your file here</p>
                <p className="text-white/60 mt-2">or <span className="text-white font-semibold underline decoration-dotted cursor-pointer">click to browse</span></p>
                <p className="text-white/40 text-sm mt-4">Supports: {tool.accepts.join(', ').toUpperCase()} — Max 200 MB</p>
              </div>
            )}
          </div>

          <ToolOptions tool={tool} values={options} onChange={(k, v) => setOptions(prev => ({ ...prev, [k]: v }))} />

          {error && (
            <div className="px-4 py-3 rounded-xl text-sm font-medium" style={{background:'rgba(239,68,68,0.15)', border:'1px solid rgba(239,68,68,0.4)', color:'#fca5a5'}}>
              {error}
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={!file || loading}
            className="btn-white w-full py-4 text-lg font-bold rounded-2xl disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
            style={{fontSize:'1.05rem'}}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                Uploading...
              </span>
            ) : `Convert Now →`}
          </button>
          <p className="text-xs text-white/40 text-center">By uploading, you confirm you own or have permission to process this file.</p>
        </div>
      ) : (
        <div>
          <JobStatusComp jobId={jobId} onComplete={setCompleted} />
          {completed && <DownloadResult job={completed} />}
          <button onClick={reset} className="mt-5 text-sm text-white/50 hover:text-white underline decoration-dotted transition-colors">
            ← Convert another file
          </button>
        </div>
      )}
    </div>
  );
}
