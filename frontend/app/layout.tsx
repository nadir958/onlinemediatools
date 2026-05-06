import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://onlinemediatools.com'),
  title: { default: 'OnlineMediaTools - Free Online Video & Audio Tools', template: '%s | OnlineMediaTools' },
  description: 'Free online video and audio tools. Convert, compress, extract, and optimize your media files online. No signup required.',
  openGraph: { siteName: 'OnlineMediaTools', type: 'website' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#0a0a1a]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
