import type { Metadata } from 'next';
import SeoClusterPageView from '@/components/pages/SeoClusterPageView';
import { buildSeoClusterMetadata } from '@/lib/seo-clusters';

export const metadata: Metadata = buildSeoClusterMetadata('video-caption-generator', 'fr');

export default function Page() {
  return <SeoClusterPageView slug="generateur-captions-video" locale="fr" />;
}
