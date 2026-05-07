import type { Metadata } from 'next';
import '../globals.css';
import SiteShell from '@/components/layout/SiteShell';
import { SITE_DESCRIPTIONS } from '@/lib/copy';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Free Online Video & Audio Tools',
    template: '%s | OnlineMediaTools',
  },
  description: SITE_DESCRIPTIONS.en,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'OnlineMediaTools',
    description: SITE_DESCRIPTIONS.en,
    url: SITE_URL,
    siteName: 'OnlineMediaTools',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OnlineMediaTools',
    description: SITE_DESCRIPTIONS.en,
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

export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <SiteShell>{children}</SiteShell>
    </html>
  );
}
