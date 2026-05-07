import Link from 'next/link';
import SiteIcon from '@/components/SiteIcon';
import { localizePath, type Locale } from '@/lib/i18n';
import { getSeoClusterPath, getSeoClustersBySlugs } from '@/lib/seo-clusters';

const GUIDE_GROUPS = [
  {
    key: 'transcription',
    icon: 'aiCategory' as const,
    slugs: ['mp3-to-text', 'video-to-text', 'podcast-transcription', 'meeting-transcription'],
  },
  {
    key: 'subtitles',
    icon: 'videoCategory' as const,
    slugs: ['subtitle-generator', 'srt-generator', 'youtube-subtitle-generator', 'translate-srt'],
  },
  {
    key: 'cleanup',
    icon: 'audioCategory' as const,
    slugs: ['remove-background-noise-from-audio', 'clean-podcast-audio', 'voice-recording-noise-reduction'],
  },
  {
    key: 'comparison',
    icon: 'aiCategory' as const,
    slugs: ['turboscribe-alternative'],
  },
];

function copyForLocale(locale: Locale) {
  if (locale === 'fr') {
    return {
      title: 'Guides par workflow',
      body: 'Ces pages ciblent les recherches a forte intention autour de la transcription, des sous-titres, du nettoyage audio et des alternatives concurrentes, puis redirigent vers le bon outil.',
      groups: {
        transcription: {
          title: 'Guides de transcription',
          description: 'Captez les recherches a forte intention autour des reunions, podcasts, interviews et fichiers a convertir en texte.',
        },
        subtitles: {
          title: 'Guides de sous-titres',
          description: 'Couvrez les recherches sur la generation de sous-titres, les fichiers SRT, les captions YouTube et la traduction.',
        },
        cleanup: {
          title: 'Guides de nettoyage audio',
          description: 'Ciblez les recherches de resolution de probleme autour du bruit de fond, de la clarte vocale et de la preparation avant transcription.',
        },
        comparison: {
          title: 'Pages alternatives',
          description: 'Captez les recherches concurrentielles des utilisateurs qui comparent des outils avant de changer.',
        },
      },
    };
  }
  if (locale === 'es') {
    return {
      title: 'Guias por flujo de trabajo',
      body: 'Estas paginas atacan busquedas de alta intencion sobre transcripcion, subtitulos, limpieza de audio y alternativas competitivas, y dirigen al usuario a la mejor herramienta.',
      groups: {
        transcription: {
          title: 'Guias de transcripcion',
          description: 'Captura busquedas de alta intencion sobre reuniones, podcasts, entrevistas y archivos que deben convertirse en texto.',
        },
        subtitles: {
          title: 'Guias de subtitulos',
          description: 'Cubre busquedas sobre generacion de subtitulos, archivos SRT, captions para YouTube y traduccion.',
        },
        cleanup: {
          title: 'Guias de limpieza de audio',
          description: 'Ataca busquedas orientadas a resolver ruido de fondo, claridad de voz y preparacion previa a la transcripcion.',
        },
        comparison: {
          title: 'Paginas de alternativas',
          description: 'Captura busquedas competitivas de usuarios que comparan herramientas antes de cambiar.',
        },
      },
    };
  }
  return {
    title: 'Guides by workflow',
    body: 'These landing pages target the highest-intent searches around transcription, subtitles, audio cleanup, and competitor alternatives while pushing visitors toward the best tool for the job.',
    groups: {
      transcription: {
        title: 'Transcription Guides',
        description: 'Own strong intent searches around turning meetings, podcasts, interviews, and uploaded files into usable text.',
      },
      subtitles: {
        title: 'Subtitle Guides',
        description: 'Capture searches around subtitle generation, SRT files, YouTube captions, and translated subtitle workflows.',
      },
      cleanup: {
        title: 'Audio Cleanup Guides',
        description: 'Target problem-solving searches about noise reduction, speech clarity, and preparing recordings for transcription.',
      },
      comparison: {
        title: 'Alternative Pages',
        description: 'Capture competitive search intent from users comparing transcription and subtitle tools before they switch.',
      },
    },
  };
}

export default function SeoGuidesSection({ locale = 'en' }: { locale?: Locale }) {
  const copy = copyForLocale(locale);

  return (
    <section className="mt-16">
      <div className="max-w-4xl mb-8">
        <h2 className="text-2xl font-bold text-white mb-3">{copy.title}</h2>
        <p className="text-sm text-white/60 leading-relaxed">{copy.body}</p>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {GUIDE_GROUPS.map(group => {
          const guides = getSeoClustersBySlugs(group.slugs, locale);
          const groupCopy = copy.groups[group.key as keyof typeof copy.groups];

          return (
            <div key={group.key} className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <SiteIcon name={group.icon} className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-white">{groupCopy.title}</h3>
              </div>
              <p className="text-sm text-white/60 leading-relaxed mb-4">{groupCopy.description}</p>
              <div className="space-y-2">
                {guides.map(guide => (
                  <Link key={guide.slug} href={localizePath(getSeoClusterPath(guide.slug, locale), locale)} className="block rounded-lg px-3 py-2 text-sm text-white/75 hover:text-white hover:bg-white/10 transition-all">
                    {guide.h1}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
