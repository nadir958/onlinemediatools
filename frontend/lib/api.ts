const API_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

export interface JobStatus {
  job_id: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  progress: number;
  error_message?: string;
  download_url?: string;
  expires_at?: string;
  original_filename: string;
}

export async function submitJob(
  file: File,
  toolType: string,
  options: Record<string, string> = {}
): Promise<JobStatus> {
  const form = new FormData();
  form.append('file', file);
  form.append('tool_type', toolType);
  form.append('options', JSON.stringify(options));

  const res = await fetch(`${API_URL}/jobs`, { method: 'POST', body: form });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || 'Upload failed');
  }
  const data = await res.json();
  return { ...data, job_id: data.job_id };
}

export async function pollJob(jobId: string): Promise<JobStatus> {
  const res = await fetch(`${API_URL}/jobs/${jobId}`);
  if (!res.ok) throw new Error('Failed to get job status');
  return res.json();
}

export function getDownloadUrl(jobId: string): string {
  return `${API_URL}/download/${jobId}`;
}
