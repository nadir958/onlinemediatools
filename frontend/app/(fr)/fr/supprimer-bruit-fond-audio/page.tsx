import type { Metadata } from 'next';
import SeoClusterPageView from '@/components/pages/SeoClusterPageView';
import { buildSeoClusterMetadata } from '@/lib/seo-clusters';

export const metadata: Metadata = buildSeoClusterMetadata('remove-background-noise-from-audio', 'fr');

export default function Page() {
  return <SeoClusterPageView slug="supprimer-bruit-fond-audio" locale="fr" />;
}
