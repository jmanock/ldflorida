"use client";

import Link from "next/link";

const cityLinks = [
  { label: "Orlando Local Deals", href: "/orlando-local-deals" },
  { label: "Miami Local Deals", href: "/miami-local-deals" },
  { label: "Tampa Local Deals", href: "/tampa-local-deals" },
  { label: "Fort Lauderdale Local Deals", href: "/fort-lauderdale-local-deals" },
  { label: "Jacksonville Local Deals", href: "/jacksonville-local-deals" },
  { label: "St. Augustine Local Deals", href: "/st-augustine-local-deals" },
  { label: "Daytona Beach Local Deals", href: "/daytona-beach-local-deals" }
];

const categoryLinks = [
  { label: "Florida Restaurant Deals", href: "/florida-restaurant-deals" },
  { label: "Florida Attraction Deals", href: "/florida-attraction-deals" },
  { label: "Florida Event Deals", href: "/florida-event-deals" },
  { label: "Florida Family Deals", href: "/florida-family-deals" },
  { label: "Florida Weekend Deals", href: "/florida-weekend-deals" },
  { label: "Florida Free Things To Do", href: "/florida-free-things-to-do" },
  { label: "Florida Date Night Deals", href: "/florida-date-night-deals" }
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

  if (href.startsWith("https://")) {
    window.gtag?.("event", "network_site_click", payload);
    window.dataLayer?.push({
      event: "network_site_click",
      ...payload
    });
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
            Local, useful, everyday Florida deals for restaurants, events, attractions, hidden gems, and things to do near you.
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
            <h3 className="font-black">Local Deal Categories</h3>
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
        Some links on this site may earn us a commission at no extra cost to you. This helps keep our deal alerts free.
      </div>
    </footer>
  );
}
