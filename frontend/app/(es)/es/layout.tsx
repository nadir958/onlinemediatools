import type { Metadata } from 'next';
import '../../globals.css';
import SiteShell from '@/components/layout/SiteShell';
import { SITE_DESCRIPTIONS } from '@/lib/copy';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Herramientas gratis de video y audio online',
    template: '%s | OnlineMediaTools',
  },
  description: SITE_DESCRIPTIONS.es,
  alternates: { canonical: `${SITE_URL}/es` },
  openGraph: {
    title: 'OnlineMediaTools',
    description: SITE_DESCRIPTIONS.es,
    url: `${SITE_URL}/es`,
    siteName: 'OnlineMediaTools',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OnlineMediaTools',
    description: SITE_DESCRIPTIONS.es,
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

export default function EsRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <SiteShell>{children}</SiteShell>
    </html>
  );
}
