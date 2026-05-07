import type { Metadata } from 'next';
import { permanentRedirect } from 'next/navigation';
import ToolPageView from '@/components/pages/ToolPageView';
import SeoClusterPageView from '@/components/pages/SeoClusterPageView';
import { localizePath } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { buildSeoClusterMetadata, getSeoClusterLocalizedSlugs, getSeoClusterBySlug, getSeoClusterPath, resolveSeoClusterSlug } from '@/lib/seo-clusters';
import { getAllSlugs, getToolBySlug } from '@/lib/tools';

interface Props { params: { toolSlug: string } }

export function generateStaticParams() {
  return [...getAllSlugs(), ...getSeoClusterLocalizedSlugs('fr')].map(toolSlug => ({ toolSlug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tool = getToolBySlug(params.toolSlug, 'fr');
  if (tool) return buildMetadata(tool, 'fr');
  const resolved = resolveSeoClusterSlug(params.toolSlug, 'fr');
  if (resolved) return buildSeoClusterMetadata(resolved, 'fr');
  return {};
}

export default function ToolPage({ params }: Props) {
  const tool = getToolBySlug(params.toolSlug, 'fr');
  if (tool) return <ToolPageView locale="fr" toolSlug={params.toolSlug} />;

  const resolved = resolveSeoClusterSlug(params.toolSlug, 'fr');
  if (resolved) {
    const targetPath = localizePath(getSeoClusterPath(resolved, 'fr'), 'fr');
    if (params.toolSlug !== getSeoClusterPath(resolved, 'fr').replace('/','')) {
      permanentRedirect(targetPath);
    }
    return <SeoClusterPageView locale="fr" slug={resolved} />;
  }

  return <SeoClusterPageView locale="fr" slug={params.toolSlug} />;
}
