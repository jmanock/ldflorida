import Link from "next/link";
import { ArrowRight, Bell, Building2, CheckCircle2, Compass, Hotel, MapPin, PiggyBank, Plane, Sailboat, Sparkles, TrendingUp } from "lucide-react";
import DealExplorer from "./components/DealExplorer";
import NewsletterForm from "./components/NewsletterForm";

const navItems = [
  { label: "Flights", href: "https://flightdealsflorida.org" },
  { label: "Hotels", href: "https://hoteldealsflorida.org" },
  { label: "Cruises", href: "https://cruisedealsflorida.org" },
  { label: "Local Deals", href: "/", active: true },
  { label: "Florida Deals Hub", href: "https://floridadealshub.com" }
];

const sisterSites = [
  {
    title: "Flight Deals",
    href: "https://flightdealsflorida.org",
    description: "Cheap airfare alerts for Florida airports, weekend routes, and warm-weather trips.",
    icon: Plane
  },
  {
    title: "Hotel Deals",
    href: "https://hoteldealsflorida.org",
    description: "Resorts, beach stays, family hotels, and Florida staycation rates.",
    icon: Hotel
  },
  {
    title: "Cruise Deals",
    href: "https://cruisedealsflorida.org",
    description: "Sailings from Miami, Port Canaveral, Tampa, Fort Lauderdale, and Jacksonville.",
    icon: Sailboat
  },
  {
    title: "Florida Deals Hub",
    href: "https://floridadealshub.com",
    description: "The parent network for Florida flights, hotels, cruises, and local savings.",
    icon: Building2
  }
];

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

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fbf7] text-[#163235]">
      <header className="sticky top-0 z-40 border-b border-white/60 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Top navigation">
          <a className="flex items-center gap-3" href="/" aria-label="Local Deals Florida home">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#087f8c] text-lg font-black text-white shadow-md shadow-[#087f8c]/25">
              LD
            </span>
            <span className="leading-tight">
              <span className="block text-base font-black">Local Deals Florida</span>
              <span className="block text-xs font-bold text-[#6f8588]">Part of Florida Deals Hub</span>
            </span>
          </a>
          <div className="hidden items-center gap-1 rounded-full bg-[#eef6f5] p-1 md:flex">
            {navItems.map((site) => (
              <a
                className={`rounded-full px-4 py-2 text-sm font-bold transition hover:bg-white hover:text-[#087f8c] ${
                  site.active ? "bg-white text-[#087f8c] shadow-sm" : "text-[#52686b]"
                }`}
                href={site.href}
                key={site.label}
                aria-current={site.active ? "page" : undefined}
              >
                {site.label}
              </a>
            ))}
          </div>
          <a
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#163235] px-3 text-sm font-bold text-white shadow-md shadow-[#163235]/15 transition hover:bg-[#07515a] sm:px-4"
            href="#alerts"
            aria-label="Get deal alerts"
            style={{ color: "#ffffff" }}
          >
            <Bell size={16} aria-hidden="true" />
            <span>Alerts</span>
          </a>
        </nav>
        <nav className="deal-scroll flex gap-2 overflow-x-auto border-t border-[#d8e6e3] px-4 py-2 text-xs font-black text-[#52686b] sm:px-6 md:hidden" aria-label="Mobile navigation">
          {navItems.map((site) => (
            <a
              aria-current={site.active ? "page" : undefined}
              className={`whitespace-nowrap rounded-full border px-3 py-2 ${
                site.active ? "border-[#087f8c] bg-[#087f8c] text-white" : "border-[#d8e6e3] bg-white"
              }`}
              href={site.href}
              key={site.label}
            >
              {site.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="relative overflow-hidden bg-[#f7fbf3] lg:min-h-[calc(100vh-4rem)]">
        <div className="absolute inset-0">
          <img
            alt="Florida outdoor restaurant patio with palm trees and warm evening light"
            className="h-full w-full object-cover"
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
              Join free alerts for restaurant specials, events, attractions, and local deals near you.
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
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Popular Local Deal Searches</p>
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

      <section className="border-y border-[#d8e6e3] bg-[#eef6f5]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Explore More Florida Deals</p>
            <h2 className="mt-3 text-3xl font-black text-[#163235] sm:text-4xl">
              One trusted network for Florida travel, stays, cruises, and local savings.
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {sisterSites.map((site) => {
              const Icon = site.icon;

              return (
                <a
                  className="card-lift rounded-[24px] border border-[#d8e6e3] bg-white p-6 shadow-lg shadow-[#087f8c]/8"
                  href={site.href}
                  key={site.title}
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#dff6f8] text-[#087f8c]">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-black text-[#163235]">{site.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#52686b]">{site.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#087f8c]">
                    Explore
                    <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

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
                <a href="https://flightdealsflorida.org">Flight Deals</a>
                <a href="https://hoteldealsflorida.org">Hotel Deals</a>
                <a href="https://cruisedealsflorida.org">Cruise Deals</a>
                <a href="https://localdealsflorida.org">Local Deals</a>
                <a href="https://floridadealshub.com">Florida Deals Hub</a>
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
              <h3 className="font-black">Markets</h3>
              <div className="mt-3 grid gap-2 text-sm font-semibold text-[#52686b]">
                <a href="#deals">Orlando</a>
                <a href="#deals">Miami</a>
                <a href="#deals">Tampa</a>
                <a href="#deals">Jacksonville</a>
                <a href="#deals">Fort Lauderdale</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
