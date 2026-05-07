'use client';
import { Tool } from '@/lib/tools';

interface Props {
  tool: Tool;
  values: Record<string, string>;
  onChange: (key: string, value: string) => void;
}

export default function ToolOptions({ tool, values, onChange }: Props) {
  if (!tool.options?.length) return null;

  return (
    <div className="space-y-4 mb-4">
      {tool.options.map(option => {
        if (option.type === 'time') {
          return (
            <div key={option.key} className="max-w-sm mx-auto">
              <label className="block text-xs text-white/60 mb-1 text-center">{option.label}</label>
              <input
                type="text"
                placeholder={option.defaultValue || '00:00:00'}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:border-green-400"
                value={values[option.key] || option.defaultValue || ''}
                onChange={e => onChange(option.key, e.target.value)}
              />
            </div>
          );
        }

        return (
          <div key={option.key} className="max-w-sm mx-auto">
            <label className="block text-xs text-white/60 mb-1 text-center">{option.label}</label>
            <select
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-400 w-full block"
              value={values[option.key] || option.defaultValue || option.options?.[0]?.value || ''}
              onChange={e => onChange(option.key, e.target.value)}
            >
              {option.options?.map(choice => (
                <option key={choice.value} value={choice.value} style={{ color: '#000' }}>
                  {choice.label}
                </option>
              ))}
            </select>
          </div>
        );
      })}
    </div>
  );
}
