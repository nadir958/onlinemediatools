'use client';
import { useState } from 'react';

interface FAQProps {
  items: { q: string; a: string }[];
  title: string;
}

export default function FAQ({ items, title }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left text-white font-medium hover:bg-white/5 transition-colors"
            >
              <span>{item.q}</span>
              <span className={`ml-4 text-indigo-400 transition-transform ${open === i ? 'rotate-180' : ''}`}>▾</span>
            </button>
            {open === i && (
              <div className="px-6 pb-4 text-slate-400 text-sm leading-relaxed">{item.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
