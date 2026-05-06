'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10" style={{background:'rgba(26,110,242,0.95)', backdropFilter:'blur(12px)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-xl font-black text-white tracking-tight">OnlineMedia<span style={{color:'#4ade80'}}>Tools</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {[['All Tools','/tools'],['WebM to MP4','/webm-to-mp4'],['MP4 to MP3','/mp4-to-mp3'],['Compress','/compress-video'],['Trim Video','/trim-video']].map(([l,h]) => (
            <Link key={h} href={h} className="px-3 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all">{l}</Link>
          ))}
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-1" style={{background:'#0f4fc4'}}>
          {[['All Tools','/tools'],['WebM to MP4','/webm-to-mp4'],['MOV to MP4','/mov-to-mp4'],['MP4 to MP3','/mp4-to-mp3'],['Compress','/compress-video'],['Trim Video','/trim-video']].map(([l,h]) => (
            <Link key={h} href={h} onClick={() => setOpen(false)} className="block py-2 px-3 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all">{l}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
