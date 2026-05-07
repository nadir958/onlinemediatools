'use client';

import Link, { type LinkProps } from 'next/link';
import type { ReactNode } from 'react';
import { trackEvent } from '@/lib/analytics';

interface TrackedLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  eventName?: string;
  eventParams?: Record<string, unknown>;
  onClick?: () => void;
  hrefLang?: string;
  title?: string;
  ariaCurrent?: 'page';
}

export default function TrackedLink({
  children,
  className,
  eventName = 'cta_clicked',
  eventParams = {},
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      className={className}
      onClick={() => {
        trackEvent(eventName, eventParams);
        onClick?.();
      }}
    >
      {children}
    </Link>
  );
}
