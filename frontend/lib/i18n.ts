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

// SEO cluster slug maps: EN -> localized
const SEO_CLUSTER_SLUG_MAP: Record<Exclude<Locale, 'en'>, Record<string, string>> = {
  fr: {
    'mp3-to-text': 'convertir-mp3-en-texte',
    'mp4-to-text': 'convertir-mp4-en-texte',
    'video-to-text': 'convertir-video-en-texte',
    'audio-to-text': 'convertir-audio-en-texte',
    'interview-transcription': 'transcription-interview',
    'podcast-transcription': 'transcription-podcast',
    'meeting-transcription': 'transcription-reunion',
    'subtitle-generator': 'generateur-sous-titres',
    'srt-generator': 'generateur-srt',
    'vtt-generator': 'generateur-vtt',
    'youtube-subtitle-generator': 'generateur-sous-titres-youtube',
    'video-caption-generator': 'generateur-captions-video',
    'translate-srt': 'traduire-srt',
    'remove-background-noise-from-audio': 'supprimer-bruit-fond-audio',
    'clean-podcast-audio': 'nettoyer-audio-podcast',
    'clean-interview-audio': 'nettoyer-audio-interview',
    'voice-recording-noise-reduction': 'reduction-bruit-enregistrement-vocal',
    'turboscribe-alternative': 'alternative-turboscribe',
    'download-video': 'telecharger-video',
  },
  es: {
    'mp3-to-text': 'convertir-mp3-a-texto',
    'mp4-to-text': 'convertir-mp4-a-texto',
    'video-to-text': 'convertir-video-a-texto',
    'audio-to-text': 'convertir-audio-a-texto',
    'interview-transcription': 'transcripcion-entrevista',
    'podcast-transcription': 'transcripcion-podcast',
    'meeting-transcription': 'transcripcion-reunion',
    'subtitle-generator': 'generador-subtitulos',
    'srt-generator': 'generador-srt',
    'vtt-generator': 'generador-vtt',
    'youtube-subtitle-generator': 'generador-subtitulos-youtube',
    'video-caption-generator': 'generador-captions-video',
    'translate-srt': 'traducir-srt',
    'remove-background-noise-from-audio': 'quitar-ruido-fondo-audio',
    'clean-podcast-audio': 'limpiar-audio-podcast',
    'clean-interview-audio': 'limpiar-audio-entrevista',
    'voice-recording-noise-reduction': 'reducir-ruido-grabacion-voz',
    'turboscribe-alternative': 'alternativa-turboscribe',
    'download-video': 'descargar-video',
  },
};

/** Given a slug (possibly localized) and its source locale, return the EN canonical slug */
function resolveToEnSlug(slug: string, fromLocale: Locale): string {
  if (fromLocale === 'en') return slug;
  const map = SEO_CLUSTER_SLUG_MAP[fromLocale as Exclude<Locale, 'en'>];
  const entry = Object.entries(map).find(([, localSlug]) => localSlug === slug);
  return entry ? entry[0] : slug;
}

/** Given an EN slug and a target locale, return the localized slug */
function localizeSlug(enSlug: string, targetLocale: Locale): string {
  if (targetLocale === 'en') return enSlug;
  const map = SEO_CLUSTER_SLUG_MAP[targetLocale as Exclude<Locale, 'en'>];
  return map[enSlug] ?? enSlug;
}

export function switchLocalePath(pathname: string, target: Locale) {
  const current = detectLocaleFromPath(pathname);

  // Strip locale prefix to get the slug/path segment
  let withoutLocale = pathname;
  if (current !== DEFAULT_LOCALE) {
    withoutLocale = pathname.replace(new RegExp(`^/${current}`), '') || '/';
  }

  // If it's just "/" or a non-slug path, just localize with prefix
  if (withoutLocale === '/' || withoutLocale === '') {
    return localizePath('/', target);
  }

  // Extract the leading slug (first path segment)
  const segments = withoutLocale.replace(/^\//, '').split('/');
  const slug = segments[0];
  const rest = segments.slice(1).join('/');

  // Resolve slug to EN, then translate to target locale
  const enSlug = resolveToEnSlug(slug, current);
  const targetSlug = localizeSlug(enSlug, target);

  const targetPath = rest ? `/${targetSlug}/${rest}` : `/${targetSlug}`;
  return localizePath(targetPath, target);
}
