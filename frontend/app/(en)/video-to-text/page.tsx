import type { Metadata } from 'next';
import SeoClusterPageView from '@/components/pages/SeoClusterPageView';
import { buildSeoClusterMetadata } from '@/lib/seo-clusters';

export const metadata: Metadata = buildSeoClusterMetadata('video-to-text');

export default function Page() {{
  return <SeoClusterPageView slug="video-to-text" />;
}}
