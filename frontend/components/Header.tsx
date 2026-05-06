'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            OnlineMediaTools
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <Link href="/tools" className="hover:text-white transition-colors">All Tools</Link>
          <Link href="/webm-to-mp4" className="hover:text-white transition-colors">WebM to MP4</Link>
          <Link href="/mp4-to-mp3" className="hover:text-white transition-colors">MP4 to MP3</Link>
          <Link href="/compress-video" className="hover:text-white transition-colors">Compress</Link>
          <Link href="/trim-video" className="hover:text-white transition-colors">Trim Video</Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-300 p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-white/10 px-4 py-3 space-y-2">
          {[['Tools','/tools'],['WebM to MP4','/webm-to-mp4'],['MP4 to MP3','/mp4-to-mp3'],['Compress','/compress-video'],['Trim Video','/trim-video']].map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="block py-2 text-slate-300 hover:text-white transition-colors">{label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
