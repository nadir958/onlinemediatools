import { getCopy, SITE_DESCRIPTIONS, SITE_NAME } from './copy';
import { DEFAULT_LOCALE, type Locale, localizePath } from './i18n';
import { Tool } from './tools';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://onlinemediatools.cc';

const OPEN_GRAPH_LOCALES: Record<Locale, string> = {
  en: 'en_US',
  fr: 'fr_FR',
  es: 'es_ES',
};

const HOME_TITLES: Record<Locale, string> = {
  en: 'Free Online Video & Audio Tools',
  fr: 'Convertisseur vidéo et audio gratuit en ligne',
  es: 'Convertidor de video y audio gratis online',
};

const TOOLS_TITLES: Record<Locale, string> = {
  en: 'All Free Online Media Tools',
  fr: 'Tous les outils vidéo et audio en ligne',
  es: 'Todas las herramientas de video y audio online',
};

function withLeadingSlash(path: string) {
  return path.startsWith('/') ? path : `/${path}`;
}

export function absoluteUrl(path = '', locale: Locale = DEFAULT_LOCALE) {
  if (!path) return locale === DEFAULT_LOCALE ? SITE_URL : `${SITE_URL}${localizePath('/', locale)}`;
  const normalized = withLeadingSlash(path);
  return `${SITE_URL}${localizePath(normalized, locale)}`;
}

function brandTitle(title: string) {
  return `${title} | ${SITE_NAME}`;
}

function languageAlternates(path: string) {
  return {
    en: absoluteUrl(path, 'en'),
    fr: absoluteUrl(path, 'fr'),
    es: absoluteUrl(path, 'es'),
    'x-default': absoluteUrl(path, 'en'),
  };
}

export function buildHomeMetadata(locale: Locale) {
  return {
    title: HOME_TITLES[locale],
    description: SITE_DESCRIPTIONS[locale],
    alternates: {
      canonical: absoluteUrl('/', locale),
      languages: languageAlternates('/'),
    },
    openGraph: {
      title: SITE_NAME,
      description: SITE_DESCRIPTIONS[locale],
      url: absoluteUrl('/', locale),
      siteName: SITE_NAME,
      type: 'website',
      locale: OPEN_GRAPH_LOCALES[locale],
    },
    twitter: {
      card: 'summary_large_image',
      title: SITE_NAME,
      description: SITE_DESCRIPTIONS[locale],
    },
  };
}

export function buildToolsMetadata(locale: Locale) {
  const copy = getCopy(locale);
  return {
    title: TOOLS_TITLES[locale],
    description: copy.toolsPage.subtitle,
    alternates: {
      canonical: absoluteUrl('/tools', locale),
      languages: languageAlternates('/tools'),
    },
    openGraph: {
      title: brandTitle(TOOLS_TITLES[locale]),
      description: copy.toolsPage.subtitle,
      url: absoluteUrl('/tools', locale),
      siteName: SITE_NAME,
      type: 'website',
      locale: OPEN_GRAPH_LOCALES[locale],
    },
    twitter: {
      card: 'summary_large_image',
      title: brandTitle(TOOLS_TITLES[locale]),
      description: copy.toolsPage.subtitle,
    },
  };
}

export function buildMetadata(tool: Tool, locale: Locale) {
  const path = `/${tool.slug}`;
  const url = absoluteUrl(path, locale);
  return {
    title: tool.metaTitle,
    description: tool.metaDescription,
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      title: brandTitle(tool.metaTitle),
      description: tool.metaDescription,
      url,
      siteName: SITE_NAME,
      type: 'website',
      locale: OPEN_GRAPH_LOCALES[locale],
    },
    twitter: {
      card: 'summary_large_image',
      title: brandTitle(tool.metaTitle),
      description: tool.metaDescription,
    },
  };
}

export function buildFaqSchema(faq: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export function buildBreadcrumbSchema(tool: Tool, locale: Locale) {
  const copy = getCopy(locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: copy.shared.homeCrumb, item: absoluteUrl('/', locale) },
      { '@type': 'ListItem', position: 2, name: copy.shared.toolsCrumb, item: absoluteUrl('/tools', locale) },
      { '@type': 'ListItem', position: 3, name: tool.title, item: absoluteUrl(`/${tool.slug}`, locale) },
    ],
  };
}

export function buildOrganizationSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: absoluteUrl('/', locale),
    logo: absoluteUrl('/favicon.svg', locale),
    description: SITE_DESCRIPTIONS[locale],
  };
}

export function buildWebsiteSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: absoluteUrl('/', locale),
    description: SITE_DESCRIPTIONS[locale],
    inLanguage: locale,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: absoluteUrl('/', locale),
      logo: absoluteUrl('/favicon.svg', locale),
    },
  };
}

export function buildCollectionPageSchema(tools: Tool[], locale: Locale) {
  const copy = getCopy(locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: copy.toolsPage.title,
    url: absoluteUrl('/tools', locale),
    description: copy.toolsPage.subtitle,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: tools.map((tool, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: absoluteUrl(`/${tool.slug}`, locale),
        name: tool.h1,
      })),
    },
  };
}

export function buildToolSchema(tool: Tool, locale: Locale) {
  const featureListByLocale: Record<Locale, string[]> = {
    en: [
      `Input formats: ${tool.accepts.join(', ')}`,
      `Output format: ${tool.outputFormat.toUpperCase()}`,
      'No signup required',
      'Uploads auto-delete after 2 hours',
    ],
    fr: [
      `Formats d’entrée : ${tool.accepts.join(', ')}`,
      `Format de sortie : ${tool.outputFormat.toUpperCase()}`,
      'Sans inscription',
      'Suppression automatique après 2 heures',
    ],
    es: [
      `Formatos de entrada: ${tool.accepts.join(', ')}`,
      `Formato de salida: ${tool.outputFormat.toUpperCase()}`,
      'Sin registro',
      'Los archivos se eliminan automáticamente después de 2 horas',
    ],
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: tool.h1,
    url: absoluteUrl(`/${tool.slug}`, locale),
    description: tool.metaDescription,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires a modern web browser with JavaScript enabled.',
    inLanguage: locale,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: absoluteUrl('/', locale),
    },
    featureList: featureListByLocale[locale],
  };
}
