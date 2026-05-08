import { localizePath } from '@/lib/i18n';
import { SITE_URL } from '@/lib/seo';
import { getSeoClusterPath, getSeoClusterSlugs } from '@/lib/seo-clusters';
import { getAllSlugs } from '@/lib/tools';
import type { Locale } from '@/lib/i18n';

export interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

export function buildSitemapEntries(locale: Locale): SitemapEntry[] {
  const now = new Date().toISOString();
  const entries: SitemapEntry[] = [];

  // Homepage
  entries.push({
    loc: `${SITE_URL}${localizePath('/', locale)}`,
    lastmod: now,
    changefreq: 'weekly',
    priority: locale === 'en' ? '1.0' : '0.9',
  });

  // Tools listing page
  entries.push({
    loc: `${SITE_URL}${localizePath('/tools', locale)}`,
    lastmod: now,
    changefreq: 'weekly',
    priority: '0.9',
  });

  // Legal pages
  for (const path of ['/privacy-policy', '/terms', '/about', '/contact']) {
    entries.push({
      loc: `${SITE_URL}${localizePath(path, locale)}`,
      lastmod: now,
      changefreq: 'monthly',
      priority: '0.5',
    });
  }

  // Tool pages
  for (const slug of getAllSlugs()) {
    entries.push({
      loc: `${SITE_URL}${localizePath(`/${slug}`, locale)}`,
      lastmod: now,
      changefreq: 'monthly',
      priority: '0.8',
    });
  }

  // SEO cluster pages (long-tail landing pages)
  for (const slug of getSeoClusterSlugs()) {
    const path = locale === 'en'
      ? getSeoClusterPath(slug, 'en')
      : localizePath(getSeoClusterPath(slug, locale), locale);
    entries.push({
      loc: `${SITE_URL}${path}`,
      lastmod: now,
      changefreq: 'monthly',
      priority: '0.75',
    });
  }

  return entries;
}

export function renderSitemapXml(entries: SitemapEntry[]): string {
  const urlEntries = entries.map(e => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>`;
}
