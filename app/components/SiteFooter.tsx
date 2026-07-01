"use client";

import Link from "next/link";
import { trackClarityEvent } from "../../lib/clarity";

const cityLinks = [
  { label: "Things To Do In Orlando", href: "/things-to-do-in-orlando" },
  { label: "Things To Do In Miami", href: "/things-to-do-in-miami" },
  { label: "Things To Do In Tampa", href: "/things-to-do-in-tampa" },
  { label: "Things To Do In Key West", href: "/things-to-do-in-key-west" },
  { label: "Port Canaveral Activities", href: "/things-to-do-near-port-canaveral" },
  { label: "St. Augustine Things To Do", href: "/things-to-do-in-st-augustine" }
];

const categoryLinks = [
  { label: "Disney World Guide", href: "/disney-world-guide" },
  { label: "Universal Orlando Guide", href: "/universal-orlando-guide" },
  { label: "Disney vs Universal", href: "/disney-vs-universal" },
  { label: "Everglades Airboat Tours", href: "/everglades-airboat-tours" },
  { label: "Miami Boat Tours", href: "/miami-boat-tours" },
  { label: "Key West Sunset Cruises", href: "/key-west-sunset-cruises" },
  { label: "Free Things To Do", href: "/free-things-to-do-in-florida" }
];

const networkLinks = [
  { label: "Florida Flight Deals", href: "https://flightdealsflorida.org" },
  { label: "Florida Hotel Deals", href: "https://hoteldealsflorida.org" },
  { label: "Florida Cruise Deals", href: "https://cruisedealsflorida.org" },
  { label: "Florida Deals Hub", href: "https://floridadealshub.com" }
];

function trackNavigation(label: string, href: string) {
  const payload = {
    site: "localdealsflorida.org",
    source_site: "localdealsflorida.org",
    destination_site: href.startsWith("https://") ? href : "localdealsflorida.org",
    source: "local",
    cta_text: label,
    content_type: "footer_link",
    category: "navigation",
    label,
    href,
    page_path: window.location.pathname
  };
  const lowerHref = href.toLowerCase();

  window.gtag?.("event", "navigation_click", payload);
  window.dataLayer?.push({
    event: "navigation_click",
    ...payload
  });
  trackClarityEvent("navigation_click", payload);

  if (href.startsWith("https://")) {
    window.gtag?.("event", "network_site_click", payload);
    window.dataLayer?.push({
      event: "network_site_click",
      ...payload
    });
    trackClarityEvent("network_site_click", payload);
  } else if (lowerHref.includes("things-to-do") || lowerHref.includes("local-deals")) {
    window.gtag?.("event", "city_guide_click", payload);
  } else if (lowerHref.includes("florida-")) {
    window.gtag?.("event", "activity_guide_click", payload);
  }
}

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#d8e6e3] bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_2fr] lg:px-8">
        <div>
          <p className="text-xl font-black">Local Deals Florida</p>
          <p className="mt-3 max-w-md leading-7 text-[#52686b]">
            Florida attractions, tours, boat rides, museums, outdoor adventures, family activities, and useful things-to-do guides.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div>
            <h3 className="font-black">Florida Cities</h3>
            <div className="mt-3 grid gap-2 text-sm font-semibold text-[#52686b]">
              {cityLinks.map((link) => (
                <Link href={link.href} key={link.href} onClick={() => trackNavigation(link.label, link.href)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-black">Attraction Guides</h3>
            <div className="mt-3 grid gap-2 text-sm font-semibold text-[#52686b]">
              {categoryLinks.map((link) => (
                <Link href={link.href} key={link.href} onClick={() => trackNavigation(link.label, link.href)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-black">Florida Deals Network</h3>
            <div className="mt-3 grid gap-2 text-sm font-semibold text-[#52686b]">
              {networkLinks.map((link) => (
                <a href={link.href} key={link.href} onClick={() => trackNavigation(link.label, link.href)}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-black">Company</h3>
            <div className="mt-3 grid gap-2 text-sm font-semibold text-[#52686b]">
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/editorial-policy">Editorial Policy</Link>
              <Link href="/how-we-find-local-deals">How We Find Deals</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <a href="/sitemap.xml">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#d8e6e3] px-4 py-4 text-center text-xs font-semibold leading-5 text-[#6f8588] sm:px-6 lg:px-8">
        Some links may be sponsored or affiliate links. We may earn a commission if you book or buy through them, at no extra cost to you.
      </div>
    </footer>
  );
}
