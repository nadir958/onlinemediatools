import type { Metadata } from 'next';
import Link from 'next/link';
import { TOOLS } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'All Free Online Media Tools',
  description: 'Browse all free online video and audio tools. Convert, compress, extract and optimize media files online.',
};

export default function ToolsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-black text-white text-center mb-4">All Media Tools</h1>
      <p className="text-slate-400 text-center mb-12 text-lg">Free online tools for video and audio processing</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {TOOLS.map(tool => (
          <Link key={tool.slug} href={`/${tool.slug}`}
            className="group glass-card rounded-2xl p-6 hover:border-indigo-500/40 hover:bg-white/8 transition-all">
            <div className="text-3xl mb-3">{tool.icon}</div>
            <h2 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">{tool.h1}</h2>
            <p className="text-sm text-slate-400 mt-2">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
