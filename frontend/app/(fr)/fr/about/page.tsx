import LegalPageView from '@/components/pages/LegalPageView';
import { buildLegalMetadata } from '@/lib/legal';

export const metadata = buildLegalMetadata('fr', 'about');

export default function Page() {
  return <LegalPageView locale="fr" pageKey="about" />;
}
