import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TOOLS, getAllSlugs, getToolBySlug } from '@/lib/tools';
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

  const faqSchema = buildFaqSchema(tool.faq);
  const breadcrumbSchema = buildBreadcrumbSchema(tool);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-slate-500 mb-8">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span className="mx-2">/</span>
          <a href="/tools" className="hover:text-white transition-colors">Tools</a>
          <span className="mx-2">/</span>
          <span className="text-slate-300">{tool.title}</span>
        </nav>

        {/* H1 + Intro */}
        <h1 className="text-4xl font-black text-white mb-4">{tool.h1}</h1>
        <p className="text-lg text-slate-400 mb-10">{tool.intro}</p>

        {/* Upload Tool */}
        <div className="glass-card rounded-2xl p-6 sm:p-8">
          <ToolUpload tool={tool} />
        </div>

        {/* How to use */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-white mb-5">How to {tool.title}</h2>
          <ol className="space-y-3">
            {tool.howTo.map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-indigo-600/20 border border-indigo-500/30 rounded-full flex items-center justify-center text-indigo-400 font-bold text-sm">{i + 1}</span>
                <span className="text-slate-300 pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Supported formats */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">Supported Formats</h2>
          <div className="flex flex-wrap gap-2">
            {tool.accepts.map(fmt => (
              <span key={fmt} className="px-3 py-1 bg-white/8 border border-white/15 rounded-lg text-sm text-slate-300 font-mono">{fmt.toUpperCase()}</span>
            ))}
            <span className="px-3 py-1 bg-indigo-500/15 border border-indigo-500/30 rounded-lg text-sm text-indigo-300">→ {tool.outputFormat.toUpperCase()}</span>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="mt-10 p-4 bg-amber-500/8 border border-amber-500/20 rounded-xl text-sm text-amber-300/80">
          <strong>Disclaimer:</strong> By uploading files, you confirm that you own or have explicit permission to process all uploaded media. Do not upload copyrighted content without authorization.
        </div>

        {/* FAQ */}
        <FAQ items={tool.faq} />

        {/* Related */}
        <RelatedTools slugs={tool.related} />
      </div>
    </>
  );
}
