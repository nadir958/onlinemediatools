'use client';

import { OPEN_COOKIE_PREFERENCES_EVENT } from '@/lib/analytics';
import type { Locale } from '@/lib/i18n';

declare global {
  interface Window {
    googlefc?: {
      callbackQueue?: { push: (callback: () => void) => void };
      showRevocationMessage?: () => void;
    };
  }
}

export default function CookiePreferencesButton({ label, locale }: { label: string; locale: Locale }) {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== 'undefined' && window.googlefc?.callbackQueue) {
          window.googlefc.callbackQueue.push(() => {
            window.googlefc?.showRevocationMessage?.();
          });
          return;
        }

        window.dispatchEvent(new CustomEvent(OPEN_COOKIE_PREFERENCES_EVENT));
      }}
      className="hover:text-white transition-colors text-left"
      lang={locale}
    >
      {label}
    </button>
  );
}
