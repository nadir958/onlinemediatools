import type { Metadata } from 'next';
import SeoClusterPageView from '@/components/pages/SeoClusterPageView';
import { buildSeoClusterMetadata } from '@/lib/seo-clusters';

export const metadata: Metadata = buildSeoClusterMetadata('remove-background-noise-from-audio');

export default function Page() {{
  return <SeoClusterPageView slug="remove-background-noise-from-audio" />;
}}
