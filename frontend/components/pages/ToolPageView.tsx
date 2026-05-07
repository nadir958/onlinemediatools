import { notFound } from 'next/navigation';
import SiteIcon from '@/components/SiteIcon';
import FAQ from '@/components/FAQ';
import RelatedTools from '@/components/RelatedTools';
import RelatedGuides from '@/components/RelatedGuides';
import ToolUpload from '@/components/ToolUpload';
import { getCopy } from '@/lib/copy';
import { localizePath, type Locale } from '@/lib/i18n';
import { buildBreadcrumbSchema, buildFaqSchema, buildToolSchema } from '@/lib/seo';
import { TOOL_TO_GUIDE_MAP } from '@/lib/seo-clusters';
import { getToolBySlug } from '@/lib/tools';

function aiPositioningCopy(locale: Locale) {
  if (locale === 'fr') {
    return {
      title: 'Pourquoi utiliser cet outil IA',
      cards: [
        { title: 'Pense pour la voix et la publication', body: 'Ce workflow est utile pour les reunions, interviews, podcasts, sous-titres, resumes et livrables video.' },
        { title: 'Sortie directement exploitable', body: 'Le resultat peut ensuite etre relu, publie, localise ou reinjecte dans vos workflows de montage et de documentation.' },
        { title: 'Test rapide sans compte', body: 'Vous pouvez valider un cas d usage ou traiter un besoin ponctuel sans inscription, avec suppression automatique des fichiers.' },
      ],
      workflowTitle: 'Comment cette page s integre au workflow',
      workflowBody: 'Pour beaucoup d equipes, l etape IA vient avant la conversion, la compression ou la publication. Nettoyez eventuellement l audio, generez une transcription ou des sous-titres, puis utilisez les utilitaires media lies ci-dessous pour finaliser le fichier.',
    };
  }
  if (locale === 'es') {
    return {
      title: 'Por que usar esta herramienta IA',
      cards: [
        { title: 'Pensada para voz y publicacion', body: 'Este flujo es util para reuniones, entrevistas, podcasts, subtitulos, resumenes y entregables de video.' },
        { title: 'Salida lista para trabajar', body: 'Despues puedes revisar el resultado, publicarlo, localizarlo o integrarlo en flujos de edicion y documentacion.' },
        { title: 'Prueba rapida sin cuenta', body: 'Puedes validar un caso de uso o resolver una tarea puntual sin registro, con eliminacion automatica de archivos.' },
      ],
      workflowTitle: 'Como encaja esta pagina en el flujo',
      workflowBody: 'En muchos equipos, el paso IA llega antes de convertir, comprimir o publicar. Si hace falta, limpia primero el audio, luego genera la transcripcion o los subtitulos y despues usa las utilidades multimedia relacionadas para preparar la entrega final.',
    };
  }
  return {
    title: 'Why use this AI tool',
    cards: [
      { title: 'Built for speech and publishing workflows', body: 'This flow is useful for meetings, interviews, podcasts, subtitles, summaries, and video publishing deliverables.' },
      { title: 'Output you can work with immediately', body: 'The result can be reviewed, published, localized, or passed into editing, documentation, or distribution steps right away.' },
      { title: 'Fast testing without an account', body: 'You can validate a use case or handle a one-off job without signup, while keeping automatic file deletion in place.' },
    ],
    workflowTitle: 'Where this page fits in the workflow',
    workflowBody: 'For many teams, the AI step comes before conversion, compression, or publishing. Clean the audio if needed, generate the transcript or subtitles, then use the related media utilities below to prepare the final deliverable.',
  };
}

export default function ToolPageView({ locale, toolSlug }: { locale: Locale; toolSlug: string }) {
  const tool = getToolBySlug(toolSlug, locale);
  if (!tool) notFound();
  const copy = getCopy(locale);
  const aiCopy = aiPositioningCopy(locale);
  const isAiTool = tool.category === 'ai';
  const relatedGuideSlugs = TOOL_TO_GUIDE_MAP[tool.slug] || [];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildToolSchema(tool, locale)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(tool.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbSchema(tool, locale)) }} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-white/40 mb-8 flex items-center gap-2">
          <a href={localizePath('/', locale)} className="hover:text-white transition-colors">{copy.shared.homeCrumb}</a>
          <span>/</span>
          <a href={localizePath('/tools', locale)} className="hover:text-white transition-colors">{copy.shared.toolsCrumb}</a>
          <span>/</span>
          <span className="text-white/80">{tool.title}</span>
        </nav>

        <div className="text-center mb-10">
          <span className="badge-green inline-block mb-4">{copy.shared.freeToolBadge}</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">{tool.h1}</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">{tool.intro}</p>
        </div>

        {isAiTool ? (
          <section className="grid md:grid-cols-3 gap-4 mb-10">
            {aiCopy.cards.map(card => (
              <div key={card.title} className="glass-card rounded-2xl p-5">
                <h2 className="text-lg font-bold text-white mb-2">{card.title}</h2>
                <p className="text-sm text-white/65 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </section>
        ) : null}

        <div className="glass-card rounded-3xl p-7 sm:p-10 mb-14">
          <ToolUpload tool={tool} locale={locale} />
        </div>

        {isAiTool ? (
          <section className="mb-14 glass-card rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">{aiCopy.workflowTitle}</h2>
            <p className="text-sm text-white/65 leading-relaxed">{aiCopy.workflowBody}</p>
          </section>
        ) : null}

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">{copy.shared.howToPrefix} {tool.title}</h2>
          <ol className="space-y-4">
            {tool.howTo.map((step, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: 'rgba(74,222,128,0.2)', border: '2px solid rgba(74,222,128,0.5)', color: '#4ade80' }}>
                  {index + 1}
                </span>
                <span className="text-white/80 pt-1.5 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-5">{copy.shared.supportedFormats}</h2>
          <div className="flex flex-wrap gap-2 items-center">
            {tool.accepts.map(fmt => (
              <span key={fmt} className="px-4 py-1.5 rounded-full text-sm font-mono font-semibold text-white" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>
                {fmt.replace('.', '').toUpperCase()}
              </span>
            ))}
            <svg className="w-5 h-5 text-white/30 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span className="px-4 py-1.5 rounded-full text-sm font-mono font-bold" style={{ background: 'rgba(74,222,128,0.2)', border: '1px solid rgba(74,222,128,0.5)', color: '#4ade80' }}>
              {tool.outputFormat.toUpperCase()}
            </span>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6 mb-14">
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">{copy.shared.commonUseCases}</h2>
            <ul className="space-y-3 text-sm text-white/65 leading-relaxed">
              {tool.useCases.map(useCase => (
                <li key={useCase} className="flex gap-3">
                  <SiteIcon name="check" className="w-4 h-4 mt-0.5 shrink-0 text-green-400" />
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">{copy.shared.outputPrivacy}</h2>
            <p className="text-sm text-white/65 leading-relaxed mb-4">{tool.outputNote}</p>
            <p className="text-sm text-white/65 leading-relaxed">{copy.shared.privacyText}</p>
          </div>
        </section>

        <div className="mb-14 px-5 py-4 rounded-2xl text-sm" style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.25)', color: 'rgba(253,230,138,0.85)' }}>
          <strong>{copy.shared.disclaimerTitle}</strong> {copy.shared.disclaimerText}
        </div>

        <FAQ items={tool.faq} title={copy.shared.faqTitle} />
        {relatedGuideSlugs.length ? <RelatedGuides slugs={relatedGuideSlugs} locale={locale} /> : null}
        <RelatedTools slugs={tool.related} locale={locale} />
      </div>
    </>
  );
}
