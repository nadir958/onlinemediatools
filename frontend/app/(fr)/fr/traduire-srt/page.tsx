import type { Metadata } from 'next';
import SeoClusterPageView from '@/components/pages/SeoClusterPageView';
import { buildSeoClusterMetadata } from '@/lib/seo-clusters';

export const metadata: Metadata = buildSeoClusterMetadata('translate-srt', 'fr');

export default function Page() {
  return <SeoClusterPageView slug="traduire-srt" locale="fr" />;
}
