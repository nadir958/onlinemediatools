import type { Metadata } from 'next';
import SeoClusterPageView from '@/components/pages/SeoClusterPageView';
import { buildSeoClusterMetadata } from '@/lib/seo-clusters';

export const metadata: Metadata = buildSeoClusterMetadata('translate-srt');

export default function Page() {{
  return <SeoClusterPageView slug="translate-srt" />;
}}
