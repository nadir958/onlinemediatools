import Link from 'next/link';
import { localizePath, type Locale } from '@/lib/i18n';
import { getSeoClusterPath, getSeoClustersBySlugs } from '@/lib/seo-clusters';

interface RelatedGuidesProps {
  slugs: string[];
  locale?: Locale;
  title?: string;
}

function defaultTitle(locale: Locale) {
  if (locale === 'fr') return 'Guides associes';
  if (locale === 'es') return 'Guias relacionadas';
  return 'Related Guides';
}

export default function RelatedGuides({ slugs, locale = 'en', title }: RelatedGuidesProps) {
  const guides = getSeoClustersBySlugs(slugs, locale);
  if (!guides.length) return null;

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-white mb-6">{title || defaultTitle(locale)}</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {guides.map(guide => (
          <Link
            key={guide.slug}
            href={localizePath(getSeoClusterPath(guide.slug, locale), locale)}
            className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-500/50 rounded-xl p-5 transition-all"
          >
            <div className="text-xs uppercase tracking-wide text-green-400 font-semibold mb-2">{guide.badge}</div>
            <div className="text-base font-semibold text-white group-hover:text-indigo-300 transition-colors">{guide.h1}</div>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">{guide.metaDescription}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
