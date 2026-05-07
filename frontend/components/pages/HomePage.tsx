import Link from 'next/link';
import SiteIcon from '@/components/SiteIcon';
import FAQ from '@/components/FAQ';
import { getCopy } from '@/lib/copy';
import { localizePath, type Locale } from '@/lib/i18n';
import { buildFaqSchema, buildOrganizationSchema, buildWebsiteSchema } from '@/lib/seo';
import { getTools } from '@/lib/tools';

export default function HomePage({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const tools = getTools(locale);
  const categories = [
    { label: copy.shared.categories.videoTools, icon: 'videoCategory' as const, tools: ['webm-to-mp4', 'mov-to-mp4', 'compress-video', 'trim-video', 'video-converter'] },
    { label: copy.shared.categories.audioTools, icon: 'audioCategory' as const, tools: ['mp4-to-mp3', 'video-to-mp3', 'extract-audio', 'remove-audio-from-video', 'audio-converter'] },
  ];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationSchema(locale)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildWebsiteSchema(locale)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(copy.home.faq)) }} />

      <section className="relative overflow-hidden py-28 px-4 text-center">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.08) 0%, transparent 70%)' }} />
        <div className="relative max-w-4xl mx-auto">
          <span className="badge-green inline-block mb-6">{copy.home.badge}</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight tracking-tight">
            {copy.home.title}<br />
            <span style={{ color: '#4ade80' }}>{copy.home.highlight}</span> {copy.home.titleSuffix}
          </h1>
          <p className="mt-6 text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            {copy.home.descriptionTop}<br />
            {copy.home.descriptionBottom}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href={localizePath('/webm-to-mp4', locale)} className="btn-white px-8 py-3.5 text-base">
              {copy.home.primaryCta}
            </Link>
            <Link href={localizePath('/tools', locale)} className="btn-outline px-8 py-3.5 text-base">
              {copy.home.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: 'rgba(0,0,0,0.12)' }} className="border-y border-white/10 py-8">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {copy.trustBadges.map(b => (
            <div key={b.title}>
              <SiteIcon name={b.icon} className="w-8 h-8 mx-auto mb-2 text-white" />
              <div className="font-bold text-white text-sm">{b.title}</div>
              <div className="text-xs text-white/50 mt-0.5">{b.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-black text-white text-center mb-2">{copy.home.popularTools}</h2>
        <p className="text-white/50 text-center mb-10">{copy.home.popularToolsSub}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {tools.slice(0, 5).map(tool => (
            <Link key={tool.slug} href={localizePath(`/${tool.slug}`, locale)} className="group glass-card rounded-2xl p-6 text-center transition-all hover:-translate-y-1">
              <SiteIcon name={tool.icon} className="w-10 h-10 mx-auto mb-3 text-white group-hover:text-green-400 transition-colors" />
              <div className="text-sm font-bold text-white group-hover:text-green-400 transition-colors" style={{ color: 'inherit' }}>{tool.title}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-8">
        <div className="grid md:grid-cols-3 gap-5">
          {copy.home.workflows.map(workflow => (
            <div key={workflow.title} className="glass-card rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-3">{workflow.title}</h2>
              <p className="text-sm text-white/65 leading-relaxed">{workflow.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'rgba(0,0,0,0.1)' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-white text-center mb-12">{copy.home.allTools}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map(cat => (
              <div key={cat.label} className="glass-card rounded-2xl p-7">
                <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                  <SiteIcon name={cat.icon} className="w-5 h-5 text-green-400" /> {cat.label}
                </h3>
                <div className="space-y-2">
                  {cat.tools.map(slug => {
                    const tool = tools.find(t => t.slug === slug);
                    if (!tool) return null;
                    return (
                      <Link key={slug} href={localizePath(`/${slug}`, locale)} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-all group">
                        <SiteIcon name={tool.icon} className="w-5 h-5 shrink-0 text-white/80 group-hover:text-green-400 transition-colors" />
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-green-400 transition-colors" style={{ color: 'inherit' }}>{tool.title}</div>
                          <div className="text-xs text-white/50">{tool.description}</div>
                        </div>
                        <svg className="w-4 h-4 text-white/30 ml-auto group-hover:text-white/70 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-20 text-white/60 text-sm leading-relaxed space-y-4">
        <h2 className="text-2xl font-bold text-white">{copy.home.infoTitle}</h2>
        {copy.home.infoBody.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        <p><strong className="text-white">{copy.home.copyrightNoticeLabel}</strong> {copy.home.copyrightNoticeText}</p>
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-24">
        <FAQ items={copy.home.faq} title={copy.shared.faqTitle} />
      </section>
    </div>
  );
}
