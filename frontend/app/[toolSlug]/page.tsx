import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllSlugs, getToolBySlug } from '@/lib/tools';
import { buildMetadata, buildFaqSchema, buildBreadcrumbSchema } from '@/lib/seo';
import ToolUpload from '@/components/ToolUpload';
import RelatedTools from '@/components/RelatedTools';
import FAQ from '@/components/FAQ';

interface Props { params: { toolSlug: string } }

export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ toolSlug: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tool = getToolBySlug(params.toolSlug);
  if (!tool) return {};
  return buildMetadata(tool);
}

export default function ToolPage({ params }: Props) {
  const tool = getToolBySlug(params.toolSlug);
  if (!tool) notFound();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(tool.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbSchema(tool)) }} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-white/40 mb-8 flex items-center gap-2">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <a href="/tools" className="hover:text-white transition-colors">Tools</a>
          <span>/</span>
          <span className="text-white/80">{tool.title}</span>
        </nav>

        {/* H1 + intro */}
        <div className="text-center mb-10">
          <span className="badge-green inline-block mb-4">Free Online Tool</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">{tool.h1}</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">{tool.intro}</p>
        </div>

        {/* Upload card */}
        <div className="glass-card rounded-3xl p-7 sm:p-10 mb-14">
          <ToolUpload tool={tool} />
        </div>

        {/* How to use */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">How to {tool.title}</h2>
          <ol className="space-y-4">
            {tool.howTo.map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm" style={{background:'rgba(74,222,128,0.2)', border:'2px solid rgba(74,222,128,0.5)', color:'#4ade80'}}>
                  {i + 1}
                </span>
                <span className="text-white/80 pt-1.5 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Supported formats */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-5">Supported Formats</h2>
          <div className="flex flex-wrap gap-2 items-center">
            {tool.accepts.map(fmt => (
              <span key={fmt} className="px-4 py-1.5 rounded-full text-sm font-mono font-semibold text-white" style={{background:'rgba(255,255,255,0.12)', border:'1px solid rgba(255,255,255,0.2)'}}>
                {fmt.replace('.','').toUpperCase()}
              </span>
            ))}
            <svg className="w-5 h-5 text-white/30 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
            <span className="px-4 py-1.5 rounded-full text-sm font-mono font-bold" style={{background:'rgba(74,222,128,0.2)', border:'1px solid rgba(74,222,128,0.5)', color:'#4ade80'}}>
              {tool.outputFormat.toUpperCase()}
            </span>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="mb-14 px-5 py-4 rounded-2xl text-sm" style={{background:'rgba(251,191,36,0.08)', border:'1px solid rgba(251,191,36,0.25)', color:'rgba(253,230,138,0.85)'}}>
          <strong>Disclaimer:</strong> By uploading files, you confirm that you own or have explicit permission to process all uploaded media. Do not upload copyrighted content authorization.
        </div>

        {/* FAQ */}
        <FAQ items={tool.faq} />

        {/* Related */}
        <RelatedTools slugs={tool.related} />
      </div>
    </>
  );
}
