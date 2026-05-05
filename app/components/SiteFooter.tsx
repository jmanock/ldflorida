"use client";

import Link from "next/link";

const topLinks = [
  { label: "Orlando Local Deals", href: "/orlando-local-deals" },
  { label: "Miami Weekend Deals", href: "/miami-weekend-deals" },
  { label: "Tampa Events Deals", href: "/tampa-events-deals" },
  { label: "Florida Restaurant Deals", href: "/florida-restaurant-deals" },
  { label: "Florida Attraction Deals", href: "/florida-attraction-deals" },
  { label: "Free Things To Do", href: "/florida-free-things-to-do" },
  { label: "Florida Date Night Deals", href: "/florida-date-night-deals" }
];

function trackNavigation(label: string, href: string) {
  window.gtag?.("event", "navigation_click", {
    site: "localdealsflorida.org",
    source: "local",
    label,
    href,
    page_path: window.location.pathname
  });
}

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#d8e6e3] bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_1.4fr] lg:px-8">
        <div>
          <p className="text-xl font-black">Local Deals Florida</p>
          <p className="mt-3 max-w-md leading-7 text-[#52686b]">
            Local, useful, everyday Florida deals for restaurants, events, attractions, hidden gems, and things to do near you.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          <div>
            <h3 className="font-black">Network</h3>
            <div className="mt-3 grid gap-2 text-sm font-semibold text-[#52686b]">
              <a href="https://flightdealsflorida.org" onClick={() => trackNavigation("Flight Deals", "https://flightdealsflorida.org")}>
                Flight Deals
              </a>
              <a href="https://hoteldealsflorida.org" onClick={() => trackNavigation("Hotel Deals", "https://hoteldealsflorida.org")}>
                Hotel Deals
              </a>
              <a href="https://cruisedealsflorida.org" onClick={() => trackNavigation("Cruise Deals", "https://cruisedealsflorida.org")}>
                Cruise Deals
              </a>
              <a href="https://localdealsflorida.org" onClick={() => trackNavigation("Local Deals", "https://localdealsflorida.org")}>
                Local Deals
              </a>
              <a href="https://floridadealshub.com" onClick={() => trackNavigation("Florida Deals Hub", "https://floridadealshub.com")}>
                Florida Deals Hub
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-black">Company</h3>
            <div className="mt-3 grid gap-2 text-sm font-semibold text-[#52686b]">
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <a href="/sitemap.xml">Sitemap</a>
            </div>
          </div>
          <div>
            <h3 className="font-black">Top Links</h3>
            <div className="mt-3 grid gap-2 text-sm font-semibold text-[#52686b]">
              {topLinks.map((link) => (
                <Link href={link.href} key={link.href} onClick={() => trackNavigation(link.label, link.href)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#d8e6e3] px-4 py-4 text-center text-xs font-semibold leading-5 text-[#6f8588] sm:px-6 lg:px-8">
        Florida Deals Hub may earn a commission when you book through some links. This helps keep our deal alerts free.
      </div>
    </footer>
  );
}
