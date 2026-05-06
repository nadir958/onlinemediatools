import type { Metadata } from 'next';
import Link from 'next/link';
import { TOOLS } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'All Free Online Media Tools',
  description: 'Browse all free online video and audio conversion tools. No signup required.',
};

export default function ToolsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-14">
        <span className="badge-green inline-block mb-4">Free Tools</span>
        <h1 className="text-4xl font-black text-white mb-3">All Media Tools</h1>
        <p className="text-white/60 text-lg">Free online tools for video and audio processing</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {TOOLS.map(tool => (
          <Link key={tool.slug} href={`/${tool.slug}`}
            className="group glass-card rounded-2xl p-6 transition-all hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <span className="text-3xl shrink-0">{tool.icon}</span>
              <div>
                <h2 className="font-bold text-white group-hover:text-green-400 transition-colors mb-1" style={{color:'inherit'}}>{tool.h1}</h2>
                <p className="text-sm text-white/55 leading-relaxed">{tool.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
