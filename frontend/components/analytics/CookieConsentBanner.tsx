'use client';

import { useEffect, useState } from 'react';
import { getCopy } from '@/lib/copy';
import { detectLocaleFromPath, type Locale } from '@/lib/i18n';
import {
  ANALYTICS_CONSENT_EVENT,
  OPEN_COOKIE_PREFERENCES_EVENT,
  getAnalyticsConsent,
  setAnalyticsConsent,
  type AnalyticsConsentState,
} from '@/lib/analytics';

function bannerLocale(pathname: string): Locale {
  return detectLocaleFromPath(pathname || '/');
}

export default function CookieConsentBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    // Show banner only if user has never made a choice
    const hasChoice = window.localStorage.getItem('omt_analytics_consent_v1');
    setIsOpen(!hasChoice);
    setLocale(bannerLocale(window.location.pathname));

    const handleOpenPreferences = () => {
      setLocale(bannerLocale(window.location.pathname));
      setIsOpen(true);
    };

    const handleConsentChanged = (event: Event) => {
      const detail = (event as CustomEvent<AnalyticsConsentState>).detail;
      if (detail === 'declined') setIsOpen(false);
    };

    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, handleOpenPreferences);
    window.addEventListener(ANALYTICS_CONSENT_EVENT, handleConsentChanged as EventListener);
    return () => {
      window.removeEventListener(OPEN_COOKIE_PREFERENCES_EVENT, handleOpenPreferences);
      window.removeEventListener(ANALYTICS_CONSENT_EVENT, handleConsentChanged as EventListener);
    };
  }, []);

  if (!isOpen) return null;

  const copy = getCopy(locale).analyticsBanner;

  const decline = () => {
    setAnalyticsConsent('declined');
    setIsOpen(false);
  };

  const dismiss = () => {
    // Dismiss = accept (they chose to continue using the site)
    setAnalyticsConsent('accepted');
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4">
      <div
        className="max-w-4xl mx-auto rounded-2xl border border-white/15 shadow-2xl backdrop-blur-xl p-4 md:p-5"
        style={{ background: 'rgba(12,17,40,0.96)' }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-white/60 text-sm leading-relaxed flex-1">
            {copy.body}
          </p>
          <div className="flex gap-2 shrink-0">
            <button
              type="button"
              onClick={decline}
              className="px-4 py-2 rounded-xl border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-all text-sm whitespace-nowrap"
            >
              {copy.decline}
            </button>
            <button
              type="button"
              onClick={dismiss}
              aria-label="Close"
              className="p-2 rounded-xl text-white/30 hover:text-white/60 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
