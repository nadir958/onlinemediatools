import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import CookieConsentBanner from '@/components/analytics/CookieConsentBanner';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <body className="min-h-screen flex flex-col bg-[#0a0a1a]">
      <GoogleAnalytics />
      <CookieConsentBanner />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </body>
  );
}
