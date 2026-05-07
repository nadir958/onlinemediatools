import type { Metadata } from 'next';
import SeoClusterPageView from '@/components/pages/SeoClusterPageView';
import { buildSeoClusterMetadata } from '@/lib/seo-clusters';

export const metadata: Metadata = buildSeoClusterMetadata('clean-interview-audio', 'fr');

export default function Page() {
  return <SeoClusterPageView slug="nettoyer-audio-interview" locale="fr" />;
}
