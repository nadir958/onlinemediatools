import type { Metadata } from 'next';
import SeoClusterPageView from '@/components/pages/SeoClusterPageView';
import { buildSeoClusterMetadata } from '@/lib/seo-clusters';

export const metadata: Metadata = buildSeoClusterMetadata('voice-recording-noise-reduction');

export default function Page() {{
  return <SeoClusterPageView slug="voice-recording-noise-reduction" />;
}}
