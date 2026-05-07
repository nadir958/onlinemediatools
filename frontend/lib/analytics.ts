export const ANALYTICS_CONSENT_KEY = 'omt_analytics_consent_v1';
export const ANALYTICS_CONSENT_EVENT = 'omt-analytics-consent-changed';
export const OPEN_COOKIE_PREFERENCES_EVENT = 'omt-open-cookie-preferences';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    __gaMeasurementId?: string;
  }
}

export type AnalyticsConsentState = 'accepted' | 'declined' | 'unknown';

export function getAnalyticsConsent(): AnalyticsConsentState {
  if (typeof window === 'undefined') return 'unknown';
  const value = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
  if (value === 'accepted' || value === 'declined') return value;
  return 'unknown';
}

export function setAnalyticsConsent(value: Exclude<AnalyticsConsentState, 'unknown'>) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(ANALYTICS_CONSENT_KEY, value);
  window.dispatchEvent(new CustomEvent(ANALYTICS_CONSENT_EVENT, { detail: value }));
}

function isReady() {
  return (
    typeof window !== 'undefined' &&
    getAnalyticsConsent() == 'accepted' &&
    typeof window.gtag === 'function' &&
    !!window.__gaMeasurementId
  );
}

export function trackPageView(path: string) {
  if (!isReady()) return;
  window.gtag?.('event', 'page_view', {
    page_path: path,
    page_location: `${window.location.origin}${path}`,
    page_title: document.title,
    language: document.documentElement.lang,
  });
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (!isReady()) return;
  window.gtag?.('event', eventName, params);
}
