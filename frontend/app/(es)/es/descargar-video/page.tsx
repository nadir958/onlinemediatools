import type { Metadata } from 'next';
import UrlDownloader from '@/components/UrlDownloader';
import FAQ from '@/components/FAQ';
import { getCopy } from '@/lib/copy';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Descargar Video Online - Gratis | OnlineMediaTools',
  description: 'Descarga videos y audio de YouTube, TikTok, Twitter, Instagram, Vimeo y más de 1000 sitios. Gratis, sin registro.',
};

export default function DescargarVideoPage() {
  const locale = 'es';
  const copy = getCopy(locale);
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-white/40 mb-8 flex items-center gap-2">
        <Link href="/es" className="hover:text-white transition-colors">{copy.shared.homeCrumb}</Link>
        <span>/</span>
        <Link href="/es/tools" className="hover:text-white transition-colors">{copy.shared.toolsCrumb}</Link>
        <span>/</span>
        <span className="text-white/80">Descargar Video</span>
      </nav>
      <div className="text-center mb-10">
        <span className="badge-green inline-block mb-4">{copy.shared.freeToolBadge}</span>
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">Descargar Video Online</h1>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">Descarga videos o audio de YouTube, TikTok, Twitter/X, Instagram, Vimeo, Facebook y más de 1000 sitios. Gratis, sin registro.</p>
      </div>
      <div className="glass-card rounded-3xl p-7 sm:p-10 mb-14">
        <UrlDownloader locale={locale} />
      </div>
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-white mb-6">Cómo descargar un video</h2>
        <ol className="space-y-4">
          {['Copia la URL del video desde YouTube, TikTok, Instagram o cualquier sitio compatible', 'Pega la URL en el campo de arriba', 'Elige Video (MP4) o Audio (MP3)', 'Haz clic en Descargar y espera unos segundos', 'Descarga tu archivo'].map((step, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: 'rgba(74,222,128,0.2)', border: '2px solid rgba(74,222,128,0.5)', color: '#4ade80' }}>{i + 1}</span>
              <span className="text-white/80 pt-1.5 leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </section>
      <FAQ title={copy.shared.faqTitle} items={[
        { q: '¿Qué sitios son compatibles?', a: 'YouTube, TikTok, Twitter/X, Instagram, Vimeo, Dailymotion, Facebook, Reddit y más de 1000 sitios.' },
        { q: '¿Qué calidad tiene el video?', a: 'Los videos se descargan en MP4 hasta 480p para un procesamiento rápido.' },
        { q: '¿Puedo descargar solo el audio?', a: 'Sí. Selecciona "Audio (MP3)" para extraer solo la pista de audio.' },
        { q: '¿Es gratis?', a: 'Sí, completamente gratis sin necesidad de cuenta.' },
        { q: '¿Cuánto tiempo se guardan los archivos?', a: 'Los archivos se eliminan automáticamente después de 2 horas.' },
      ]} />
    </div>
  );
}
