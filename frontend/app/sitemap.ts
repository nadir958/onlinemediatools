import { MetadataRoute } from 'next';
import { LOCALES, localizePath } from '@/lib/i18n';
import { SITE_URL } from '@/lib/seo';
import { getSeoClusterPath, getSeoClusterSlugs } from '@/lib/seo-clusters';
import { getAllSlugs } from '@/lib/tools';

// Main sitemap.xml — kept for backward compatibility.
// Language-specific sitemaps are available at:
//   /sitemap-en.xml  /sitemap-fr.xml  /sitemap-es.xml
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
    for (const legalPath of ['/privacy-policy', '/terms', '/about', '/contact']) {
      pages.push({
        url: `${SITE_URL}${localizePath(legalPath, locale)}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.5,
      });
    }
    for (const slug of getAllSlugs()) {
      pages.push({
        url: `${SITE_URL}${localizePath(`/${slug}`, locale)}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
    for (const slug of getSeoClusterSlugs()) {
      pages.push({
        url: `${SITE_URL}${locale === 'en' ? getSeoClusterPath(slug, 'en') : localizePath(getSeoClusterPath(slug, locale), locale)}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.75,
      });
    }
  }
  return pages;
}
