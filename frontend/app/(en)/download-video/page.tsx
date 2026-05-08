import type { Metadata } from 'next';
import UrlDownloader from '@/components/UrlDownloader';
import FAQ from '@/components/FAQ';
import { getCopy } from '@/lib/copy';
import { localizePath } from '@/lib/i18n';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Video Downloader Online - Download Video & Audio for Free | OnlineMediaTools',
  description: 'Free online video downloader — no signup required. Download MP4 video or MP3 audio from YouTube, TikTok, Instagram, Twitter/X, Vimeo and 1000+ sites.',
};

export default function DownloadVideoPage() {
  const locale = 'en';
  const copy = getCopy(locale);
  const schemaWebApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Online Video Downloader',
    url: 'https://onlinemediatools.cc/download-video',
    description: 'Free online video downloader. Download MP4 or MP3 from YouTube, TikTok, Instagram and 1000+ sites. No signup required.',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    featureList: ['No signup required', 'YouTube, TikTok, Instagram, Vimeo supported', '1000+ sites via yt-dlp', 'Video MP4 or Audio MP3 download', 'Files auto-deleted after 30 minutes'],
    provider: { '@type': 'Organization', name: 'OnlineMediaTools', url: 'https://onlinemediatools.cc' },
  };
  const schemaFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Which sites are supported?', acceptedAnswer: { '@type': 'Answer', text: 'YouTube, TikTok, Twitter/X, Instagram, Vimeo, Dailymotion, Facebook, Reddit, Twitch and 1000+ other sites powered by yt-dlp.' } },
      { '@type': 'Question', name: 'Is the video downloader free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No signup or account required.' } },
      { '@type': 'Question', name: 'Can I download audio only?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Select Audio (MP3) to extract just the audio track as an MP3 file.' } },
      { '@type': 'Question', name: 'How long are files kept?', acceptedAnswer: { '@type': 'Answer', text: 'Downloaded files are automatically deleted after 30 minutes.' } },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />
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
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">Free Online Video Downloader</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">Download video or audio from YouTube, TikTok, Twitter/X, Instagram, Vimeo, Facebook and 1000+ other sites. Free, fast, no signup required.</p>
        </div>
        <div className="glass-card rounded-3xl p-7 sm:p-10 mb-14">
          <UrlDownloader locale={locale} />
        </div>
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">How to download a video online</h2>
          <ol className="space-y-4">
            {['Copy the video URL from YouTube, TikTok, Instagram, or any supported site', 'Paste the URL in the field above', 'Choose Video (MP4) or Audio (MP3)', 'Click Download and wait a few seconds', 'Save your file — it will be available for 30 minutes'].map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: 'rgba(74,222,128,0.2)', border: '2px solid rgba(74,222,128,0.5)', color: '#4ade80' }}>{i + 1}</span>
                <span className="text-white/80 pt-1.5 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </section>
        <section className="mb-14 glass-card rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Supported platforms</h2>
          <p className="text-white/60 leading-relaxed">Our video downloader supports <strong className="text-white">1000+ websites</strong> including YouTube, TikTok, Twitter/X, Instagram, Vimeo, Dailymotion, Facebook, Reddit, Twitch, and many more — powered by the open-source yt-dlp engine.</p>
        </section>
        <FAQ title={copy.shared.faqTitle} items={[
          { q: 'Which sites are supported?', a: 'YouTube, TikTok, Twitter/X, Instagram, Vimeo, Dailymotion, Facebook, Reddit, Twitch and 1000+ other sites via yt-dlp.' },
          { q: 'What quality is the video?', a: 'Videos are downloaded at up to 480p MP4 to ensure fast cloud processing.' },
          { q: 'Can I download audio only?', a: 'Yes. Select "Audio (MP3)" to extract just the audio track as an MP3 file.' },
          { q: 'Is it free? Do I need an account?', a: 'Yes, completely free. No signup or account required.' },
          { q: 'How long are files kept?', a: 'Downloaded files are automatically deleted after 30 minutes.' },
          { q: 'Is it legal to download videos?', a: 'Only download content you own or have explicit permission to download. Downloading copyrighted content without permission may violate platform terms of service.' },
        ]} />
      </div>
    </>
  );
}
