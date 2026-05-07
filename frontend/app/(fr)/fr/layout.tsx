import type { Metadata } from 'next';
import '../../globals.css';
import SiteShell from '@/components/layout/SiteShell';
import { SITE_DESCRIPTIONS } from '@/lib/copy';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Outils vidéo et audio gratuits en ligne',
    template: '%s | OnlineMediaTools',
  },
  description: SITE_DESCRIPTIONS.fr,
  alternates: { canonical: `${SITE_URL}/fr` },
  openGraph: {
    title: 'OnlineMediaTools',
    description: SITE_DESCRIPTIONS.fr,
    url: `${SITE_URL}/fr`,
    siteName: 'OnlineMediaTools',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OnlineMediaTools',
    description: SITE_DESCRIPTIONS.fr,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
  },
};

export default function FrRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <SiteShell>{children}</SiteShell>
    </html>
  );
}
