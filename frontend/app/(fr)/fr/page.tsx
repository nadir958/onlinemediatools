import HomePage from '@/components/pages/HomePage';
import { buildHomeMetadata } from '@/lib/seo';

export const metadata = buildHomeMetadata('fr');

export default function Page() {
  return <HomePage locale="fr" />;
}
