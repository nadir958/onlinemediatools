import type { Metadata } from 'next';
import SeoClusterPageView from '@/components/pages/SeoClusterPageView';
import { buildSeoClusterMetadata } from '@/lib/seo-clusters';

export const metadata: Metadata = buildSeoClusterMetadata('interview-transcription', 'fr');

export default function Page() {
  return <SeoClusterPageView slug="transcription-interview" locale="fr" />;
}
