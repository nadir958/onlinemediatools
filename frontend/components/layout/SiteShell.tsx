import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <body className="min-h-screen flex flex-col bg-[#0a0a1a]">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </body>
  );
}
