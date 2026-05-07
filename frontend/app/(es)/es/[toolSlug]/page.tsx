import type { Metadata } from 'next';
import { permanentRedirect } from 'next/navigation';
import ToolPageView from '@/components/pages/ToolPageView';
import SeoClusterPageView from '@/components/pages/SeoClusterPageView';
import { localizePath } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { buildSeoClusterMetadata, getSeoClusterLocalizedSlugs, getSeoClusterPath, resolveSeoClusterSlug } from '@/lib/seo-clusters';
import { getAllSlugs, getToolBySlug } from '@/lib/tools';

interface Props { params: { toolSlug: string } }

export function generateStaticParams() {
  return [...getAllSlugs(), ...getSeoClusterLocalizedSlugs('es')].map(toolSlug => ({ toolSlug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tool = getToolBySlug(params.toolSlug, 'es');
  if (tool) return buildMetadata(tool, 'es');
  const resolved = resolveSeoClusterSlug(params.toolSlug, 'es');
  if (resolved) return buildSeoClusterMetadata(resolved, 'es');
  return {};
}

export default function ToolPage({ params }: Props) {
  const tool = getToolBySlug(params.toolSlug, 'es');
  if (tool) return <ToolPageView locale="es" toolSlug={params.toolSlug} />;

  const resolved = resolveSeoClusterSlug(params.toolSlug, 'es');
  if (resolved) {
    const targetPath = localizePath(getSeoClusterPath(resolved, 'es'), 'es');
    if (params.toolSlug !== getSeoClusterPath(resolved, 'es').replace('/','')) {
      permanentRedirect(targetPath);
    }
    return <SeoClusterPageView locale="es" slug={resolved} />;
  }

  return <SeoClusterPageView locale="es" slug={params.toolSlug} />;
}
