import LegalPageView from '@/components/pages/LegalPageView';
import { buildLegalMetadata } from '@/lib/legal';

export const metadata = buildLegalMetadata('en', 'privacy-policy');

export default function Page() {
  return <LegalPageView locale="en" pageKey="privacy-policy" />;
}
