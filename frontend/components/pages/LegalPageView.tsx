import { getCopy } from '@/lib/copy';
import { localizePath, type Locale } from '@/lib/i18n';
import { getLegalPage, type LegalPageKey } from '@/lib/legal';

export default function LegalPageView({ locale, pageKey }: { locale: Locale; pageKey: LegalPageKey }) {
  const copy = getCopy(locale);
  const page = getLegalPage(locale, pageKey);

  return (
    <div className="max-w-4xl mx-auto px-4 py-14">
      <nav className="text-sm text-white/40 mb-8 flex items-center gap-2">
        <a href={localizePath('/', locale)} className="hover:text-white transition-colors">{copy.shared.homeCrumb}</a>
        <span>/</span>
        <span className="text-white/80">{page.title}</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">{page.title}</h1>
        <p className="text-lg text-white/60 max-w-3xl">{page.intro}</p>
      </header>

      <div className="space-y-8">
        {page.sections.map(section => (
          <section key={section.title} className="glass-card rounded-2xl p-6 sm:p-7">
            <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
            <div className="space-y-4 text-sm text-white/65 leading-relaxed">
              {section.paragraphs.map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
