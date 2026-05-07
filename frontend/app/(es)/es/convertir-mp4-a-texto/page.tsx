import type { Metadata } from 'next';
import SeoClusterPageView from '@/components/pages/SeoClusterPageView';
import { buildSeoClusterMetadata } from '@/lib/seo-clusters';

export const metadata: Metadata = buildSeoClusterMetadata('mp4-to-text', 'es');

export default function Page() {
  return <SeoClusterPageView slug="convertir-mp4-a-texto" locale="es" />;
}
