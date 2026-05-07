import type { Metadata } from 'next';
import SeoClusterPageView from '@/components/pages/SeoClusterPageView';
import { buildSeoClusterMetadata } from '@/lib/seo-clusters';

export const metadata: Metadata = buildSeoClusterMetadata('youtube-subtitle-generator', 'es');

export default function Page() {
  return <SeoClusterPageView slug="generador-subtitulos-youtube" locale="es" />;
}
