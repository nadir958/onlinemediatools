import ToolsPageView from '@/components/pages/ToolsPageView';
import { buildToolsMetadata } from '@/lib/seo';

export const metadata = buildToolsMetadata('fr');

export default function ToolsPage() {
  return <ToolsPageView locale="fr" />;
}
