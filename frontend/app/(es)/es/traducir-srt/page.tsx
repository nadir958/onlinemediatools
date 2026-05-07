import type { Metadata } from 'next';
import SeoClusterPageView from '@/components/pages/SeoClusterPageView';
import { buildSeoClusterMetadata } from '@/lib/seo-clusters';

export const metadata: Metadata = buildSeoClusterMetadata('translate-srt', 'es');

export default function Page() {
  return <SeoClusterPageView slug="traducir-srt" locale="es" />;
}
