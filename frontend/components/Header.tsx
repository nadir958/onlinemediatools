'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';
import { getCopy } from '@/lib/copy';
import { DEFAULT_LOCALE, LOCALES, type Locale, detectLocaleFromPath, localizePath, switchLocalePath } from '@/lib/i18n';

function menuAria(locale: Locale, open: boolean) {
  const labels = {
    en: open ? 'Close navigation menu' : 'Open navigation menu',
    fr: open ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation',
    es: open ? 'Cerrar el menú de navegación' : 'Abrir el menú de navegación',
  } satisfies Record<Locale, string>;

  return labels[locale];
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || '/';
  const locale = detectLocaleFromPath(pathname);
  const copy = useMemo(() => getCopy(locale), [locale]);

  const localeOptions = LOCALES.map(target => ({
    target,
    href: switchLocalePath(pathname, target),
    label: getCopy(target).localeLabel,
    name: copy.localeNames[target],
    active: target === locale,
  }));

  return (
    <header className="sticky top-0 z-50 border-b border-white/10" style={{ background: 'rgba(26,110,242,0.95)', backdropFilter: 'blur(12px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href={localizePath('/', locale)} className="flex items-center gap-2 shrink-0">
          <span className="text-xl font-black text-white tracking-tight">OnlineMedia<span style={{ color: '#4ade80' }}>Tools</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {copy.nav.map(([label, href]) => (
            <Link key={href} href={localizePath(href, locale)} className="px-3 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all">
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1">
            {localeOptions.map(option => (
              <Link
                key={option.target}
                href={option.href}
                hrefLang={option.target}
                aria-current={option.active ? 'page' : undefined}
                title={option.name}
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
      {open && (
        <div id="mobile-navigation" className="md:hidden border-t border-white/10 px-4 py-3 space-y-3" style={{ background: '#0f4fc4' }}>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-white/60 mb-2">{copy.languageMenuLabel}</div>
            <div className="flex flex-wrap gap-2">
              {localeOptions.map(option => (
                <Link
                  key={option.target}
                  href={option.href}
                  hrefLang={option.target}
                  aria-current={option.active ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-bold transition-all ${
                    option.active ? 'bg-white text-[#0f4fc4]' : 'text-white/85 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {option.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-1">
            {copy.mobileNav.map(([label, href]) => (
              <Link key={href} href={localizePath(href, locale)} onClick={() => setOpen(false)} className="block py-2 px-3 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all">
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
