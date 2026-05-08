'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useState, useRef, useEffect } from 'react';
import { getCopy } from '@/lib/copy';
import { trackEvent } from '@/lib/analytics';
import { DEFAULT_LOCALE, LOCALES, type Locale, detectLocaleFromPath, localizePath, switchLocalePath } from '@/lib/i18n';

function menuAria(locale: Locale, open: boolean) {
  const labels = {
    en: open ? 'Close navigation menu' : 'Open navigation menu',
    fr: open ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation',
    es: open ? 'Cerrar el menú de navegación' : 'Abrir el menú de navegación',
  } satisfies Record<Locale, string>;
  return labels[locale];
}

// Priority tool groups for mega-menu — shown on hover over "All Tools"
const MEGA_MENU = {
  en: {
    popular: [
      { label: 'Download Video', href: '/download-video', badge: 'New', icon: '⬇️' },
      { label: 'Transcribe Audio', href: '/transcribe-audio', icon: '🎙️' },
      { label: 'Auto Subtitles', href: '/auto-subtitle', icon: '📝' },
      { label: 'WebM to MP4', href: '/webm-to-mp4', icon: '🎬' },
      { label: 'MP4 to MP3', href: '/mp4-to-mp3', icon: '🎵' },
      { label: 'Compress Video', href: '/compress-video', icon: '📦' },
    ],
    ai: [
      { label: 'Translate Subtitles', href: '/translate-subtitles', icon: '🌍' },
      { label: 'Clean Audio', href: '/clean-audio', icon: '✨' },
    ],
  },
  fr: {
    popular: [
      { label: 'Telecharger video', href: '/fr/telecharger-video', badge: 'Nouveau', icon: '⬇️' },
      { label: 'Transcrire audio', href: '/transcribe-audio', icon: '🎙️' },
      { label: 'Sous-titres auto', href: '/auto-subtitle', icon: '📝' },
      { label: 'WebM vers MP4', href: '/webm-to-mp4', icon: '🎬' },
      { label: 'MP4 vers MP3', href: '/mp4-to-mp3', icon: '🎵' },
      { label: 'Compresser', href: '/compress-video', icon: '📦' },
    ],
    ai: [
      { label: 'Traduire sous-titres', href: '/translate-subtitles', icon: '🌍' },
      { label: 'Nettoyer audio', href: '/clean-audio', icon: '✨' },
    ],
  },
  es: {
    popular: [
      { label: 'Descargar video', href: '/es/descargar-video', badge: 'Nuevo', icon: '⬇️' },
      { label: 'Transcribir audio', href: '/transcribe-audio', icon: '🎙️' },
      { label: 'Subtitulos auto', href: '/auto-subtitle', icon: '📝' },
      { label: 'WebM a MP4', href: '/webm-to-mp4', icon: '🎬' },
      { label: 'MP4 a MP3', href: '/mp4-to-mp3', icon: '🎵' },
      { label: 'Comprimir video', href: '/compress-video', icon: '📦' },
    ],
    ai: [
      { label: 'Traducir subtitulos', href: '/translate-subtitles', icon: '🌍' },
      { label: 'Limpiar audio', href: '/clean-audio', icon: '✨' },
    ],
  },
} as const;

const MEGA_LABEL = { en: 'All Tools', fr: 'Tous les outils', es: 'Todas las herramientas' };
const MEGA_POPULAR = { en: 'Popular', fr: 'Populaires', es: 'Populares' };
const MEGA_AI = { en: 'AI Tools', fr: 'Outils IA', es: 'Herramientas IA' };

export default function Header() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname() || '/';
  const locale = detectLocaleFromPath(pathname);
  const copy = useMemo(() => getCopy(locale), [locale]);
  const megaRef = useRef<HTMLDivElement>(null);
  const menuData = MEGA_MENU[locale];

  // Close mega-menu on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const localeOptions = LOCALES.map(target => ({
    target,
    href: switchLocalePath(pathname, target),
    label: getCopy(target).localeLabel,
    name: copy.localeNames[target],
    active: target === locale,
  }));

  // Nav links (skip first "All Tools" — we render it as mega-menu trigger)
  const navLinks = copy.nav.slice(1);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10" style={{ background: 'rgba(26,110,242,0.95)', backdropFilter: 'blur(12px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href={localizePath('/', locale)} className="flex items-center gap-2 shrink-0">
          <span className="text-xl font-black text-white tracking-tight">
            OnlineMedia<span style={{ color: '#4ade80' }}>Tools</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium" aria-label="Main navigation">

          {/* Mega-menu trigger */}
          <div ref={megaRef} className="relative">
            <button
              type="button"
              onClick={() => setMegaOpen(v => !v)}
              onMouseEnter={() => setMegaOpen(true)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all"
            >
              {MEGA_LABEL[locale]}
              <svg className={`w-3.5 h-3.5 transition-transform ${megaOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Mega dropdown */}
            {megaOpen && (
              <div
                onMouseLeave={() => setMegaOpen(false)}
                className="absolute top-full left-0 mt-2 w-[440px] rounded-2xl border border-white/15 shadow-2xl p-5"
                style={{ background: 'rgba(10,15,40,0.98)', backdropFilter: 'blur(20px)' }}
              >
                {/* Popular tools */}
                <div className="mb-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-white/40 mb-3">{MEGA_POPULAR[locale]}</div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {menuData.popular.map(item => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMegaOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-white/8 transition-all group"
                      >
                        <span className="text-base">{item.icon}</span>
                        <span className="text-sm text-white/75 group-hover:text-white transition-colors flex-1">{item.label}</span>
                        {'badge' in item && item.badge && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: 'rgba(74,222,128,0.2)', color: '#4ade80' }}>
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* AI tools */}
                <div className="border-t border-white/8 pt-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-white/40 mb-3">{MEGA_AI[locale]}</div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {menuData.ai.map(item => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMegaOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-white/8 transition-all group"
                      >
                        <span className="text-base">{item.icon}</span>
                        <span className="text-sm text-white/75 group-hover:text-white transition-colors">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* See all */}
                <div className="mt-4 pt-3 border-t border-white/8">
                  <Link
                    href={localizePath('/tools', locale)}
                    onClick={() => setMegaOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-2 rounded-xl text-sm font-semibold transition-all hover:bg-white/8"
                    style={{ color: '#4ade80' }}
                  >
                    {MEGA_LABEL[locale]} →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Download Video — highlighted CTA */}
          <Link
            href={navLinks[0]?.[1] ? localizePath(navLinks[0][1] as string, locale) : '/download-video'}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold text-[#0c1734] transition-all hover:opacity-90"
            style={{ background: '#4ade80' }}
            onClick={() => trackEvent('header_cta_clicked', { link: navLinks[0]?.[0] })}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {navLinks[0]?.[0]}
          </Link>

          {/* Other nav links */}
          {navLinks.slice(1).map(([label, href]) => (
            <Link
              key={href as string}
              href={localizePath(href as string, locale)}
              className="px-3 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right side: lang switcher + mobile menu */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1">
            {localeOptions.map(option => (
              <Link
                key={option.target}
                href={option.href}
                hrefLang={option.target}
                aria-current={option.active ? 'page' : undefined}
                title={option.name}
                onClick={() => {
                  if (!option.active) {
                    trackEvent('language_switched', { from_locale: locale, to_locale: option.target, switch_location: 'header_desktop' });
                  }
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  option.active ? 'bg-white text-[#0f4fc4]' : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {option.label}
              </Link>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={menuAria(locale, open)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="md:hidden text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-navigation" className="md:hidden border-t border-white/10 px-4 py-4 space-y-4" style={{ background: '#0f4fc4' }}>
          {/* Download video CTA */}
          <Link
            href={localizePath(navLinks[0]?.[1] as string || '/download-video', locale)}
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-[#0c1734] transition-all"
            style={{ background: '#4ade80' }}
          >
            ⬇️ {navLinks[0]?.[0]}
          </Link>

          {/* Other links */}
          <div className="space-y-1">
            {copy.mobileNav.map(([label, href]) => (
              <Link key={href as string} href={localizePath(href as string, locale)} onClick={() => setOpen(false)} className="block py-2.5 px-3 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all">
                {label}
              </Link>
            ))}
          </div>

          {/* Lang switcher */}
          <div className="border-t border-white/10 pt-3">
            <div className="text-xs font-semibold uppercase tracking-wide text-white/60 mb-2">{copy.languageMenuLabel}</div>
            <div className="flex flex-wrap gap-2">
              {localeOptions.map(option => (
                <Link
                  key={option.target}
                  href={option.href}
                  hrefLang={option.target}
                  aria-current={option.active ? 'page' : undefined}
                  onClick={() => {
                    if (!option.active) trackEvent('language_switched', { from_locale: locale, to_locale: option.target, switch_location: 'header_mobile' });
                    setOpen(false);
                  }}
                  className={`px-3 py-2 rounded-lg text-sm font-bold transition-all ${
                    option.active ? 'bg-white text-[#0f4fc4]' : 'text-white/85 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {option.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
