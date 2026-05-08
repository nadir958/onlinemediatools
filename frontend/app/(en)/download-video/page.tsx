import type { Metadata } from 'next';
import UrlDownloader from '@/components/UrlDownloader';
import FAQ from '@/components/FAQ';
import { getCopy } from '@/lib/copy';
import { localizePath } from '@/lib/i18n';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Video Downloader Online - Download Video & Audio for Free | OnlineMediaTools',
  description: 'Download videos and audio from YouTube, TikTok, Twitter, Instagram, Vimeo and 1000+ sites. Free online video downloader, no signup required.',
};

export default function DownloadVideoPage() {
  const locale = 'en';
  const copy = getCopy(locale);
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-white/40 mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-white transition-colors">{copy.shared.homeCrumb}</Link>
        <span>/</span>
        <Link href="/tools" className="hover:text-white transition-colors">{copy.shared.toolsCrumb}</Link>
        <span>/</span>
        <span className="text-white/80">Video Downloader</span>
      </nav>
      <div className="text-center mb-10">
        <span className="badge-green inline-block mb-4">{copy.shared.freeToolBadge}</span>
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">Video Downloader Online</h1>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">Download video or audio from YouTube, TikTok, Twitter/X, Instagram, Vimeo, Facebook and 1000+ other sites. Free, fast, no signup.</p>
      </div>
      <div className="glass-card rounded-3xl p-7 sm:p-10 mb-14">
        <UrlDownloader locale={locale} />
      </div>
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-white mb-6">How to download a video</h2>
        <ol className="space-y-4">
          {['Copy the video URL from YouTube, TikTok, Instagram, or any supported site', 'Paste the URL in the field above', 'Choose Video (MP4) or Audio (MP3)', 'Click Download and wait a few seconds', 'Download your file'].map((step, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: 'rgba(74,222,128,0.2)', border: '2px solid rgba(74,222,128,0.5)', color: '#4ade80' }}>{i + 1}</span>
              <span className="text-white/80 pt-1.5 leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </section>
      <FAQ title={copy.shared.faqTitle} items={[
        { q: 'Which sites are supported?', a: 'YouTube, TikTok, Twitter/X, Instagram, Vimeo, Dailymotion, Facebook, Reddit and 1000+ other sites via yt-dlp.' },
        { q: 'What quality is the video?', a: 'Videos are downloaded at up to 480p MP4 to ensure fast processing.' },
        { q: 'Can I download audio only?', a: 'Yes. Select "Audio (MP3)" to extract just the audio track as an MP3 file.' },
        { q: 'Is it free?', a: 'Yes, completely free with no account required.' },
        { q: 'How long are files kept?', a: 'Files are automatically deleted after 2 hours.' },
      ]} />
    </div>
  );
}
