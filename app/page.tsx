import Link from "next/link";
import { ArrowRight, CheckCircle2, Compass, Hotel, MapPin, PiggyBank, Plane, Sailboat, Sparkles, TrendingUp } from "lucide-react";
import DealExplorer from "./components/DealExplorer";
import FallbackImage from "./components/FallbackImage";
import FloridaGetawayBlock from "./components/FloridaGetawayBlock";
import NewsletterForm from "./components/NewsletterForm";
import SisterSitesSection from "./components/SisterSitesSection";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import deals from "../data/deals.json";
import weekendContent from "../data/weekend-content.json";

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
  ["40+", "local finds"],
  ["10", "Florida markets"],
  ["Free", "deal alerts"]
];

const popularSearches = [
  { label: "Orlando Local Deals", href: "/orlando-local-deals" },
  { label: "Clearwater Local Deals", href: "/clearwater-local-deals" },
  { label: "Key West Local Deals", href: "/key-west-local-deals" },
  { label: "Miami Weekend Deals", href: "/miami-weekend-deals" },
  { label: "Florida Restaurant Deals", href: "/florida-restaurant-deals" },
  { label: "Florida Attraction Deals", href: "/florida-attraction-deals" },
  { label: "Florida Theme Park Deals", href: "/florida-theme-park-deals" },
  { label: "Florida Family Deals", href: "/florida-family-deals" },
  { label: "Free Things To Do In Florida", href: "/florida-free-things-to-do" },
  { label: "Best Free Things To Do In Florida", href: "/best-free-things-to-do-in-florida" },
  { label: "Best Florida Weekend Activities", href: "/best-florida-weekend-activities" }
];

const weeklySearches = [
  { title: "Orlando Local Deals", href: "/orlando-local-deals", type: "City guide", bestFor: "Families", text: "Attractions, family activities, and Central Florida ideas." },
  { title: "Miami Weekend Deals", href: "/miami-weekend-deals", type: "Weekend ideas", bestFor: "Date Night", text: "Events, restaurants, nightlife, and beach-adjacent plans." },
  { title: "Florida Attraction Deals", href: "/florida-attraction-deals", type: "Activity category", bestFor: "Tourists", text: "Theme parks, museums, tours, and local attractions." },
  { title: "Florida Restaurant Deals", href: "/florida-restaurant-deals", type: "Food & drink", bestFor: "Food & Drink", text: "Dining specials, food events, brunch, and local finds." },
  { title: "Florida Free Things To Do", href: "/florida-free-things-to-do", type: "Budget guide", bestFor: "Free / Low-Cost", text: "Beaches, parks, free events, and budget-friendly ideas." },
  { title: "Florida Date Night Deals", href: "/florida-date-night-deals", type: "Local experiences", bestFor: "Date Night", text: "Restaurants, shows, nightlife, and local experiences." }
];
const popularDestinations = [
  { title: "Orlando", href: "/orlando-local-deals", image: "https://images.unsplash.com/photo-1597466599360-3b9775841aec?auto=format&fit=crop&w=800&q=78", alt: "Orlando attraction skyline" },
  { title: "Miami", href: "/miami-local-deals", image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=800&q=78", alt: "Miami waterfront skyline" },
  { title: "Tampa", href: "/tampa-local-deals", image: "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?auto=format&fit=crop&w=800&q=78", alt: "Tampa waterfront" },
  { title: "Key West", href: "/key-west-local-deals", image: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?auto=format&fit=crop&w=800&q=78", alt: "Key West tropical coast" },
  { title: "Clearwater", href: "/clearwater-local-deals", image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=78", alt: "Clearwater Gulf beach" },
  { title: "Destin", href: "/destin-local-deals", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=78", alt: "Destin beach" },
  { title: "Sarasota", href: "/sarasota-local-deals", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=78", alt: "Sarasota Gulf Coast" },
  { title: "Naples", href: "/naples-local-deals", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=78", alt: "Naples resort and coast" }
];

const cityClusters = [
  {
    title: "Orlando",
    links: [
      { label: "Orlando Local Deals", href: "/orlando-local-deals" },
      { label: "Orlando Things To Do", href: "/orlando-things-to-do" },
      { label: "Orlando Things To Do Deals", href: "/orlando-things-to-do-deals" },
      { label: "Florida Theme Park Deals", href: "/florida-theme-park-deals" },
      { label: "Orlando Hotel Deals", href: "https://hoteldealsflorida.org" },
      { label: "Orlando Flight Deals", href: "https://flightdealsflorida.org" },
      { label: "Florida Deals Hub", href: "https://floridadealshub.com" }
    ]
  },
  {
    title: "Miami",
    links: [
      { label: "Miami Local Deals", href: "/miami-local-deals" },
      { label: "Miami Things To Do", href: "/miami-things-to-do" },
      { label: "Miami Weekend Deals", href: "/miami-weekend-deals" },
      { label: "Florida Restaurant Deals", href: "/florida-restaurant-deals" },
      { label: "Miami Hotel Deals", href: "https://hoteldealsflorida.org" },
      { label: "Miami Flight Deals", href: "https://flightdealsflorida.org" },
      { label: "Florida Deals Hub", href: "https://floridadealshub.com" }
    ]
  },
  {
    title: "Tampa",
    links: [
      { label: "Tampa Local Deals", href: "/tampa-local-deals" },
      { label: "Tampa Things To Do", href: "/tampa-things-to-do" },
      { label: "Tampa Events Deals", href: "/tampa-events-deals" },
      { label: "Florida Family Deals", href: "/florida-family-deals" },
      { label: "Tampa Hotel Deals", href: "https://hoteldealsflorida.org" },
      { label: "Tampa Flight Deals", href: "https://flightdealsflorida.org" },
      { label: "Florida Deals Hub", href: "https://floridadealshub.com" }
    ]
  },
  {
    title: "Fort Lauderdale",
    links: [
      { label: "Fort Lauderdale Local Deals", href: "/fort-lauderdale-local-deals" },
      { label: "Fort Lauderdale Restaurant Deals", href: "/fort-lauderdale-restaurant-deals" },
      { label: "Miami vs Fort Lauderdale Weekend", href: "/miami-vs-fort-lauderdale-weekend" },
      { label: "Florida Date Night Deals", href: "/florida-date-night-deals" },
      { label: "Fort Lauderdale Hotel Deals", href: "https://hoteldealsflorida.org" },
      { label: "Fort Lauderdale Flight Deals", href: "https://flightdealsflorida.org" }
    ]
  },
  {
    title: "Jacksonville",
    links: [
      { label: "Jacksonville Local Deals", href: "/jacksonville-local-deals" },
      { label: "Jacksonville Things To Do", href: "/jacksonville-things-to-do" },
      { label: "Jacksonville Family Deals", href: "/jacksonville-family-deals" },
      { label: "Florida Free Things To Do", href: "/florida-free-things-to-do" },
      { label: "Jacksonville Hotel Deals", href: "https://hoteldealsflorida.org" },
      { label: "Jacksonville Flight Deals", href: "https://flightdealsflorida.org" }
    ]
  },
  {
    title: "Gulf and Historic Coasts",
    links: [
      { label: "Clearwater Things To Do", href: "/clearwater-things-to-do" },
      { label: "St. Augustine Things To Do", href: "/st-augustine-things-to-do" },
      { label: "Daytona Beach Things To Do", href: "/daytona-beach-things-to-do" },
      { label: "Key West Things To Do", href: "/key-west-things-to-do" },
      { label: "Florida Beach Activities", href: "/florida-beach-activities" },
      { label: "Best Beaches In Florida", href: "/best-beaches-in-florida-guide" }
    ]
  }
];

const activityTypes = [
  { title: "Attractions", href: "/florida-attraction-deals", bestFor: "Tourists", text: "Theme parks, museums, tours, wildlife stops, and local attraction pages." },
  { title: "Restaurants", href: "/florida-restaurant-deals", bestFor: "Food & Drink", text: "Dining specials, brunch ideas, food events, markets, and date-night restaurants." },
  { title: "Events", href: "/florida-event-deals", bestFor: "Weekend Activity", text: "Shows, markets, festivals, venue calendars, and city events worth checking." },
  { title: "Family Activities", href: "/florida-family-deals", bestFor: "Families", text: "Kid-friendly attractions, museums, aquariums, public events, and easy day plans." },
  { title: "Free Things To Do", href: "/florida-free-things-to-do", bestFor: "Free / Low-Cost", text: "Beaches, parks, public spaces, free admission windows, and budget-friendly ideas." },
  { title: "Date Night Ideas", href: "/florida-date-night-deals", bestFor: "Date Night", text: "Restaurants, nightlife, theater, waterfront walks, and local experience ideas." },
  { title: "Outdoor Activities", href: "/florida-outdoor-activities", bestFor: "Outdoor Activity", text: "Parks, beaches, walking districts, trails, and weather-friendly outdoor plans." },
  { title: "Rainy Day Activities", href: "/florida-rainy-day-activities", bestFor: "Rainy Day", text: "Museums, aquariums, theaters, galleries, restaurants, and indoor backups." }
];

const planningGuides = [
  { title: "Best Things To Do In Florida", href: "/best-things-to-do-in-florida", label: "Planning Guide", text: "Start with a statewide overview of attractions, beaches, dining, events, and local experiences." },
  { title: "Best Family Activities In Florida", href: "/best-family-activities-in-florida", label: "Family Guide", text: "Compare family-friendly attractions, free ideas, museums, aquariums, and easy weekend plans." },
  { title: "Best Weekend Activities Florida", href: "/best-weekend-activities-florida", label: "Weekend Guide", text: "Build a practical Florida weekend with beaches, restaurants, events, and local activity clusters." },
  { title: "Best Date Night Ideas Florida", href: "/best-date-night-ideas-florida", label: "Date Night", text: "Find restaurant districts, shows, nightlife, waterfront ideas, and local experiences for two." },
  { title: "Summer Things To Do In Florida", href: "/summer-things-to-do-in-florida", label: "Seasonal", text: "Balance beaches, heat, storms, indoor backups, family plans, and evening events." },
  { title: "Holiday Events Florida", href: "/holiday-events-florida", label: "Seasonal", text: "Use city calendars, lights, markets, concerts, parades, and family-friendly holiday ideas." }
];

const editorPicks = [
  { label: "Best for families", title: "Orlando attraction deals", href: "/orlando-local-deals" },
  { label: "Best budget idea", title: "Free things to do in Florida", href: "/florida-free-things-to-do" },
  { label: "Best date night search", title: "Florida date night deals", href: "/florida-date-night-deals" },
  { label: "Best weekend idea", title: "Miami weekend deals", href: "/miami-weekend-deals" },
  { label: "Best rainy day option", title: "Museums and indoor attractions", href: "/florida-rainy-day-activities" }
];

const homeFaqs = [
  {
    question: "Are these Florida local deals current?",
    answer: "Pages are updated regularly, but local offers, event schedules, prices, and availability can change. Always confirm details with the official source before visiting."
  },
  {
    question: "Where do the local deal links go?",
    answer: "Cards point to real source pages such as tourism boards, city calendars, attractions, venues, restaurants, museums, and official event pages."
  },
  {
    question: "Can I compare cities and activity types?",
    answer: "Yes. Use the city clusters, category pages, comparison guides, and related searches to compare attractions, restaurants, events, beaches, and free activities."
  },
  {
    question: "Is Local Deals Florida part of a larger network?",
    answer: "Yes. It is part of Florida Deals Hub, alongside Florida Flight Deals, Florida Hotel Deals, and Florida Cruise Deals."
  }
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
  const homepageFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fbf7] text-[#163235]">
      <JsonLd data={homepageItemList} />
      <JsonLd data={homepageFaqSchema} />
      <SiteHeader />

      <section className="relative overflow-hidden bg-[#f7fbf3] lg:min-h-[calc(100vh-4rem)]">
        <div className="absolute inset-0">
          <FallbackImage
            alt="Florida outdoor restaurant patio with palm trees and warm evening light"
            className="h-full w-full object-cover"
            fetchPriority="high"
            loading="eager"
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
              Updated: June 2026 · New deals added regularly · Check back for weekend updates
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
                <FallbackImage
                  alt="Alligator resting near water at a Florida wildlife attraction"
                  className="h-full min-h-[142px] w-full object-cover transition duration-300 group-hover:scale-[1.03] sm:min-h-[154px] lg:h-56 lg:min-h-0"
                  loading="eager"
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

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Popular Florida Destinations</p>
          <h2 className="mt-2 text-3xl font-black text-[#163235]">Choose a city, then build the day</h2>
        </div>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {popularDestinations.map((destination) => (
            <Link className="group overflow-hidden rounded-[24px] border border-[#d8e6e3] bg-white shadow-lg shadow-[#087f8c]/8 transition hover:-translate-y-1 hover:shadow-xl" href={destination.href} key={destination.href}>
              <FallbackImage alt={destination.alt} className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-[1.03]" loading="lazy" src={destination.image} />
              <div className="p-4">
                <h3 className="text-lg font-black text-[#163235]">{destination.title}</h3>
                <span className="mt-2 inline-flex items-center gap-2 text-sm font-black text-[#087f8c]">Explore local deals <ArrowRight size={15} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            { eyebrow: "Trending This Weekend", title: "Make a current weekend plan", items: weekendContent.slice(0, 3) },
            { eyebrow: "Free Things To Do", title: "Spend less without wasting the day", items: [
              { title: "Free Things To Do in Florida", description: "Beaches, parks, markets, and public events.", url: "/florida-free-things-to-do" },
              { title: "Free Family Activities", description: "Budget-friendly ideas for families.", url: "/free-family-activities-florida" },
              { title: "Cheap Things To Do", description: "Affordable attractions and local plans.", url: "/cheap-things-to-do-in-florida" }
            ] },
            { eyebrow: "Florida Events", title: "Find seasonal and local calendars", items: [
              { title: "Florida Weekend Events", description: "Festivals, markets, and shows.", url: "/florida-weekend-events" },
              { title: "Summer Events Florida", description: "Evening programs and family fun.", url: "/summer-events-florida" },
              { title: "Florida Keys Local Events", description: "Island festivals and calendars.", url: "/florida-keys-local-events" }
            ] }
          ].map((section) => (
            <div className="rounded-[28px] border border-[#d8e6e3] bg-white p-6 shadow-xl shadow-[#087f8c]/8" key={section.eyebrow}>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">{section.eyebrow}</p>
              <h2 className="mt-2 text-2xl font-black text-[#163235]">{section.title}</h2>
              <div className="mt-5 grid gap-3">
                {section.items.map((item) => (
                  <Link className="rounded-2xl bg-[#f8fbf7] p-4 transition hover:bg-[#eef6f5]" href={item.url} key={item.url}>
                    <h3 className="font-black text-[#163235]">{item.title}</h3>
                    <p className="mt-1 text-sm font-semibold leading-6 text-[#52686b]">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Popular this week</p>
          <h2 className="mt-2 text-3xl font-black text-[#163235]">Popular Florida Local Searches This Week</h2>
          <p className="mt-3 leading-7 text-[#52686b]">Popular searches from Florida locals and travelers.</p>
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {weeklySearches.map((search) => (
            <Link className="rounded-[22px] border border-[#d8e6e3] bg-white p-5 shadow-lg shadow-[#087f8c]/8 transition hover:-translate-y-0.5 hover:shadow-xl" href={search.href} key={search.href}>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-[#eef6f5] px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-[#087f8c]">{search.type}</span>
                <span className="rounded-full bg-[#fff8e8] px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-[#8a5200]">Best for {search.bestFor}</span>
              </div>
              <h3 className="mt-4 text-lg font-black text-[#163235]">{search.title}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-[#52686b]">{search.text}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#087f8c]">
                Explore search <ArrowRight size={16} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-[#d8e6e3] bg-white p-6 shadow-xl shadow-[#087f8c]/8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Why trust this site?</p>
            <h2 className="mt-2 text-3xl font-black text-[#163235]">A local discovery layer for Florida Deals Hub</h2>
            <p className="mt-4 text-sm font-semibold leading-7 text-[#52686b]">
              Local Deals Florida is part of the Florida Deals Hub network. We organize local deals, attractions, restaurants, events, and activities by city
              and category so visitors can compare options faster.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {["Updated regularly", "Deals may change", "Event schedules may change", "Confirm current details with the official source"].map((item) => (
                <p className="rounded-2xl bg-[#eef6f5] p-4 text-sm font-black text-[#385154]" key={item}>
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-[28px] border border-[#d8e6e3] bg-white p-6 shadow-xl shadow-[#087f8c]/8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Editor’s Picks</p>
            <div className="mt-4 grid gap-3">
              {editorPicks.map((pick) => (
                <Link className="rounded-2xl border border-[#d8e6e3] p-4 transition hover:border-[#087f8c] hover:bg-[#f8fbf7]" href={pick.href} key={pick.title}>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#087f8c]">{pick.label}</p>
                  <h3 className="mt-1 text-lg font-black text-[#163235]">{pick.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-[#d8e6e3] bg-white p-6 shadow-xl shadow-[#087f8c]/8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Featured Florida Cities</p>
          <h2 className="mt-2 text-3xl font-black text-[#163235]">Plan by city and activity type</h2>
          <p className="mt-3 max-w-3xl text-sm font-semibold leading-6 text-[#52686b]">
            Build a local plan around the city first, then move into attractions, restaurants, events, family activities, flights, hotels, or broader Florida Deals Hub planning.
          </p>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {cityClusters.map((cluster) => (
              <div className="rounded-[22px] bg-[#f8fbf7] p-5" key={cluster.title}>
                <h3 className="text-xl font-black text-[#163235]">{cluster.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cluster.links.map((link) =>
                    link.href.startsWith("/") ? (
                      <Link className="rounded-full bg-white px-3 py-2 text-xs font-black text-[#385154] hover:text-[#087f8c]" href={link.href} key={link.href}>
                        {link.label}
                      </Link>
                    ) : (
                      <a className="rounded-full bg-white px-3 py-2 text-xs font-black text-[#385154] hover:text-[#087f8c]" href={link.href} key={link.label}>
                        {link.label}
                      </a>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[28px] border border-[#d8e6e3] bg-white p-6 shadow-xl shadow-[#087f8c]/8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Explore Florida Activity Types</p>
            <h2 className="mt-2 text-3xl font-black text-[#163235]">Things to do categories</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {activityTypes.map((item) => (
                <Link className="rounded-[20px] border border-[#d8e6e3] bg-[#f8fbf7] p-4 transition hover:border-[#087f8c] hover:bg-white" href={item.href} key={item.href}>
                  <span className="rounded-full bg-white px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-[#087f8c]">{item.bestFor}</span>
                  <h3 className="mt-3 text-lg font-black text-[#163235]">{item.title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#52686b]">{item.text}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded-[28px] border border-[#d8e6e3] bg-white p-6 shadow-xl shadow-[#087f8c]/8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Local Planning Guides</p>
            <h2 className="mt-2 text-3xl font-black text-[#163235]">Seasonal and editorial activity ideas</h2>
            <div className="mt-6 grid gap-3">
              {planningGuides.map((guide) => (
                <Link className="rounded-[20px] border border-[#d8e6e3] p-4 transition hover:border-[#087f8c] hover:bg-[#f8fbf7]" href={guide.href} key={guide.href}>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#087f8c]">{guide.label}</p>
                  <h3 className="mt-1 text-lg font-black text-[#163235]">{guide.title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#52686b]">{guide.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FloridaGetawayBlock />

      <section id="alerts" className="bg-[#163235] px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffb000]">Deal alerts</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Get Florida Local Deals Delivered</h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-white/76">
              Join free alerts for restaurant specials, events, attractions, and local deals near you. Free alerts. No spam. Local offers and events can change quickly.
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

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-[#d8e6e3] bg-white p-6 shadow-xl shadow-[#087f8c]/8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Local Deals FAQs</p>
          <h2 className="mt-2 text-3xl font-black text-[#163235]">How to use Local Deals Florida</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {homeFaqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-black text-[#163235]">{faq.question}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#52686b]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SisterSitesSection />
      <SiteFooter />
    </main>
  );
}
