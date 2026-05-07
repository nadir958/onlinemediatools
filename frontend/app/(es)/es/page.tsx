import HomePage from '@/components/pages/HomePage';
import { buildHomeMetadata } from '@/lib/seo';

export const metadata = buildHomeMetadata('es');

export default function Page() {
  return <HomePage locale="es" />;
}
