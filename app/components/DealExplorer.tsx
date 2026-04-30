"use client";

import { ArrowRight, MapPin, RefreshCw, Search, SlidersHorizontal, Ticket } from "lucide-react";
import { useMemo, useState } from "react";
import deals from "../../data/deals.json";

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
  return (
    <article
      className="card-lift scroll-mt-28 overflow-hidden rounded-[26px] border border-[#d8e6e3] bg-white shadow-lg shadow-[#087f8c]/8"
      id={featured ? `featured-${deal.id}` : deal.id}
    >
      <div className={`relative overflow-hidden bg-[#dff6f8] ${featured ? "h-56" : "h-48"}`}>
        <img alt={deal.image_alt} className="h-full w-full object-cover" loading="lazy" src={deal.image} />
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
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#e7eeee] pt-4">
          <div>
            <p className="text-lg font-black text-[#163235]">{deal.price}</p>
            <p className="text-xs font-bold text-[#6f8588]">{deal.dates}</p>
          </div>
          <a
            className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-[#ffb000] px-4 text-sm font-black text-[#163235] transition hover:bg-[#ffc84d]"
            href={deal.affiliateReadyUrl}
            aria-label={`${featured ? "View featured local deal" : "View local deal"}: ${deal.title} in ${deal.city}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Ticket size={16} aria-hidden="true" />
            {deal.cta}
          </a>
        </div>
      </div>
    </article>
  );
}

export default function DealExplorer() {
  const [activeFilter, setActiveFilter] = useState("All Deals");
  const [query, setQuery] = useState("");
  const [shuffleSeed, setShuffleSeed] = useState(0);

  const allDeals = deals as Deal[];
  const featuredDeals = allDeals.filter((deal) => featuredIds.includes(deal.id));

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
            Filter real-feeling local finds across restaurants, events, attractions, nightlife, shopping, family activities, and free things to do.
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
                onClick={() => setActiveFilter(filter)}
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
            <h2 className="mt-2 text-3xl font-black text-[#163235]">Top local deals to check today</h2>
          </div>
          <a className="hidden items-center gap-2 text-sm font-black text-[#087f8c] sm:inline-flex" href="#feed">
            Main feed
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featuredDeals.map((deal) => (
            <DealCard deal={deal} featured key={deal.id} />
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
