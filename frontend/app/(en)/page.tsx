import { buildHomeMetadata } from '@/lib/seo';
import HomePage from '@/components/pages/HomePage';

export const metadata = buildHomeMetadata('en');

export default function Page() {
  return <HomePage locale="en" />;
}
