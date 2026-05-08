import { NextResponse } from 'next/server';
import { buildSitemapEntries, renderSitemapXml } from '@/lib/sitemap-builder';

export const dynamic = 'force-static';
export const revalidate = 86400; // 24h

export async function GET() {
  const entries = buildSitemapEntries('fr');
  const xml = renderSitemapXml(entries);
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
    },
  });
}
