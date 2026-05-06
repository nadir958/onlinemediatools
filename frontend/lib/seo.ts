import { Tool } from './tools';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://onlinemediatools.com';

export function buildMetadata(tool: Tool) {
  return {
    title: tool.metaTitle,
    description: tool.metaDescription,
    canonical: `${SITE_URL}/${tool.slug}`,
    openGraph: {
      title: tool.metaTitle,
      description: tool.metaDescription,
      url: `${SITE_URL}/${tool.slug}`,
      siteName: 'OnlineMediaTools',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: tool.metaTitle,
      description: tool.metaDescription,
    },
    alternates: { canonical: `${SITE_URL}/${tool.slug}` },
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

export function buildBreadcrumbSchema(tool: Tool) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Tools', item: `${SITE_URL}/tools` },
      { '@type': 'ListItem', position: 3, name: tool.title, item: `${SITE_URL}/${tool.slug}` },
    ],
  };
}
