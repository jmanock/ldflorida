"use client";

import { useEffect } from "react";
import { trackClarityEvent } from "../../lib/clarity";

export default function WeekendGuideAnalytics() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest("a");
      const href = link?.getAttribute("href") ?? "";

      if (!link || !href.startsWith("/")) return;

      const payload = {
        source_site: "localdealsflorida.org",
        page_path: window.location.pathname,
        destination_url: href,
        cta_text: link.textContent?.trim().slice(0, 100)
      };

      window.gtag?.("event", "weekend_guide_click", payload);
      window.dataLayer?.push({ event: "weekend_guide_click", ...payload });
      trackClarityEvent("weekend_guide_click", payload);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
