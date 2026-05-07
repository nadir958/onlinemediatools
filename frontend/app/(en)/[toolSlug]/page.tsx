import type { Metadata } from 'next';
import ToolPageView from '@/components/pages/ToolPageView';
import { buildMetadata } from '@/lib/seo';
import { getAllSlugs, getToolBySlug } from '@/lib/tools';

interface Props { params: { toolSlug: string } }

export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ toolSlug: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tool = getToolBySlug(params.toolSlug, 'en');
  if (!tool) return {};
  return buildMetadata(tool, 'en');
}

export default function ToolPage({ params }: Props) {
  return <ToolPageView locale="en" toolSlug={params.toolSlug} />;
}
