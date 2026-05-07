import type { Metadata } from 'next';
import SeoClusterPageView from '@/components/pages/SeoClusterPageView';
import { buildSeoClusterMetadata } from '@/lib/seo-clusters';

export const metadata: Metadata = buildSeoClusterMetadata('audio-to-text', 'fr');

export default function Page() {
  return <SeoClusterPageView slug="convertir-audio-en-texte" locale="fr" />;
}
