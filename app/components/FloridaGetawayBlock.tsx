"use client";

import { Compass, Hotel, Plane, Sailboat } from "lucide-react";
import { trackClarityEvent } from "../../lib/clarity";

export default function FloridaGetawayBlock() {
  const links = [
    { label: "Find Flights to Florida", href: "https://flightdealsflorida.org", icon: Plane },
    { label: "Compare Florida Hotels", href: "https://hoteldealsflorida.org", icon: Hotel },
    { label: "Browse Florida Cruise Deals", href: "https://cruisedealsflorida.org", icon: Sailboat },
    { label: "Start at Florida Deals Hub", href: "https://floridadealshub.com", icon: Compass }
  ];

  function trackNavigation(label: string, href: string) {
    const payload = {
      site: "localdealsflorida.org",
      source_site: "localdealsflorida.org",
      source: "local",
      label,
      href,
      page_path: window.location.pathname
    };

    window.gtag?.("event", "navigation_click", payload);
    window.gtag?.("event", "network_site_click", payload);
    trackClarityEvent("navigation_click", payload);
    trackClarityEvent("network_site_click", payload);
  }

  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
      <div className="rounded-[28px] border border-[#d8e6e3] bg-white p-6 shadow-xl shadow-[#087f8c]/8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Start Planning Your Florida Day</p>
            <h2 className="mt-2 text-2xl font-black text-[#163235]">Turn local ideas into a complete Florida plan</h2>
            <p className="mt-3 text-sm font-semibold leading-6 text-[#52686b]">
              Pair restaurants, events, beaches, and attractions with the wider Florida Deals Hub network when a local day becomes a trip.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {links.map((link) => (
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#163235] px-5 text-sm font-black text-white shadow-lg shadow-[#163235]/15 transition hover:bg-[#07515a]"
                href={link.href}
                key={link.href}
                onClick={() => trackNavigation(link.label, link.href)}
                style={{ color: "#ffffff" }}
              >
                <link.icon size={18} aria-hidden="true" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-4 text-xs font-bold leading-5 text-[#6f8588]">
          Network links stay separate from local deal cards so the cards remain focused on current local sources.
        </p>
      </div>
    </section>
  );
}
