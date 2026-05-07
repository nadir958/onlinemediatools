import type { Metadata } from 'next';
import SeoClusterPageView from '@/components/pages/SeoClusterPageView';
import { buildSeoClusterMetadata } from '@/lib/seo-clusters';

export const metadata: Metadata = buildSeoClusterMetadata('srt-generator', 'fr');

export default function Page() {
  return <SeoClusterPageView slug="generateur-srt" locale="fr" />;
}
