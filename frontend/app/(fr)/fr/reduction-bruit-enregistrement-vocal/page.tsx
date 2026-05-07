import type { Metadata } from 'next';
import SeoClusterPageView from '@/components/pages/SeoClusterPageView';
import { buildSeoClusterMetadata } from '@/lib/seo-clusters';

export const metadata: Metadata = buildSeoClusterMetadata('voice-recording-noise-reduction', 'fr');

export default function Page() {
  return <SeoClusterPageView slug="reduction-bruit-enregistrement-vocal" locale="fr" />;
}
