'use client';
import { Tool } from '@/lib/tools';

interface Props {
  tool: Tool;
  values: Record<string, string>;
  onChange: (key: string, value: string) => void;
}

export default function ToolOptions({ tool, values, onChange }: Props) {
  if (!tool.requiresOptions) return null;

  if (tool.toolType === 'trim-video') {
    return (
      <div className="flex gap-4 mb-4 justify-center">
        <div>
          <label className="block text-xs text-white/60 mb-1">Start Time (HH:MM:SS)</label>
          <input 
            type="text" 
            placeholder="00:00:00"
            className="w-32 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:border-green-400"
            value={values.start || ''}
            onChange={e => onChange('start', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-xs text-white/60 mb-1">End Time (HH:MM:SS)</label>
          <input 
            type="text" 
            placeholder="00:00:10"
            className="w-32 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:border-green-400"
            value={values.end || ''}
            onChange={e => onChange('end', e.target.value)}
          />
        </div>
      </div>
    );
  }

  if (tool.toolType === 'video-converter' || tool.toolType === 'audio-converter') {
    const formats = tool.toolType === 'video-converter' 
      ? ['mp4', 'webm', 'mkv', 'avi', 'mov'] 
      : ['mp3', 'wav', 'aac', 'ogg', 'flac'];
      
    return (
      <div className="mb-4">
        <label className="block text-xs text-white/60 mb-1 text-center">Output Format</label>
        <select 
          className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-400 w-full max-w-xs mx-auto block"
          value={values.format || formats[0]}
          onChange={e => onChange('format', e.target.value)}
        >
          {formats.map(fmt => <option key={fmt} value={fmt} style={{color:'#000'}}>{fmt.toUpperCase()}</option>)}
        </select>
      </div>
    );
  }

  if (tool.toolType === 'transcribe' || tool.toolType === 'auto-subtitle') {
    const formats = tool.toolType === 'transcribe' ? ['txt', 'srt'] : ['srt', 'vtt'];
    return (
      <div className="mb-4">
        <label className="block text-xs text-white/60 mb-1 text-center">Output Format</label>
        <select 
          className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-400 w-full max-w-xs mx-auto block"
          value={values.format || formats[0]}
          onChange={e => onChange('format', e.target.value)}
        >
          {formats.map(fmt => <option key={fmt} value={fmt} style={{color:'#000'}}>{fmt.toUpperCase()}</option>)}
        </select>
      </div>
    );
  }

  if (tool.toolType === 'translate-subtitle') {
    return (
      <div className="mb-4">
        <label className="block text-xs text-white/60 mb-1 text-center">Target Language</label>
        <select 
          className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-400 w-full max-w-xs mx-auto block"
          value={values.language || 'fr'}
          onChange={e => onChange('language', e.target.value)}
        >
          <option value="en" style={{color:'#000'}}>English</option>
          <option value="fr" style={{color:'#000'}}>French (Français)</option>
          <option value="es" style={{color:'#000'}}>Spanish (Español)</option>
        </select>
      </div>
    );
  }

  return null;
}
