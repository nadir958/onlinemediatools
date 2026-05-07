import Link from 'next/link';
import FAQ from '@/components/FAQ';
import RelatedGuides from '@/components/RelatedGuides';
import RelatedTools from '@/components/RelatedTools';
import { getCopy } from '@/lib/copy';
import { localizePath, type Locale } from '@/lib/i18n';
import { buildFaqSchema } from '@/lib/seo';
import { getSeoClusterBySlug } from '@/lib/seo-clusters';

export default function SeoClusterPageView({ slug, locale = 'en' }: { slug: string; locale?: Locale }) {
  const page = getSeoClusterBySlug(slug, locale);
  if (!page) return null;

  const copy = getCopy(locale);
  const hasSupportLists = Boolean(page.whatYouGet?.length || page.beforeYouStart?.length);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(page.faq)) }} />

      <div className="max-w-5xl mx-auto px-4 py-12">
        <nav className="text-sm text-white/40 mb-8 flex items-center gap-2">
          <Link href={localizePath('/', locale)} className="hover:text-white transition-colors">{copy.shared.homeCrumb}</Link>
          <span>/</span>
          <span className="text-white/80">{page.h1}</span>
        </nav>

        <div className="text-center mb-10">
          <span className="badge-green inline-block mb-4">{page.badge}</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">{page.h1}</h1>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">{page.intro}</p>
        </div>

        <section className="glass-card rounded-3xl p-7 sm:p-8 mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">{page.overviewTitle}</h2>
          <p className="text-sm text-white/65 leading-relaxed">{page.overviewBody}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">{page.stepsTitle}</h2>
          <ol className="space-y-4">
            {page.steps.map((step, index) => (
              <li key={step} className="flex items-start gap-4">
                <span className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: 'rgba(74,222,128,0.2)', border: '2px solid rgba(74,222,128,0.5)', color: '#4ade80' }}>
                  {index + 1}
                </span>
                <span className="text-white/80 pt-1.5 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {hasSupportLists ? (
          <section className="grid lg:grid-cols-2 gap-6 mb-10">
            {page.whatYouGet?.length ? (
              <div className="glass-card rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4">{page.whatYouGetTitle}</h2>
                <ul className="space-y-3 text-sm text-white/65 leading-relaxed">
                  {page.whatYouGet.map(item => (
                    <li key={item} className="flex gap-3">
                      <span className="shrink-0 mt-1.5 w-2 h-2 rounded-full bg-green-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {page.beforeYouStart?.length ? (
              <div className="glass-card rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4">{page.beforeYouStartTitle}</h2>
                <ul className="space-y-3 text-sm text-white/65 leading-relaxed">
                  {page.beforeYouStart.map(item => (
                    <li key={item} className="flex gap-3">
                      <span className="shrink-0 mt-1.5 w-2 h-2 rounded-full bg-indigo-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </section>
        ) : null}

        {page.comparisonRows?.length ? (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6">{page.comparisonTitle}</h2>
            <div className="space-y-4">
              {page.comparisonRows.map(row => (
                <div key={row.label} className="glass-card rounded-2xl p-6">
                  <div className="text-sm font-semibold uppercase tracking-wide text-green-400 mb-3">{row.label}</div>
                  <div className="grid md:grid-cols-2 gap-5 mb-4">
                    <div>
                      <div className="text-sm font-semibold text-white mb-2">OnlineMediaTools</div>
                      <p className="text-sm text-white/65 leading-relaxed">{row.omt}</p>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white mb-2">TurboScribe</div>
                      <p className="text-sm text-white/65 leading-relaxed">{row.competitor}</p>
                    </div>
                  </div>
                  <div className="rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-white/75 leading-relaxed">
                    <span className="font-semibold text-white">Bottom line:</span> {row.takeaway}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">{page.bestForTitle}</h2>
            <ul className="space-y-3 text-sm text-white/65 leading-relaxed">
              {page.bestFor.map(item => (
                <li key={item} className="flex gap-3">
                  <span className="shrink-0 mt-1.5 w-2 h-2 rounded-full bg-green-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">{page.ctaTitle}</h2>
            <p className="text-sm text-white/65 leading-relaxed mb-5">{page.ctaBody}</p>
            <Link href={localizePath(page.ctaHref, locale)} className="btn-white inline-flex px-6 py-3 text-sm font-semibold">
              {page.ctaLabel}
            </Link>
          </div>
        </section>

        {page.fitCards?.length ? (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6">{page.fitTitle}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {page.fitCards.map(card => (
                <div key={card.title} className="glass-card rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                  <ul className="space-y-3 text-sm text-white/65 leading-relaxed">
                    {card.items.map(item => (
                      <li key={item} className="flex gap-3">
                        <span className="shrink-0 mt-1.5 w-2 h-2 rounded-full bg-indigo-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <FAQ items={page.faq} title={copy.shared.faqTitle} />
        <RelatedGuides slugs={page.relatedGuides} locale={locale} />
        <RelatedTools slugs={page.relatedTools} locale={locale} />
      </div>
    </>
  );
}
