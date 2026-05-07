import type { Metadata } from 'next';
import SeoClusterPageView from '@/components/pages/SeoClusterPageView';
import { buildSeoClusterMetadata } from '@/lib/seo-clusters';

export const metadata: Metadata = buildSeoClusterMetadata('youtube-subtitle-generator', 'fr');

export default function Page() {
  return <SeoClusterPageView slug="generateur-sous-titres-youtube" locale="fr" />;
}
