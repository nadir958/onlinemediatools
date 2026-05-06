import { MetadataRoute } from 'next';
import { getAllSlugs } from '@/lib/tools';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://onlinemediatools.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const toolPages = getAllSlugs().map(slug => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/tools`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    ...toolPages,
  ];
}
