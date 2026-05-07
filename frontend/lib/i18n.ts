export const LOCALES = ['en', 'fr', 'es'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function localePrefix(locale: Locale) {
  return locale === DEFAULT_LOCALE ? '' : `/${locale}`;
}

export function localizePath(path: string, locale: Locale) {
  const normalized = path === '/' ? '/' : `/${path.replace(/^\/+/, '')}`;
  return locale === DEFAULT_LOCALE
    ? normalized
    : `${localePrefix(locale)}${normalized === '/' ? '' : normalized}`;
}

export function detectLocaleFromPath(pathname: string): Locale {
  if (pathname === '/fr' || pathname.startsWith('/fr/')) return 'fr';
  if (pathname === '/es' || pathname.startsWith('/es/')) return 'es';
  return 'en';
}

export function switchLocalePath(pathname: string, target: Locale) {
  const current = detectLocaleFromPath(pathname);
  let withoutLocale = pathname;

  if (current !== DEFAULT_LOCALE) {
    withoutLocale = pathname.replace(new RegExp(`^/${current}`), '') || '/';
  }

  return localizePath(withoutLocale, target);
}
