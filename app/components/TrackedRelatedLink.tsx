"use client";

import type { ReactNode } from "react";
import { trackClarityEvent } from "../../lib/clarity";

export default function TrackedRelatedLink({
  href,
  className,
  label,
  children
}: {
  href: string;
  className?: string;
  label: string;
  children: ReactNode;
}) {
  function handleClick() {
    const payload = {
      source_site: "localdealsflorida.org",
      source_page: window.location.pathname,
      target_page: href,
      placement_type: "related_discovery",
      cta_text: label,
      page_path: window.location.pathname
    };
    window.gtag?.("event", "related_guide_click", payload);
    window.dataLayer?.push({ event: "related_guide_click", ...payload });
    trackClarityEvent("related_guide_click", payload);
  }

  return (
    <a className={className} href={href} onClick={handleClick}>
      {children}
    </a>
  );
}
