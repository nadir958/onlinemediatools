import { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://onlinemediatools.cc';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
    sitemap: [
      `${SITE_URL}/sitemap-en.xml`,
      `${SITE_URL}/sitemap-fr.xml`,
      `${SITE_URL}/sitemap-es.xml`,
    ],
  };
}
