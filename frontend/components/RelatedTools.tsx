import Link from 'next/link';
import SiteIcon from '@/components/SiteIcon';
import { getCopy } from '@/lib/copy';
import type { Locale } from '@/lib/i18n';
import { localizePath } from '@/lib/i18n';
import { getTools } from '@/lib/tools';

interface RelatedToolsProps {
  slugs: string[];
  locale: Locale;
}

export default function RelatedTools({ slugs, locale }: RelatedToolsProps) {
  const tools = slugs.map(s => getTools(locale).find(t => t.slug === s)).filter(Boolean);
  if (!tools.length) return null;
  const copy = getCopy(locale);

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-white mb-6">{copy.shared.relatedToolsTitle}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tools.map(tool => (
          <Link
            key={tool!.slug}
            href={localizePath(`/${tool!.slug}`, locale)}
            className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-500/50 rounded-xl p-4 transition-all"
          >
            <SiteIcon name={tool!.icon} className="w-8 h-8 mb-2 text-white/85 group-hover:text-indigo-300 transition-colors" />
            <div className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">{tool!.title}</div>
            <div className="text-xs text-slate-400 mt-1">{tool!.description.slice(0, 56)}...</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
