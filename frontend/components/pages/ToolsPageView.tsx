import Link from 'next/link';
import SiteIcon from '@/components/SiteIcon';
import { getCopy } from '@/lib/copy';
import { buildCollectionPageSchema, buildOrganizationSchema } from '@/lib/seo';
import { localizePath, type Locale } from '@/lib/i18n';
import { getTools } from '@/lib/tools';

export default function ToolsPageView({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const tools = getTools(locale);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationSchema(locale)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildCollectionPageSchema(tools, locale)) }} />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-14">
          <span className="badge-green inline-block mb-4">{copy.toolsPage.badge}</span>
          <h1 className="text-4xl font-black text-white mb-3">{copy.toolsPage.title}</h1>
          <p className="text-white/60 text-lg">{copy.toolsPage.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map(tool => (
            <Link key={tool.slug} href={localizePath(`/${tool.slug}`, locale)} className="group glass-card rounded-2xl p-6 transition-all hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <SiteIcon name={tool.icon} className="w-8 h-8 shrink-0 text-white/85 group-hover:text-green-400 transition-colors" />
                <div>
                  <h2 className="font-bold text-white group-hover:text-green-400 transition-colors mb-1" style={{ color: 'inherit' }}>{tool.h1}</h2>
                  <p className="text-sm text-white/55 leading-relaxed">{tool.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-16 max-w-4xl mx-auto text-sm text-white/60 leading-relaxed space-y-4">
          <h2 className="text-2xl font-bold text-white">{copy.toolsPage.infoTitle}</h2>
          {copy.toolsPage.infoBody.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </section>
      </div>
    </>
  );
}
