'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { ANALYTICS_CONSENT_EVENT, getAnalyticsConsent, trackPageView, type AnalyticsConsentState } from '@/lib/analytics';

interface AnalyticsConfig {
  measurementId: string;
}

function initializeGoogleAnalytics(measurementId: string) {
  if (typeof window === 'undefined' || !measurementId) return;

  window.__gaMeasurementId = measurementId;
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };

  if (!document.getElementById('ga4-script')) {
    const script = document.createElement('script');
    script.id = 'ga4-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }

  const alreadyConfigured = document.getElementById('ga4-config');
  if (!alreadyConfigured) {
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      send_page_view: false,
      anonymize_ip: true,
    });

    const marker = document.createElement('meta');
    marker.id = 'ga4-config';
    marker.setAttribute('data-measurement-id', measurementId);
    document.head.appendChild(marker);
  }
}

function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [measurementId, setMeasurementId] = useState('');
  const [consent, setConsent] = useState<AnalyticsConsentState>('unknown');

  const pagePath = useMemo(() => {
    const query = searchParams?.toString();
    return query ? `${pathname}?${query}` : pathname;
  }, [pathname, searchParams]);

  useEffect(() => {
    let active = true;

    async function loadConfig() {
      try {
        const response = await fetch('/analytics-config', { cache: 'no-store' });
        if (!response.ok) return;
        const config = (await response.json()) as AnalyticsConfig;
        if (active) setMeasurementId(config.measurementId || '');
      } catch {
        // Analytics is optional. Ignore config fetch errors.
      }
    }

    loadConfig();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const syncConsent = () => setConsent(getAnalyticsConsent());
    syncConsent();
    window.addEventListener(ANALYTICS_CONSENT_EVENT, syncConsent as EventListener);
    window.addEventListener('storage', syncConsent);
    return () => {
      window.removeEventListener(ANALYTICS_CONSENT_EVENT, syncConsent as EventListener);
      window.removeEventListener('storage', syncConsent);
    };
  }, []);

  useEffect(() => {
    if (!measurementId || consent !== 'accepted') return;
    initializeGoogleAnalytics(measurementId);
  }, [measurementId, consent]);

  useEffect(() => {
    if (!measurementId || !pagePath || consent !== 'accepted') return;
    trackPageView(pagePath);
  }, [measurementId, pagePath, consent]);

  return null;
}

export default function GoogleAnalytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsTracker />
    </Suspense>
  );
}
