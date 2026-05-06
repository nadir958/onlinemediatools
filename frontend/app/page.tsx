import type { Metadata } from 'next';
import Link from 'next/link';
import { TOOLS } from '@/lib/tools';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'OnlineMediaTools - Free Online Video & Audio Tools',
  description: 'Free online video and audio tools. Convert WebM to MP4, extract audio, compress video, trim clips and more. No signup required. Files auto-deleted after 2 hours.',
};

const TRUST_BADGES = [
  { icon: '🔐', title: 'No Signup Required', desc: 'Use all tools instantly' },
  { icon: '🛡️', title: 'Private & Secure', desc: 'Files never shared' },
  { icon: '🗑️', title: 'Auto-Delete', desc: 'Deleted after 2 hours' },
  { icon: '⚡', title: 'Fast Processing', desc: 'Powered by FFmpeg' },
];

const HOME_FAQ = [
  { q: 'Are all tools really free?', a: 'Yes. All tools on OnlineMediaTools are completely free with no sign-up required.' },
  { q: 'What happens to my uploaded files?', a: 'Files are processed securely and automatically deleted after 2 hours. We never share your files.' },
  { q: 'What is the maximum file size?', a: 'You can upload files up to 200 MB.' },
  { q: 'Do I need to install software?', a: 'No. Everything runs in the cloud. No downloads needed.' },
  { q: 'Is it safe to upload my files?', a: 'Yes. Files are stored securely, processed, and deleted automatically. We never analyze file content.' },
];

const CATEGORIES = [
  { label: 'Video Tools', emoji: '🎬', tools: ['webm-to-mp4','mov-to-mp4','compress-video','trim-video','video-converter'] },
  { label: 'Audio Tools', emoji: '🎵', tools: ['mp4-to-mp3','video-to-mp3','extract-audio','remove-audio-from-video','audio-converter'] },
];

export default function Home() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-28 px-4 text-center">
        {/* subtle radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.08) 0%, transparent 70%)'}} />
        <div className="relative max-w-4xl mx-auto">
          <span className="badge-green inline-block mb-6">100% Free — No Signup Required</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight tracking-tight">
            Free Online<br />
            <span style={{color:'#4ade80'}}>Video & Audio</span> Tools
          </h1>
          <p className="mt-6 text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Convert, compress, extract, and optimize your media files online.<br/>Fast, secure, and completely free.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/webm-to-mp4" className="btn-white px-8 py-3.5 text-base">
              Start Converting →
            </Link>
            <Link href="/tools" className="btn-outline px-8 py-3.5 text-base">
              View All Tools
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trust Badges ── */}
      <section style={{background:'rgba(0,0,0,0.12)'}} className="border-y border-white/10 py-8">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {TRUST_BADGES.map(b => (
            <div key={b.title}>
              <div className="text-2xl mb-1">{b.icon}</div>
              <div className="font-bold text-white text-sm">{b.title}</div>
              <div className="text-xs text-white/50 mt-0.5">{b.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Popular Tools ── */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-black text-white text-center mb-2">Popular Tools</h2>
        <p className="text-white/50 text-center mb-10">Most used media processing tools</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {TOOLS.slice(0,5).map(tool => (
            <Link key={tool.slug} href={`/${tool.slug}`}
              className="group glass-card rounded-2xl p-6 text-center transition-all hover:-translate-y-1">
              <div className="text-4xl mb-3">{tool.icon}</div>
              <div className="text-sm font-bold text-white group-hover:text-green-400 transition-colors" style={{color:'inherit'}}>{tool.title}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Tool Categories ── */}
      <section style={{background:'rgba(0,0,0,0.1)'}} className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-white text-center mb-12">All Media Tools</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {CATEGORIES.map(cat => (
              <div key={cat.label} className="glass-card rounded-2xl p-7">
                <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                  <span>{cat.emoji}</span> {cat.label}
                </h3>
                <div className="space-y-2">
                  {cat.tools.map(slug => {
                    const tool = TOOLS.find(t => t.slug === slug);
                    if (!tool) return null;
                    return (
                      <Link key={slug} href={`/${slug}`}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-all group">
                        <span className="text-xl">{tool.icon}</span>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-green-400 transition-colors" style={{color:'inherit'}}>{tool.title}</div>
                          <div className="text-xs text-white/50">{tool.description}</div>
                        </div>
                        <svg className="w-4 h-4 text-white/30 ml-auto group-hover:text-white/70 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                        </svg>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO Block ── */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-white/60 text-sm leading-relaxed space-y-4">
        <h2 className="text-2xl font-bold text-white">Free Online Media Processing Tools</h2>
        <p>OnlineMediaTools provides a complete suite of free video and audio processing tools powered by FFmpeg. Convert formats, extract audio, compress files, or trim clips — all from your browser with no software to install.</p>
        <p>All files are processed securely on our servers and permanently deleted after 2 hours. We never share or analyze your content.</p>
        <p><strong className="text-white">Disclaimer:</strong> By using this service, you confirm that you own or have the right to process all files you upload. Do not upload copyrighted material without permission.</p>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-3xl mx-auto px-4 pb-24">
        <FAQ items={HOME_FAQ} />
      </section>
    </div>
  );
}
