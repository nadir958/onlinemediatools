'use client';
import { Tool } from '@/lib/tools';

interface ToolOptionsProps {
  tool: Tool;
  values: Record<string, string>;
  onChange: (key: string, value: string) => void;
}

export default function ToolOptions({ tool, values, onChange }: ToolOptionsProps) {
  if (!tool.options?.length) return null;
  return (
    <div className="mt-4 space-y-4">
      {tool.options.map(opt => (
        <div key={opt.key}>
          <label className="block text-sm font-medium text-slate-300 mb-1">{opt.label}</label>
          {opt.type === 'select' ? (
            <select
              value={values[opt.key] || opt.defaultValue || ''}
              onChange={e => onChange(opt.key, e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {opt.options?.map(o => <option key={o.value} value={o.value} className="bg-slate-800">{o.label}</option>)}
            </select>
          ) : (
            <input
              type="text"
              placeholder={opt.defaultValue}
              value={values[opt.key] || opt.defaultValue || ''}
              onChange={e => onChange(opt.key, e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-500"
            />
          )}
        </div>
      ))}
    </div>
  );
}
