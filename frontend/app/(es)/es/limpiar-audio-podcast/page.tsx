import type { Metadata } from 'next';
import SeoClusterPageView from '@/components/pages/SeoClusterPageView';
import { buildSeoClusterMetadata } from '@/lib/seo-clusters';

export const metadata: Metadata = buildSeoClusterMetadata('clean-podcast-audio', 'es');

export default function Page() {
  return <SeoClusterPageView slug="limpiar-audio-podcast" locale="es" />;
}
