import type { Metadata } from 'next';
import SeoClusterPageView from '@/components/pages/SeoClusterPageView';
import { buildSeoClusterMetadata } from '@/lib/seo-clusters';

export const metadata: Metadata = buildSeoClusterMetadata('mp3-to-text', 'fr');

export default function Page() {
  return <SeoClusterPageView slug="convertir-mp3-en-texte" locale="fr" />;
}
