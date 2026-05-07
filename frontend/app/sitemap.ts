import { MetadataRoute } from 'next';
import { LOCALES, localizePath } from '@/lib/i18n';
import { SITE_URL } from '@/lib/seo';
import { getAllSlugs } from '@/lib/tools';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    pages.push({
      url: `${SITE_URL}${localizePath('/', locale)}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: locale === 'en' ? 1.0 : 0.9,
    });
    pages.push({
      url: `${SITE_URL}${localizePath('/tools', locale)}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    });

    for (const slug of getAllSlugs()) {
      pages.push({
        url: `${SITE_URL}${localizePath(`/${slug}`, locale)}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
  }

  return pages;
}
