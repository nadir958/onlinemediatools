import LegalPageView from '@/components/pages/LegalPageView';
import { buildLegalMetadata } from '@/lib/legal';

export const metadata = buildLegalMetadata('es', 'contact');

export default function Page() {
  return <LegalPageView locale="es" pageKey="contact" />;
}
