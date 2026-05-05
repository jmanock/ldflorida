"use client";

import { ArrowRight, MapPin, RefreshCw, Search, SlidersHorizontal, Ticket } from "lucide-react";
import { useMemo, useState } from "react";
import deals from "../../data/deals.json";
import trustRecords from "../../data/local-trust.json";
import { getDealCta, getDealSourceName, getOfferLabel, getWhyThisDeal } from "../../lib/deal-display";

type Deal = {
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

type TrustRecord = {
  dealId: string;
  placeName: string;
  neighborhood?: string;
  address?: string;
  rating?: number;
  reviewCount?: number;
  officialWebsite?: string;
  eventDate?: string;
  sourceName?: string;
  lastVerified?: string;
};

const filterOptions = [
  "All Deals",
  "Orlando",
  "Miami",
  "Tampa",
  "Jacksonville",
  "Fort Lauderdale",
  "Food & Drinks",
  "Events",
  "Attractions",
  "Family Activities",
  "Things To Do",
  "Local Experiences",
  "Weekend",
  "Free / Low-Cost",
  "Under $50"
];

const featuredIds = [
  "orlando-gatorland-visit-orlando-special",
  "miami-sandrell-rivers-theater-offers",
  "tampa-bay-citypass",
  "cummer-museum-free-admission"
];
const featuredLabels = ["Top Pick", "Family Favorite", "Weekend Pick", "Best Value"];

function badgeTone(badge: string) {
  if (badge === "Hot Deal") return "bg-[#fff0d1] text-[#8a5200]";
  if (badge === "Family") return "bg-[#e8f7db] text-[#406b16]";
  if (badge === "Free") return "bg-[#e4f4ff] text-[#0b5c87]";
  if (badge === "Weekend") return "bg-[#ffe7e3] text-[#a1372e]";
  if (badge === "Hidden Gem") return "bg-[#f0eadf] text-[#6a4b20]";
  return "bg-[#edf2f2] text-[#385154]";
}

function dealMatchesFilter(deal: Deal, activeFilter: string) {
  if (activeFilter === "All Deals") return true;
  if (deal.city === activeFilter) return true;
  if (deal.category === activeFilter) return true;
  if (deal.badge === activeFilter) return true;
  if (activeFilter === "Food & Drinks") return ["Food & Drinks", "Restaurants", "Nightlife"].includes(deal.category);
  if (activeFilter === "Family Activities") return deal.category === "Family Activities" || deal.badge === "Family";
  if (activeFilter === "Weekend") return deal.category === "Weekend Deals" || deal.badge === "Weekend" || deal.dates.toLowerCase().includes("weekend");
  if (activeFilter === "Free / Low-Cost") return deal.category === "Free / Low-Cost Events" || deal.badge === "Free";
  if (activeFilter === "Under $50") return deal.badge === "Under $50" || /\$([0-4]?\d)(?!\d)/.test(deal.price);
  return false;
}

function DealCard({ deal, featured = false }: { deal: Deal; featured?: boolean }) {
  const sourceName = getDealSourceName(deal);
  const offerLabel = getOfferLabel(deal);
  const ctaLabel = getDealCta(deal);
  const whyThisDeal = getWhyThisDeal(deal);

  function trackDealClick() {
    const payload = {
      event: "deal_click",
      site: "localdealsflorida.org",
      source: "local",
      page: window.location.pathname,
      city: deal.city,
      category: deal.category,
      deal_title: deal.title,
      source_name: sourceName,
      outbound_url: deal.affiliateReadyUrl,
      page_path: window.location.pathname
    };

    window.dispatchEvent(new CustomEvent("deal_click", { detail: payload }));
    window.dataLayer?.push(payload);
    window.gtag?.("event", "deal_click", {
      site: "localdealsflorida.org",
      source: "local",
      city: deal.city,
      category: deal.category,
      deal_title: deal.title,
      source_name: sourceName,
      outbound_url: deal.affiliateReadyUrl,
      page_path: window.location.pathname
    });

    if (deal.category.includes("Event") || deal.cta.toLowerCase().includes("event")) {
      window.gtag?.("event", "event_click", {
        site: "localdealsflorida.org",
        source: "local",
        city: deal.city,
        category: deal.category,
        deal_title: deal.title,
        source_name: sourceName,
        outbound_url: deal.affiliateReadyUrl,
        page_path: window.location.pathname
      });
    }
  }

  const hasTrustData = deal.placeName || deal.neighborhood || deal.eventDate || deal.rating;

  return (
    <article
      className="card-lift scroll-mt-28 overflow-hidden rounded-[26px] border border-[#d8e6e3] bg-white shadow-lg shadow-[#087f8c]/8"
      id={featured ? `featured-${deal.id}` : deal.id}
    >
      <div className={`relative overflow-hidden bg-[#dff6f8] ${featured ? "h-56" : "h-48"}`}>
        <img alt={deal.image_alt} className="h-full w-full object-cover" decoding="async" loading="lazy" src={deal.image} />
        <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-black ${badgeTone(deal.badge)}`}>
          {deal.badge}
        </span>
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
        <p className="mt-3 rounded-2xl bg-[#fff8e8] px-3 py-2 text-sm font-black text-[#8a5200]">Why this deal: {whyThisDeal}</p>
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
        <div className="mt-5 grid gap-4 border-t border-[#e7eeee] pt-4">
          <div className="grid gap-2">
            <p className="text-[11px] font-black uppercase tracking-[0.14em] text-[#087f8c]">Offer</p>
            <p className="text-lg font-black leading-6 text-[#163235]">{offerLabel}</p>
            <p className="text-xs font-bold text-[#6f8588]">Valid: {deal.dates}</p>
            <p className="text-xs font-bold text-[#6f8588]">Source: {sourceName}</p>
            <p className="text-xs font-bold text-[#6f8588]">Last checked: {deal.lastVerified ?? "May 2026"}</p>
          </div>
          <a
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#ffb000] px-4 text-sm font-black text-[#163235] transition hover:bg-[#ffc84d]"
            href={deal.affiliateReadyUrl}
            aria-label={`${featured ? "View featured local deal" : "View local deal"}: ${deal.title} in ${deal.city}`}
            onClick={trackDealClick}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Ticket size={16} aria-hidden="true" />
            {ctaLabel}
          </a>
        </div>
        <p className="mt-3 text-[11px] font-bold leading-5 text-[#6f8588]">Details may change. Confirm current offer with the official source.</p>
      </div>
    </article>
  );
}

export default function DealExplorer() {
  const [activeFilter, setActiveFilter] = useState("All Deals");
  const [query, setQuery] = useState("");
  const [shuffleSeed, setShuffleSeed] = useState(0);

  const trustByDealId = new Map((trustRecords as TrustRecord[]).map((record) => [record.dealId, record]));
  const allDeals = (deals as Deal[]).map((deal) => ({ ...deal, ...trustByDealId.get(deal.id) }));
  const featuredDeals = allDeals.filter((deal) => featuredIds.includes(deal.id));

  function handleFilterClick(filter: string) {
    setActiveFilter(filter);
    window.gtag?.("event", "filter_click", {
      site: "localdealsflorida.org",
      filter
    });
  }

  const filteredDeals = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const source = [...allDeals];

    if (shuffleSeed > 0) {
      source.sort((a, b) => {
        const left = `${a.id}-${shuffleSeed}`;
        const right = `${b.id}-${shuffleSeed}`;
        return left.localeCompare(right);
      });
    }

    return source.filter((deal) => {
      const searchable = `${deal.title} ${deal.city} ${deal.category} ${deal.description} ${deal.badge} ${deal.price}`.toLowerCase();
      return dealMatchesFilter(deal, activeFilter) && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [activeFilter, allDeals, query, shuffleSeed]);

  return (
    <section id="deals" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Local deals near you</p>
          <h2 className="mt-2 text-3xl font-black text-[#163235] sm:text-4xl">Find something useful today</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[#52686b]">
            Filter current local finds across restaurants, events, attractions, nightlife, shopping, family activities, and free things to do.
          </p>
          <p className="mt-3 text-sm font-black uppercase tracking-[0.14em] text-[#087f8c]">
            Updated regularly · Deals may change · Check current details
          </p>
        </div>
        <button
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#163235] px-5 text-sm font-bold text-white shadow-lg shadow-[#163235]/15 transition hover:bg-[#07515a]"
          onClick={() => setShuffleSeed((seed) => seed + 1)}
          type="button"
        >
          <RefreshCw size={17} aria-hidden="true" />
          Refresh Deals
        </button>
      </div>

      <div className="mt-7 rounded-[28px] border border-[#d8e6e3] bg-white p-3 shadow-xl shadow-[#087f8c]/8">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="relative min-w-0 flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#6f8588]" size={18} />
            <input
              aria-label="Search local Florida deals"
              className="h-12 w-full rounded-full border border-[#d8e6e3] bg-[#f8fbf7] pl-11 pr-4 text-sm font-semibold text-[#163235] outline-none transition focus:border-[#087f8c] focus:bg-white"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search brunch, events, family, free..."
              value={query}
            />
          </div>
          <div className="flex items-center gap-2 rounded-full bg-[#f1f7f6] px-4 py-3 text-sm font-bold text-[#52686b]">
            <SlidersHorizontal size={17} aria-hidden="true" />
            {filteredDeals.length} local deals
          </div>
        </div>

        <div className="deal-scroll mt-4 flex gap-2 overflow-x-auto pb-2">
          {filterOptions.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                className={`h-10 shrink-0 rounded-full px-4 text-sm font-bold transition ${
                  isActive
                    ? "bg-[#087f8c] text-white shadow-md shadow-[#087f8c]/20"
                    : "bg-[#eef6f5] text-[#385154] hover:bg-[#dff6f8]"
                }`}
                key={filter}
                onClick={() => handleFilterClick(filter)}
                type="button"
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Featured</p>
            <h2 className="mt-2 text-3xl font-black text-[#163235]">Top Local Deals Right Now</h2>
          </div>
          <a className="hidden items-center gap-2 text-sm font-black text-[#087f8c] sm:inline-flex" href="#feed">
            Main feed
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featuredDeals.map((deal, index) => (
            <div className="relative" key={deal.id}>
              <span className="absolute left-4 top-4 z-10 rounded-full bg-[#163235] px-3 py-1 text-xs font-black text-white shadow-lg shadow-[#163235]/15">
                {featuredLabels[index] ?? "Top Pick"}
              </span>
              <DealCard deal={deal} featured />
            </div>
          ))}
        </div>
      </div>

      <div id="feed" className="mt-12">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Main feed</p>
            <h2 className="mt-2 text-3xl font-black text-[#163235]">Fresh local deal feed</h2>
          </div>
          <p className="max-w-lg text-sm font-semibold leading-6 text-[#52686b]">
            Built for repeat browsing: quick cards, clear savings, useful dates, and neighborhoods worth checking.
          </p>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDeals.map((deal) => (
            <DealCard deal={deal} key={deal.id} />
          ))}
        </div>
      </div>

      {filteredDeals.length === 0 ? (
        <div className="mt-7 rounded-[22px] border border-dashed border-[#b8cfcc] bg-white p-8 text-center">
          <h3 className="text-xl font-black text-[#163235]">No deals found</h3>
          <p className="mt-2 text-[#52686b]">Try another city, category, or search term.</p>
        </div>
      ) : null}
    </section>
  );
}
