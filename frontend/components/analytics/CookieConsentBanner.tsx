'use client';

import { useEffect, useState } from 'react';
import { getCopy } from '@/lib/copy';
import { detectLocaleFromPath, type Locale } from '@/lib/i18n';
import { ANALYTICS_CONSENT_EVENT, OPEN_COOKIE_PREFERENCES_EVENT, getAnalyticsConsent, setAnalyticsConsent, trackEvent, type AnalyticsConsentState } from '@/lib/analytics';

function bannerLocale(pathname: string): Locale {
  return detectLocaleFromPath(pathname || '/');
}

export default function CookieConsentBanner() {
  const [consent, setConsent] = useState<AnalyticsConsentState>('unknown');
  const [isOpen, setIsOpen] = useState(false);
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    const nextConsent = getAnalyticsConsent();
    setConsent(nextConsent);
    setIsOpen(nextConsent === 'unknown');
    setLocale(bannerLocale(window.location.pathname));

    const handleOpenPreferences = () => {
      setConsent(getAnalyticsConsent());
      setLocale(bannerLocale(window.location.pathname));
      setIsOpen(true);
    };

    const handleConsentChanged = (event: Event) => {
      const detail = (event as CustomEvent<AnalyticsConsentState>).detail;
      const nextConsentState = detail === 'accepted' || detail === 'declined' ? detail : getAnalyticsConsent();
      setConsent(nextConsentState);
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

  const accept = () => {
    setAnalyticsConsent('accepted');
    setConsent('accepted');
    setIsOpen(false);
    trackEvent('analytics_consent_updated', {
      consent_value: 'accepted',
      locale,
      consent_type: 'analytics',
    });
  };

  const decline = () => {
    setAnalyticsConsent('declined');
    setConsent('declined');
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4">
      <div className="max-w-4xl mx-auto rounded-2xl border border-white/15 shadow-2xl backdrop-blur-xl p-5 md:p-6" style={{ background: 'rgba(12,17,40,0.96)' }}>
        <div className="md:flex md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-white font-bold text-lg">{copy.title}</h2>
            <p className="text-white/70 text-sm leading-relaxed mt-2">{copy.body}</p>
          </div>
          <div className="flex flex-wrap gap-3 mt-5 md:mt-0 md:justify-end">
            <button
              type="button"
              onClick={decline}
              className="px-4 py-2.5 rounded-xl border border-white/15 text-white/80 hover:text-white hover:bg-white/10 transition-all"
            >
              {copy.decline}
            </button>
            <button
              type="button"
              onClick={accept}
              className="px-4 py-2.5 rounded-xl font-semibold text-[#0c1734] bg-white hover:bg-green-200 transition-all"
            >
              {copy.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
