import Link from 'next/link';
import SiteIcon from '@/components/SiteIcon';
import { getCopy } from '@/lib/copy';
import SeoGuidesSection from '@/components/SeoGuidesSection';
import { buildCollectionPageSchema, buildOrganizationSchema } from '@/lib/seo';
import { localizePath, type Locale } from '@/lib/i18n';
import { getTools } from '@/lib/tools';

function toolGroups(locale: Locale) {
  if (locale === 'fr') {
    return [
      {
        key: 'ai',
        title: 'Outils IA prioritaires',
        description: 'Transcription, sous-titres, traduction et nettoyage audio pour notes, accessibilite, localisation et publication.',
        icon: 'aiCategory' as const,
        slugs: ['transcribe-audio', 'auto-subtitle', 'translate-subtitles', 'clean-audio'],
      },
      {
        key: 'conversion',
        title: 'Conversion et extraction',
        description: 'Convertissez des formats video ou audio et extrayez l audio utile apres traitement.',
        icon: 'videoCategory' as const,
        slugs: ['webm-to-mp4', 'mov-to-mp4', 'video-converter', 'audio-converter', 'mp4-to-mp3', 'video-to-mp3', 'extract-audio'],
      },
      {
        key: 'editing',
        title: 'Compression et preparation',
        description: 'Reduisez la taille, coupez un clip ou supprimez l audio avant diffusion et publication.',
        icon: 'audioCategory' as const,
        slugs: ['compress-video', 'trim-video', 'remove-audio-from-video'],
      },
    ];
  }
  if (locale === 'es') {
    return [
      {
        key: 'ai',
        title: 'Herramientas IA prioritarias',
        description: 'Transcripcion, subtitulos, traduccion y limpieza de audio para notas, accesibilidad, localizacion y publicacion.',
        icon: 'aiCategory' as const,
        slugs: ['transcribe-audio', 'auto-subtitle', 'translate-subtitles', 'clean-audio'],
      },
      {
        key: 'conversion',
        title: 'Conversion y extraccion',
        description: 'Convierte formatos de video o audio y extrae el sonido util despues del procesamiento.',
        icon: 'videoCategory' as const,
        slugs: ['webm-to-mp4', 'mov-to-mp4', 'video-converter', 'audio-converter', 'mp4-to-mp3', 'video-to-mp3', 'extract-audio'],
      },
      {
        key: 'editing',
        title: 'Compresion y preparacion',
        description: 'Reduce tamano, recorta clips o elimina audio antes de compartir y publicar.',
        icon: 'audioCategory' as const,
        slugs: ['compress-video', 'trim-video', 'remove-audio-from-video'],
      },
    ];
  }
  return [
    {
      key: 'ai',
      title: 'AI-first workflow tools',
      description: 'Start here for transcription, subtitle generation, subtitle translation, and background-noise cleanup.',
      icon: 'aiCategory' as const,
      slugs: ['transcribe-audio', 'auto-subtitle', 'translate-subtitles', 'clean-audio'],
    },
    {
      key: 'conversion',
      title: 'Conversion and extraction utilities',
      description: 'Convert media formats and extract audio once the transcript, subtitles, or cleanup step is done.',
      icon: 'videoCategory' as const,
      slugs: ['webm-to-mp4', 'mov-to-mp4', 'video-converter', 'audio-converter', 'mp4-to-mp3', 'video-to-mp3', 'extract-audio'],
    },
    {
      key: 'editing',
      title: 'Compression and delivery prep',
      description: 'Reduce file size, trim clips, or remove audio before sending files to clients, platforms, or internal teams.',
      icon: 'audioCategory' as const,
      slugs: ['compress-video', 'trim-video', 'remove-audio-from-video'],
    },
  ];
}

export default function ToolsPageView({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const tools = getTools(locale);
  const groups = toolGroups(locale);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationSchema(locale)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildCollectionPageSchema(tools, locale)) }} />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-14 max-w-4xl mx-auto">
          <span className="badge-green inline-block mb-4">{copy.toolsPage.badge}</span>
          <h1 className="text-4xl font-black text-white mb-3">{copy.toolsPage.title}</h1>
          <p className="text-white/60 text-lg">{copy.toolsPage.subtitle}</p>
        </div>

        <div className="space-y-12">
          {groups.map(group => (
            <section key={group.key}>
              <div className="flex items-center gap-3 mb-3">
                <SiteIcon name={group.icon} className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold text-white">{group.title}</h2>
              </div>
              <p className="text-sm text-white/55 max-w-3xl mb-6">{group.description}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.slugs.map(slug => {
                  const tool = tools.find(item => item.slug === slug);
                  if (!tool) return null;
                  return (
                    <Link key={tool.slug} href={localizePath(`/${tool.slug}`, locale)} className="group glass-card rounded-2xl p-6 transition-all hover:-translate-y-1">
                      <div className="flex items-start gap-4">
                        <SiteIcon name={tool.icon} className="w-8 h-8 shrink-0 text-white/85 group-hover:text-green-400 transition-colors" />
                        <div>
                          <h3 className="font-bold text-white group-hover:text-green-400 transition-colors mb-1" style={{ color: 'inherit' }}>{tool.h1}</h3>
                          <p className="text-sm text-white/55 leading-relaxed">{tool.description}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <SeoGuidesSection locale={locale} />

        <section className="mt-16 max-w-4xl mx-auto text-sm text-white/60 leading-relaxed space-y-4">
          <h2 className="text-2xl font-bold text-white">{copy.toolsPage.infoTitle}</h2>
          {copy.toolsPage.infoBody.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </section>
      </div>
    </>
  );
}
