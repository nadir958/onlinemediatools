'use client';
import Link from 'next/link';
import CookiePreferencesButton from '@/components/analytics/CookiePreferencesButton';
import { usePathname } from 'next/navigation';
import { getCopy } from '@/lib/copy';
import { detectLocaleFromPath, localizePath } from '@/lib/i18n';
import { getToolBySlug } from '@/lib/tools';

const VIDEO_SLUGS = ['webm-to-mp4', 'mov-to-mp4', 'compress-video', 'trim-video', 'video-converter'] as const;
const AUDIO_SLUGS = ['mp4-to-mp3', 'video-to-mp3', 'extract-audio', 'remove-audio-from-video', 'audio-converter'] as const;
const AI_SLUGS = ['transcribe-audio', 'auto-subtitle', 'translate-subtitles', 'clean-audio'] as const;

export default function Footer() {
  const pathname = usePathname() || '/';
  const locale = detectLocaleFromPath(pathname);
  const copy = getCopy(locale);

  return (
    <footer style={{ background: '#0c3a96' }} className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2 md:col-span-1">
          <span className="text-lg font-black text-white">OnlineMedia<span style={{ color: '#4ade80' }}>Tools</span></span>
          <p className="mt-3 text-sm text-white/60 leading-relaxed">{copy.brandTagline}</p>
        </div>
        <div>
          <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wide">{copy.footer.videoTools}</h3>
          <ul className="space-y-2 text-sm text-white/60">
            {VIDEO_SLUGS.map(slug => {
              const tool = getToolBySlug(slug, locale);
              if (!tool) return null;
              return (
                <li key={slug}>
                  <Link href={localizePath(`/${slug}`, locale)} className="hover:text-white transition-colors">
                    {tool.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wide">{copy.footer.audioTools}</h3>
          <ul className="space-y-2 text-sm text-white/60">
            {AUDIO_SLUGS.map(slug => {
              const tool = getToolBySlug(slug, locale);
              if (!tool) return null;
              return (
                <li key={slug}>
                  <Link href={localizePath(`/${slug}`, locale)} className="hover:text-white transition-colors">
                    {tool.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wide">{copy.shared.categories.aiTools}</h3>
          <ul className="space-y-2 text-sm text-white/60">
            {AI_SLUGS.map(slug => {
              const tool = getToolBySlug(slug, locale);
              if (!tool) return null;
              return (
                <li key={slug}>
                  <Link href={localizePath(`/${slug}`, locale)} className="hover:text-white transition-colors">
                    {tool.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wide">{copy.footer.legal}</h3>
          <ul className="space-y-2 text-sm text-white/60 mb-3">
            <li><Link href={localizePath('/privacy-policy', locale)} className="hover:text-white transition-colors">{copy.footer.privacyPolicy}</Link></li>
            <li><Link href={localizePath('/terms', locale)} className="hover:text-white transition-colors">{copy.footer.terms}</Link></li>
            <li><Link href={localizePath('/about', locale)} className="hover:text-white transition-colors">{copy.footer.about}</Link></li>
            <li><Link href={localizePath('/contact', locale)} className="hover:text-white transition-colors">{copy.footer.contact}</Link></li>
            <li><CookiePreferencesButton locale={locale} label={copy.footer.cookiePreferences} /></li>
          </ul>
          <p className="text-xs text-white/50 leading-relaxed">{copy.footer.legalText}</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">
        &copy; {new Date().getFullYear()} OnlineMediaTools — {copy.footer.copyright}
      </div>
    </footer>
  );
}
