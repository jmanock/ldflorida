import Link from "next/link";
import { Bell, Compass, Mail, PiggyBank, Sparkles, TrendingUp } from "lucide-react";
import DealExplorer from "./components/DealExplorer";

const sisterSites = [
  { label: "Cruise Deals", href: "https://floridacruisedeals.com" },
  { label: "Flight Deals", href: "https://floridaflightdeals.com" },
  { label: "Local Deals", href: "/" },
  { label: "Hotels", href: "#hotels" }
];

const stats = [
  ["25+", "sample deals"],
  ["5", "major markets"],
  ["Daily", "deal alerts"]
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fbf7] text-[#163235]">
      <header className="sticky top-0 z-40 border-b border-white/60 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Top navigation">
          <a className="flex items-center gap-3" href="#" aria-label="Local Florida Deals home">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#087f8c] text-lg font-black text-white shadow-md shadow-[#087f8c]/25">
              LF
            </span>
            <span className="leading-tight">
              <span className="block text-base font-black">Local Florida Deals</span>
              <span className="block text-xs font-bold text-[#6f8588]">Florida savings network</span>
            </span>
          </a>
          <div className="hidden items-center gap-1 rounded-full bg-[#eef6f5] p-1 md:flex">
            {sisterSites.map((site) => (
              <a
                className={`rounded-full px-4 py-2 text-sm font-bold transition hover:bg-white hover:text-[#087f8c] ${
                  site.label === "Local Deals" ? "bg-white text-[#087f8c] shadow-sm" : "text-[#52686b]"
                }`}
                href={site.href}
                key={site.label}
              >
                {site.label}
                {site.label === "Hotels" ? <span className="ml-1 text-[10px] uppercase text-[#ff6b5f]">soon</span> : null}
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
      </header>

      <section className="relative overflow-hidden bg-[#dff6f8] lg:min-h-[calc(100vh-4rem)]">
        <div className="absolute inset-0">
          <img
            alt=""
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1597466599360-3b9775841aec?auto=format&fit=crop&w=1800&q=85"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,251,247,0.96)_0%,rgba(248,251,247,0.84)_42%,rgba(248,251,247,0.22)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(0deg,#f8fbf7_0%,rgba(248,251,247,0)_100%)]" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center px-4 py-11 sm:px-6 sm:py-14 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[1.02fr_0.78fr] lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/85 px-4 py-2 text-sm font-black text-[#087f8c] shadow-lg shadow-[#087f8c]/10">
              <Sparkles size={16} aria-hidden="true" />
              New deals across Orlando, Miami, Tampa Bay, Fort Lauderdale, and Jacksonville
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[0.98] text-[#163235] sm:mt-7 sm:text-6xl lg:text-7xl">
              Discover the Best Deals Across Florida
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-[#385154] sm:mt-6 sm:text-xl">
              Daily savings on attractions, hotels, restaurants, events, and family fun.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <a
                className="inline-flex h-[52px] items-center justify-center rounded-full bg-[#087f8c] px-7 text-base font-black text-white shadow-xl shadow-[#087f8c]/25 transition hover:bg-[#07515a]"
                href="#deals"
                style={{ color: "#ffffff" }}
              >
                Explore Deals
              </a>
              <a
                className="inline-flex h-[52px] items-center justify-center rounded-full border border-[#c7dad7] bg-white/90 px-7 text-base font-black text-[#163235] shadow-xl shadow-[#087f8c]/10 transition hover:border-[#087f8c] hover:text-[#087f8c]"
                href="#alerts"
              >
                Get Alerts
              </a>
            </div>
            <div className="mt-8 hidden max-w-xl grid-cols-3 gap-2 sm:mt-10 sm:grid sm:gap-3">
              {stats.map(([value, label]) => (
                <div className="rounded-2xl border border-white/80 bg-white/85 p-3 shadow-lg shadow-[#087f8c]/8 sm:p-4" key={label}>
                  <p className="text-xl font-black text-[#163235] sm:text-2xl">{value}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#6f8588] sm:text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block" aria-hidden="true">
            <div className="ml-auto max-w-sm rounded-[30px] border border-white/70 bg-white/88 p-4 shadow-2xl shadow-[#163235]/15 backdrop-blur">
              <div className="overflow-hidden rounded-[22px]">
                <img
                  alt=""
                  className="h-56 w-full object-cover"
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85"
                />
              </div>
              <div className="p-3">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ff6b5f]">Weekend pick</p>
                <h2 className="mt-2 text-2xl font-black">St. Pete Beach midweek escape</h2>
                <p className="mt-2 text-sm leading-6 text-[#52686b]">Save 25% on select stays, parking included.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DealExplorer />

      <section id="alerts" className="bg-[#163235] px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffb000]">Deal alerts</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Get Florida Deals Delivered</h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-white/76">
              A quick inbox briefing for fresh discounts, weekend ideas, resident specials, and family-friendly savings.
            </p>
          </div>
          <form className="flex flex-col gap-3 rounded-[24px] bg-white p-3 shadow-2xl shadow-black/20 sm:flex-row" action="#" aria-label="Email signup form">
            <label className="sr-only" htmlFor="email">
              Email address
            </label>
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#6f8588]" size={18} />
              <input
                className="h-[52px] w-full rounded-full border border-[#d8e6e3] bg-[#f8fbf7] pl-11 pr-4 font-semibold text-[#163235] outline-none focus:border-[#087f8c]"
                id="email"
                placeholder="you@example.com"
                type="email"
              />
            </div>
            <button className="h-[52px] rounded-full bg-[#ffb000] px-7 font-black text-[#163235] transition hover:bg-[#ffc84d]" type="submit">
              Get Alerts
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: PiggyBank,
              title: "Save Money",
              text: "Find practical discounts for trips, meals, tickets, and everyday Florida fun."
            },
            {
              icon: Compass,
              title: "Discover More",
              text: "Turn open weekends into beach days, museum nights, food finds, and family outings."
            },
            {
              icon: TrendingUp,
              title: "Updated Often",
              text: "Fresh opportunities are organized by city, category, badge, and budget-friendly picks."
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

      <footer className="border-t border-[#d8e6e3] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_1.4fr] lg:px-8">
          <div>
            <p className="text-xl font-black">Local Florida Deals</p>
            <p className="mt-3 max-w-md leading-7 text-[#52686b]">
              A Florida savings hub for local fun, travel ideas, and everyday deals across the state.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            <div>
              <h3 className="font-black">Company</h3>
              <div className="mt-3 grid gap-2 text-sm font-semibold text-[#52686b]">
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/privacy">Privacy</Link>
                <Link href="/terms">Terms</Link>
              </div>
            </div>
            <div>
              <h3 className="font-black">Markets</h3>
              <div className="mt-3 grid gap-2 text-sm font-semibold text-[#52686b]">
                <a href="#deals">Orlando</a>
                <a href="#deals">Miami</a>
                <a href="#deals">Tampa Bay</a>
                <a href="#deals">Jacksonville</a>
              </div>
            </div>
            <div>
              <h3 className="font-black">Sister Sites</h3>
              <div className="mt-3 grid gap-2 text-sm font-semibold text-[#52686b]">
                <a href="https://floridacruisedeals.com">Florida Cruise Deals</a>
                <a href="https://floridaflightdeals.com">Florida Flight Deals</a>
                <a href="#hotels">Florida Hotel Deals soon</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
