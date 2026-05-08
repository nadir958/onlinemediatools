import type { Metadata } from 'next';
import UrlDownloader from '@/components/UrlDownloader';
import FAQ from '@/components/FAQ';
import { getCopy } from '@/lib/copy';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Télécharger une Vidéo en Ligne - Gratuit | OnlineMediaTools',
  description: 'Téléchargez des vidéos et de l'audio depuis YouTube, TikTok, Twitter, Instagram, Vimeo et 1000+ sites. Gratuit, sans inscription.',
};

export default function TelechargerVideoPage() {
  const locale = 'fr';
  const copy = getCopy(locale);
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-white/40 mb-8 flex items-center gap-2">
        <Link href="/fr" className="hover:text-white transition-colors">{copy.shared.homeCrumb}</Link>
        <span>/</span>
        <Link href="/fr/tools" className="hover:text-white transition-colors">{copy.shared.toolsCrumb}</Link>
        <span>/</span>
        <span className="text-white/80">Télécharger Vidéo</span>
      </nav>
      <div className="text-center mb-10">
        <span className="badge-green inline-block mb-4">{copy.shared.freeToolBadge}</span>
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">Télécharger une Vidéo en Ligne</h1>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">Téléchargez des vidéos ou de l'audio depuis YouTube, TikTok, Twitter/X, Instagram, Vimeo, Facebook et plus de 1000 sites. Gratuit, sans inscription.</p>
      </div>
      <div className="glass-card rounded-3xl p-7 sm:p-10 mb-14">
        <UrlDownloader locale={locale} />
      </div>
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-white mb-6">Comment télécharger une vidéo</h2>
        <ol className="space-y-4">
          {['Copiez l'URL de la vidéo depuis YouTube, TikTok, Instagram ou tout autre site supporté', 'Collez l'URL dans le champ ci-dessus', 'Choisissez Vidéo (MP4) ou Audio (MP3)', 'Cliquez sur Télécharger et attendez quelques secondes', 'Téléchargez votre fichier'].map((step, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: 'rgba(74,222,128,0.2)', border: '2px solid rgba(74,222,128,0.5)', color: '#4ade80' }}>{i + 1}</span>
              <span className="text-white/80 pt-1.5 leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </section>
      <FAQ title={copy.shared.faqTitle} items={[
        { q: 'Quels sites sont supportés ?', a: 'YouTube, TikTok, Twitter/X, Instagram, Vimeo, Dailymotion, Facebook, Reddit et plus de 1000 autres sites.' },
        { q: 'Quelle qualité pour la vidéo ?', a: 'Les vidéos sont téléchargées en MP4 jusqu'à 480p pour un traitement rapide.' },
        { q: 'Puis-je télécharger uniquement l'audio ?', a: 'Oui. Sélectionnez "Audio (MP3)" pour extraire uniquement la piste audio.' },
        { q: 'Est-ce gratuit ?', a: 'Oui, totalement gratuit sans compte requis.' },
        { q: 'Combien de temps les fichiers sont-ils conservés ?', a: 'Les fichiers sont supprimés automatiquement après 2 heures.' },
      ]} />
    </div>
  );
}
