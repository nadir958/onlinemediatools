import LegalPageView from '@/components/pages/LegalPageView';
import { buildLegalMetadata } from '@/lib/legal';

export const metadata = buildLegalMetadata('en', 'contact');

export default function Page() {
  return <LegalPageView locale="en" pageKey="contact" />;
}
