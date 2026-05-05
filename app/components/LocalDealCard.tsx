"use client";

import { BedDouble, MapPin, Ticket } from "lucide-react";
import { getExpediaDestinationForCity, getExpediaHotelLink } from "../../lib/affiliateLinks";

export type LocalDeal = {
  id: string;
  title: string;
  city: string;
  category: string;
  price: string;
  description: string;
  dates: string;
  badge: string;
  affiliateReadyUrl: string;
  cta: string;
  image: string;
  image_alt: string;
  placeName?: string;
  neighborhood?: string;
  address?: string;
  rating?: number;
  reviewCount?: number;
  officialWebsite?: string;
  eventDate?: string;
  sourceName?: string;
  lastVerified?: string;
};

function badgeTone(badge: string) {
  if (badge === "Current Offer") return "bg-[#fff0d1] text-[#8a5200]";
  if (badge === "Family") return "bg-[#e8f7db] text-[#406b16]";
  if (badge === "Free") return "bg-[#e4f4ff] text-[#0b5c87]";
  if (badge === "Weekend") return "bg-[#ffe7e3] text-[#a1372e]";
  if (badge === "Date Night") return "bg-[#ffe7e3] text-[#a1372e]";
  return "bg-[#edf2f2] text-[#385154]";
}

export default function LocalDealCard({ deal }: { deal: LocalDeal }) {
  function trackDealClick() {
    const payload = {
      event: "deal_click",
      site: "localdealsflorida.org",
      source: "local",
      page: typeof window === "undefined" ? "" : window.location.pathname,
      city: deal.city,
      category: deal.category,
      outbound_url: deal.affiliateReadyUrl,
      page_path: typeof window === "undefined" ? "" : window.location.pathname
    };

    window.dispatchEvent(new CustomEvent("deal_click", { detail: payload }));

    window.dataLayer?.push(payload);
    window.gtag?.("event", "deal_click", {
      site: "localdealsflorida.org",
      source: "local",
      city: deal.city,
      category: deal.category,
      outbound_url: deal.affiliateReadyUrl,
      page_path: window.location.pathname
    });

    if (deal.category.includes("Event") || deal.cta.toLowerCase().includes("event")) {
      window.gtag?.("event", "event_click", {
        site: "localdealsflorida.org",
        source: "local",
        city: deal.city,
        category: deal.category,
        outbound_url: deal.affiliateReadyUrl,
        page_path: window.location.pathname
      });
    }
  }

  const hasTrustData = deal.placeName || deal.neighborhood || deal.eventDate || deal.rating;
  const expediaDestination = getExpediaDestinationForCity(deal.city);
  const expediaUrl = expediaDestination ? getExpediaHotelLink(expediaDestination) : null;
  const hotelCta =
    deal.category.includes("Event") || deal.cta.toLowerCase().includes("event")
      ? "Visiting for the event? Book a hotel nearby"
      : deal.category.includes("Attraction")
        ? "Find hotels near this attraction"
        : deal.category.includes("Food") || deal.category.includes("Nightlife") || deal.badge === "Date Night"
          ? "Make it a night out - find nearby hotels"
          : "Compare nearby hotels";

  function trackHotelClick() {
    if (!expediaDestination || !expediaUrl) return;

    window.gtag?.("event", "hotel_booking_click", {
      site: "localdealsflorida.org",
      source: "local",
      provider: "expedia",
      city: expediaDestination,
      category: deal.category,
      page_path: window.location.pathname,
      outbound_url: expediaUrl
    });
  }

  return (
    <article className="card-lift overflow-hidden rounded-[26px] border border-[#d8e6e3] bg-white shadow-lg shadow-[#087f8c]/8">
      <div className="relative h-48 overflow-hidden bg-[#dff6f8]">
        <img alt={deal.image_alt} className="h-full w-full object-cover" decoding="async" loading="lazy" src={deal.image} />
        <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-black ${badgeTone(deal.badge)}`}>{deal.badge}</span>
      </div>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#087f8c]">
          <MapPin size={14} aria-hidden="true" />
          <span>{deal.city}</span>
          <span className="h-1 w-1 rounded-full bg-[#ffb000]" />
          <span>{deal.category}</span>
        </div>
        <h3 className="mt-3 text-xl font-black leading-tight text-[#163235]">{deal.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[#52686b]">{deal.description}</p>
        {hasTrustData ? (
          <div className="mt-4 rounded-2xl bg-[#f8fbf7] p-3 text-xs font-bold leading-5 text-[#52686b]">
            {deal.placeName ? <p className="text-[#163235]">{deal.placeName}</p> : null}
            {deal.neighborhood ? <p>{deal.neighborhood}</p> : null}
            {deal.eventDate ? <p>{deal.eventDate}</p> : null}
            {deal.rating ? (
              <p>
                {deal.rating.toFixed(1)} rating{deal.reviewCount ? ` (${deal.reviewCount.toLocaleString()} reviews)` : ""}
              </p>
            ) : null}
            {deal.lastVerified ? <p>Last checked {deal.lastVerified}</p> : null}
          </div>
        ) : null}
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#e7eeee] pt-4">
          <div>
            <p className="text-lg font-black text-[#163235]">{deal.price}</p>
            <p className="text-xs font-bold text-[#6f8588]">{deal.dates}</p>
          </div>
          <a
            className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-[#ffb000] px-4 text-sm font-black text-[#163235] transition hover:bg-[#ffc84d]"
            href={deal.affiliateReadyUrl}
            onClick={trackDealClick}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Ticket size={16} aria-hidden="true" />
            {hasTrustData ? "Check Current Details" : deal.cta}
          </a>
        </div>
        <p className="mt-3 text-[11px] font-bold leading-5 text-[#6f8588]">Details may change. Check current details with the source before you go.</p>
        {expediaUrl ? (
          <a
            className="mt-3 inline-flex items-center gap-2 text-xs font-black text-[#087f8c] transition hover:text-[#07515a]"
            href={expediaUrl}
            onClick={trackHotelClick}
            rel="noopener noreferrer"
            target="_blank"
          >
            <BedDouble size={14} aria-hidden="true" />
            {hotelCta}
          </a>
        ) : null}
      </div>
    </article>
  );
}
