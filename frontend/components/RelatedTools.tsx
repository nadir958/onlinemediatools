import Link from 'next/link';
import { TOOLS } from '@/lib/tools';

interface RelatedToolsProps {
  slugs: string[];
}

export default function RelatedTools({ slugs }: RelatedToolsProps) {
  const tools = slugs.map(s => TOOLS.find(t => t.slug === s)).filter(Boolean);
  if (!tools.length) return null;
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-white mb-6">Related Tools</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tools.map(tool => (
          <Link key={tool!.slug} href={`/${tool!.slug}`}
            className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-500/50 rounded-xl p-4 transition-all">
            <div className="text-3xl mb-2">{tool!.icon}</div>
            <div className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">{tool!.title}</div>
            <div className="text-xs text-slate-400 mt-1">{tool!.description.slice(0, 50)}...</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
