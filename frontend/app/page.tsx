import type { Metadata } from 'next';
import Link from 'next/link';
import { TOOLS } from '@/lib/tools';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'OnlineMediaTools - Free Online Video & Audio Tools',
  description: 'Free online video and audio tools. Convert WebM to MP4, extract audio, compress video, and more. No signup required. Files auto-deleted after 2 hours.',
};

const TRUST_BADGES = [
  { icon: '🔐', title: 'No Signup Required', desc: 'Use all tools instantly, no account needed' },
  { icon: '🛡️', title: 'Private & Secure', desc: 'Files never shared or analyzed' },
  { icon: '🗑️', title: 'Auto-Delete', desc: 'All files deleted after 2 hours' },
  { icon: '⚡', title: 'Fast Processing', desc: 'Server-side FFmpeg processing' },
];

const HOME_FAQ = [
  { q: 'Are all tools really free?', a: 'Yes. All tools on OnlineMediaTools are completely free to use with no sign-up required.' },
  { q: 'What happens to my uploaded files?', a: 'Your files are processed securely on our servers and automatically deleted after 2 hours. We never share or analyze your files.' },
  { q: 'What is the maximum file size?', a: 'You can upload files up to 200 MB in size.' },
  { q: 'Do I need to install software?', a: 'No. Everything runs in your browser. No downloads or installations required.' },
  { q: 'Is it safe to upload my files?', a: 'Yes. Files are stored securely, processed with FFmpeg, and deleted automatically. We never access the content of your files.' },
];

export default function Home() {
  const popularTools = TOOLS.slice(0, 6);
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-slate-900 pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-sm text-indigo-300 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            100% Free — No Signup Required
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight">
            Free Online <span className="gradient-text">Video & Audio</span> Tools
          </h1>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            Convert, compress, extract, and optimize your media files online. Fast, secure, and completely free.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link href="/webm-to-mp4" className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all transform hover:scale-105">
              Start Converting
            </Link>
            <Link href="/tools" className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/20 transition-all">
              View All Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Tools */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-3">Popular Tools</h2>
        <p className="text-slate-400 text-center mb-10">Most used media processing tools</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {popularTools.map(tool => (
            <Link key={tool.slug} href={`/${tool.slug}`}
              className="group glass-card rounded-2xl p-5 text-center hover:border-indigo-500/40 hover:bg-white/8 transition-all">
              <div className="text-4xl mb-3">{tool.icon}</div>
              <div className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">{tool.title}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white/2 border-y border-white/8 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST_BADGES.map(b => (
            <div key={b.title} className="text-center">
              <div className="text-3xl mb-2">{b.icon}</div>
              <div className="font-semibold text-white text-sm">{b.title}</div>
              <div className="text-xs text-slate-400 mt-1">{b.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* All Tools Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">All Media Tools</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOOLS.map(tool => (
            <Link key={tool.slug} href={`/${tool.slug}`}
              className="group glass-card rounded-2xl p-6 hover:border-indigo-500/40 hover:bg-white/8 transition-all">
              <div className="flex items-start gap-4">
                <span className="text-3xl">{tool.icon}</span>
                <div>
                  <h3 className="font-bold text-white group-hover:text-indigo-300 transition-colors">{tool.title}</h3>
                  <p className="text-sm text-slate-400 mt-1">{tool.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-slate-400 text-sm leading-relaxed space-y-4">
        <h2 className="text-2xl font-bold text-white">Free Online Media Processing Tools</h2>
        <p>OnlineMediaTools provides a complete suite of free online video and audio processing tools powered by FFmpeg. Whether you need to convert a WebM file to MP4 for better compatibility, extract audio from a video, compress a large video file for sharing, or trim a clip to the exact moment you need — all of this is available directly in your browser with no software to install.</p>
        <p>All processing happens securely on our servers. Your files are never shared, analyzed, or used for any purpose beyond completing your requested conversion. Every uploaded file is automatically and permanently deleted after 2 hours.</p>
        <p><strong className="text-white">Disclaimer:</strong> By using this service, you confirm that you own or have the right to process all files you upload. Do not upload copyrighted material without permission.</p>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 pb-20">
        <FAQ items={HOME_FAQ} />
      </section>
    </div>
  );
}
