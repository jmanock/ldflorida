import Link from "next/link";
import { ArrowRight, CheckCircle2, Compass, Hotel, MapPin, PiggyBank, Plane, Sailboat, Sparkles, TrendingUp } from "lucide-react";
import DealExplorer from "./components/DealExplorer";
import NewsletterForm from "./components/NewsletterForm";
import SisterSitesSection from "./components/SisterSitesSection";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import deals from "../data/deals.json";

const crossPromos = [
  {
    title: "Need flights for a weekend trip?",
    description: "Find Florida flight deals before planning your local getaway.",
    href: "https://flightdealsflorida.org",
    cta: "Browse Florida flight deals",
    icon: Plane
  },
  {
    title: "Staying overnight?",
    description: "Pair attractions and restaurants with nearby Florida hotel deals.",
    href: "https://hoteldealsflorida.org",
    cta: "Browse Florida hotel deals",
    icon: Hotel
  },
  {
    title: "Cruising from Florida?",
    description: "Check cruise sailings, then plan local deals before or after the port.",
    href: "https://cruisedealsflorida.org",
    cta: "Browse Florida cruise deals",
    icon: Sailboat
  }
];

const stats = [
  ["25+", "local deals"],
  ["5", "major markets"],
  ["Free", "deal alerts"]
];

const popularSearches = [
  { label: "Orlando Local Deals", href: "/orlando-local-deals" },
  { label: "Miami Weekend Deals", href: "/miami-weekend-deals" },
  { label: "Florida Restaurant Deals", href: "/florida-restaurant-deals" },
  { label: "Florida Attraction Deals", href: "/florida-attraction-deals" },
  { label: "Florida Family Deals", href: "/florida-family-deals" },
  { label: "Free Things To Do In Florida", href: "/florida-free-things-to-do" }
];

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function Home() {
  const homepageItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Local Deals Florida featured deal cards",
    itemListElement: (deals as Array<{ title: string; affiliateReadyUrl: string }>)
      .slice(0, 12)
      .map((deal, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: deal.title,
        url: deal.affiliateReadyUrl
      }))
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fbf7] text-[#163235]">
      <JsonLd data={homepageItemList} />
      <SiteHeader />

      <section className="relative overflow-hidden bg-[#f7fbf3] lg:min-h-[calc(100vh-4rem)]">
        <div className="absolute inset-0">
          <img
            alt="Florida outdoor restaurant patio with palm trees and warm evening light"
            className="h-full w-full object-cover"
            decoding="async"
            fetchPriority="high"
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=85"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,251,247,0.97)_0%,rgba(248,251,247,0.88)_45%,rgba(248,251,247,0.35)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(0deg,#f8fbf7_0%,rgba(248,251,247,0)_100%)]" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center px-4 py-11 sm:px-6 sm:py-14 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[1.02fr_0.78fr] lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/85 px-4 py-2 text-sm font-black text-[#087f8c] shadow-lg shadow-[#087f8c]/10">
              <Sparkles size={16} aria-hidden="true" />
              Local finds, hidden gems, and everyday value
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[0.98] text-[#163235] sm:mt-7 sm:text-6xl lg:text-7xl">
              Best Local Deals Across Florida
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-[#385154] sm:mt-6 sm:text-xl">
              Find restaurant specials, things to do, weekend events, attractions, and hidden local deals near you.
            </p>
            <p className="mt-4 text-sm font-black uppercase tracking-[0.14em] text-[#087f8c]">
              Updated: May 2026 · New deals added regularly · Check back for weekend updates
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <a
                className="inline-flex h-[52px] items-center justify-center rounded-full bg-[#087f8c] px-7 text-base font-black text-white shadow-xl shadow-[#087f8c]/25 transition hover:bg-[#07515a]"
                href="#deals"
                style={{ color: "#ffffff" }}
              >
                View Local Deals
              </a>
              <a
                className="inline-flex h-[52px] items-center justify-center rounded-full border border-[#c7dad7] bg-white/90 px-7 text-base font-black text-[#163235] shadow-xl shadow-[#087f8c]/10 transition hover:border-[#087f8c] hover:text-[#087f8c]"
                href="#alerts"
              >
                Get Alerts
              </a>
            </div>
            <div className="mt-8 hidden max-w-xl grid-cols-3 gap-2 sm:mt-10 sm:grid sm:gap-3">
              {["Updated Often", "Florida Focused", "Free Deal Alerts"].map((signal) => (
                <div className="rounded-2xl border border-white/80 bg-white/85 p-3 shadow-lg shadow-[#087f8c]/8 sm:p-4" key={signal}>
                  <CheckCircle2 className="h-4 w-4 text-[#087f8c]" />
                  <p className="mt-2 text-xs font-black leading-4 text-[#163235]">{signal}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 hidden max-w-xl grid-cols-3 gap-2 sm:grid sm:gap-3">
              {stats.map(([value, label]) => (
                <div className="rounded-2xl border border-white/80 bg-white/85 p-3 shadow-lg shadow-[#087f8c]/8 sm:p-4" key={label}>
                  <p className="text-xl font-black text-[#163235] sm:text-2xl">{value}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#6f8588] sm:text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <a
              aria-label="View Gatorland Visit Orlando Special"
              className="card-lift group grid cursor-pointer grid-cols-[104px_1fr] gap-3 rounded-[26px] border border-white/70 bg-white/88 p-3 shadow-2xl shadow-[#163235]/15 backdrop-blur sm:grid-cols-[132px_1fr] lg:ml-auto lg:block lg:max-w-sm lg:rounded-[30px] lg:p-4"
              href="https://www.gatorland.com/specials/visit-orlando/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="overflow-hidden rounded-[20px] lg:rounded-[22px]">
                <img
                  alt="Alligator resting near water at a Florida wildlife attraction"
                  className="h-full min-h-[142px] w-full object-cover transition duration-300 group-hover:scale-[1.03] sm:min-h-[154px] lg:h-56 lg:min-h-0"
                  decoding="async"
                  src="https://images.unsplash.com/photo-1614065613125-17553fbc59f6?auto=format&fit=crop&w=900&q=85"
                />
              </div>
              <div className="py-1 pr-1 lg:p-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#fff0d1] px-3 py-1 text-xs font-black text-[#8a5200]">Save 20%</span>
                  <span className="hidden rounded-full bg-[#ffe7e3] px-3 py-1 text-xs font-black text-[#a1372e] sm:inline-flex">Official offer</span>
                </div>
                <h2 className="mt-2 text-lg font-black leading-tight sm:text-xl lg:text-2xl">Gatorland Visit Orlando Special</h2>
                <div className="mt-3 flex items-center gap-2 text-sm font-black text-[#087f8c]">
                  <MapPin size={15} aria-hidden="true" />
                  Orlando
                </div>
                <p className="mt-2 text-xs font-bold leading-5 text-[#52686b] sm:text-sm lg:leading-6">Valid through Dec. 31, 2026. Confirm details before purchase.</p>
                <span className="mt-3 inline-flex h-10 items-center justify-center rounded-full bg-[#ffb000] px-4 text-sm font-black text-[#163235] transition group-hover:bg-[#ffc84d] lg:h-11 lg:px-5">
                  See Offer
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <DealExplorer />

      <section id="alerts" className="bg-[#163235] px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffb000]">Deal alerts</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Get Local Florida Deals Delivered</h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-white/76">
              Join free alerts for restaurant specials, events, attractions, and local deals near you. Free alerts. No spam. Deals change often.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: PiggyBank,
              title: "Everyday Value",
              text: "Find practical discounts for meals, tickets, neighborhood events, and things to do nearby."
            },
            {
              icon: Compass,
              title: "Hidden Gems",
              text: "Turn open weekends into brunch plans, live music, beach mornings, markets, and local finds."
            },
            {
              icon: TrendingUp,
              title: "Updated Often",
              text: "Fresh opportunities are organized by city, category, date, savings, and budget-friendly picks."
            }
          ].map((item) => (
            <div className="rounded-[24px] border border-[#d8e6e3] bg-white p-7 shadow-lg shadow-[#087f8c]/8" key={item.title}>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#dff6f8] text-[#087f8c]">
                <item.icon size={24} aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-2xl font-black">{item.title}</h2>
              <p className="mt-3 leading-7 text-[#52686b]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-[#d8e6e3] bg-white p-6 shadow-xl shadow-[#087f8c]/8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Popular Local Deals</p>
          <h2 className="mt-2 text-3xl font-black text-[#163235]">Find deals by city, category, or plan</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {popularSearches.map((search) => (
              <Link
                className="rounded-full bg-[#eef6f5] px-4 py-2 text-sm font-black text-[#385154] transition hover:bg-[#dff6f8] hover:text-[#087f8c]"
                href={search.href}
                key={search.href}
              >
                {search.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {crossPromos.map((promo) => {
            const Icon = promo.icon;

            return (
              <a
                className="card-lift rounded-[24px] border border-[#d8e6e3] bg-white p-6 shadow-lg shadow-[#087f8c]/8"
                href={promo.href}
                key={promo.title}
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#dff6f8] text-[#087f8c]">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-xl font-black text-[#163235]">{promo.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#52686b]">{promo.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#087f8c]">
                  {promo.cta}
                  <ArrowRight size={16} aria-hidden="true" />
                </span>
              </a>
            );
          })}
        </div>
      </section>

      <SisterSitesSection />
      <SiteFooter />
    </main>
  );
}
