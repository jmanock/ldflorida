import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLandingPage, landingPagePath, landingPages, type LandingPageConfig } from "../../data/landing-pages";
import { getPiscifunGearPicks } from "../../lib/affiliate/piscifunLinks";
import { getEnrichedDeals } from "../../lib/local-data";
import AffiliateGearCard from "../components/AffiliateGearCard";
import FloridaGetawayBlock from "../components/FloridaGetawayBlock";
import FallbackImage from "../components/FallbackImage";
import LocalDealCard, { type LocalDeal } from "../components/LocalDealCard";
import NewsletterForm from "../components/NewsletterForm";
import SisterSitesSection from "../components/SisterSitesSection";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const baseUrl = "https://localdealsflorida.org";
const freshnessNote = "Updated: May 2026 • Local offers and events may change • Confirm details with the official source";
const evergreenSearches = [
  { label: "Orlando Local Deals", href: "/orlando-local-deals" },
  { label: "Miami Weekend Deals", href: "/miami-weekend-deals" },
  { label: "Tampa Events Deals", href: "/tampa-events-deals" },
  { label: "Florida Restaurant Deals", href: "/florida-restaurant-deals" },
  { label: "Florida Attraction Deals", href: "/florida-attraction-deals" },
  { label: "Free Things To Do In Florida", href: "/florida-free-things-to-do" },
  { label: "Florida Date Night Deals", href: "/florida-date-night-deals" }
];
const topDealLabels = ["Top Pick", "Family Favorite", "Weekend Pick"];
const cityClusters = {
  orlando: {
    title: "Orlando Local Cluster",
    links: [
      { label: "Orlando Local Deals", href: "/orlando-local-deals" },
      { label: "Orlando Things To Do Deals", href: "/orlando-things-to-do-deals" },
      { label: "Florida Theme Park Deals", href: "/florida-theme-park-deals" },
      { label: "Orlando Hotel Deals", href: "https://hoteldealsflorida.org" },
      { label: "Orlando Flight Deals", href: "https://flightdealsflorida.org" },
      { label: "Florida Deals Hub", href: "https://floridadealshub.com" }
    ]
  },
  miami: {
    title: "Miami Local Cluster",
    links: [
      { label: "Miami Local Deals", href: "/miami-local-deals" },
      { label: "Miami Weekend Deals", href: "/miami-weekend-deals" },
      { label: "Florida Restaurant Deals", href: "/florida-restaurant-deals" },
      { label: "Miami Hotel Deals", href: "https://hoteldealsflorida.org" },
      { label: "Miami Flight Deals", href: "https://flightdealsflorida.org" },
      { label: "Florida Deals Hub", href: "https://floridadealshub.com" }
    ]
  },
  tampa: {
    title: "Tampa Local Cluster",
    links: [
      { label: "Tampa Local Deals", href: "/tampa-local-deals" },
      { label: "Tampa Events Deals", href: "/tampa-events-deals" },
      { label: "Florida Family Deals", href: "/florida-family-deals" },
      { label: "Tampa Hotel Deals", href: "https://hoteldealsflorida.org" },
      { label: "Tampa Flight Deals", href: "https://flightdealsflorida.org" },
      { label: "Florida Deals Hub", href: "https://floridadealshub.com" }
    ]
  }
};

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `${baseUrl}/${page.slug}`
    },
    openGraph: {
      title: page.title,
      description: page.description,
      type: "website",
      locale: "en_US",
      siteName: "Local Deals Florida",
      url: `${baseUrl}/${page.slug}`,
      images: [
        {
          url: page.image,
          width: 1200,
          height: 630,
          alt: page.imageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [page.image]
    }
  };
}

function getDealsForPage(dealIds: string[]) {
  const allDeals = getEnrichedDeals() as LocalDeal[];
  return dealIds.map((id) => allDeals.find((deal) => deal.id === id)).filter(Boolean) as LocalDeal[];
}

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function getCityCluster(slug: string) {
  if (slug.includes("orlando")) return cityClusters.orlando;
  if (slug.includes("miami")) return cityClusters.miami;
  if (slug.includes("tampa")) return cityClusters.tampa;
  return null;
}

function buildFaqs(page: LandingPageConfig) {
  const topic = page.h1.toLowerCase();
  const cleanTopic = topic.replace(/^best\s+/, "");

  if (page.pageType === "guide" || page.pageType === "comparison") {
    return [
      {
        question: `What should I know before planning ${cleanTopic}?`,
        answer: "Start with the guide notes, then confirm current hours, prices, parking, weather, and event details with the official source before you go."
      },
      {
        question: `Are ${cleanTopic} good for families?`,
        answer: "Many Florida activities work well for families, but age ranges, stroller rules, ticket windows, parking, and weather can change the fit for a specific day."
      },
      {
        question: "How often do local events and offers change?",
        answer: "Local events, attraction offers, restaurant specials, and free activity details can change by season, date, provider, weather, and availability."
      },
      {
        question: "Where do these Florida activity ideas come from?",
        answer: "We prioritize official tourism boards, city calendars, attraction pages, museum pages, restaurant pages, venue calendars, and public event resources."
      },
      {
        question: "Can I use this guide with Florida travel planning?",
        answer: "Yes. Local Deals Florida is part of Florida Deals Hub, with related flight, hotel, cruise, and local deal resources for broader trip planning."
      }
    ];
  }

  return [
    {
      question: `What are the best ${cleanTopic} right now?`,
      answer: `Start with the curated local finds on this page, then check each official source for current details, dates, and availability.`
    },
    {
      question: `Are ${cleanTopic} updated regularly?`,
      answer: "Yes. Local Deals Florida is built for repeat checks, with current local searches and source links reviewed regularly."
    },
    {
      question: "Do local deals and event details change often?",
      answer: "Yes. Prices, dates, offers, and availability may vary by provider, date, location, and season. Always check current details before you go."
    },
    {
      question: "Where do these local finds come from?",
      answer: "We prioritize official tourism boards, attraction sites, restaurant pages, venue calendars, city event calendars, and useful public offer pages."
    },
    {
      question: "Can I pair these local deals with Florida travel deals?",
      answer: "Yes. Local Deals Florida is part of Florida Deals Hub, alongside Flight Deals Florida, Hotel Deals Florida, and Cruise Deals Florida."
    }
  ];
}

function buildSeoOverview(page: LandingPageConfig) {
  const h1 = page.h1.toLowerCase();
  const cityContext = [
    "orlando",
    "miami",
    "tampa",
    "jacksonville",
    "fort lauderdale",
    "st. petersburg",
    "daytona beach",
    "st. augustine",
    "clearwater",
    "key west",
    "naples"
  ].find((city) => h1.includes(city));

  if (page.pageType === "guide") {
    return `${page.intro} This guide is built as a practical Florida planning resource first, with deal cards used as supporting source links rather than the whole story. Use it to compare neighborhoods, seasons, free or low-cost ideas, official tourism resources, and activity types that match your trip or weekend plans. Local details can change quickly because of weather, event schedules, seasonal hours, holiday crowds, parking rules, ticket windows, and venue updates. Start with the planning notes, use the featured cards for official source pages, and then confirm dates, prices, access rules, and reservation requirements before you go.`;
  }

  if (cityContext) {
    return `${page.intro} This city page is built for people comparing real local options before making plans: attractions, restaurants, family activities, events, nightlife, weekend ideas, free or low-cost stops, and local experiences when they fit the market. Local Deals Florida keeps the focus on source-led listings instead of vague coupon language, so each card should make it clear what the offer is, who publishes it, and why it may be useful. Use the related searches to move between nearby categories such as Florida attraction deals, restaurant deals, family deals, free things to do, and weekend plans.`;
  }

  if (h1.includes("restaurant") || h1.includes("food")) {
    return `${page.intro} This dining page is useful for comparing restaurant specials, happy hours, brunch ideas, markets, date-night options, and food-and-drink finds across Florida cities. Restaurant offers can vary by day, location, season, and menu availability, so each card emphasizes the source, offer label, and current details rather than unsupported promises. Use this page as a starting point for local dining research, then open the restaurant, venue, tourism board, or event source to confirm the latest terms before visiting. Related searches connect dining plans with date night ideas, weekend deals, and city-specific local pages.`;
  }

  if (h1.includes("attraction")) {
    return `${page.intro} This attraction page helps users compare theme parks, museums, historic sites, tours, wildlife stops, family attractions, and ticket-related offer pages around Florida. Attraction pricing and admission terms can change by date, age group, residency, event schedule, and partner source, so the cards focus on safe offer labels and official source clarity. Use this page to find ideas for a family day, a low-cost outing, or a weekend activity, then confirm ticket options and restrictions with the attraction or tourism source before buying.`;
  }

  if (h1.includes("event") || h1.includes("weekend")) {
    return `${page.intro} This page is designed for weekend planning, local events, markets, shows, festivals, waterfront activities, and city calendars across Florida. Event details can change quickly because of weather, ticket availability, venue updates, holidays, and seasonal programming. Local Deals Florida highlights source-led event pages so users can understand the opportunity quickly and then verify dates, times, registration requirements, and costs with the official calendar or venue. Related searches help connect events with restaurants, date nights, free things to do, and city-specific local deal pages.`;
  }

  if (h1.includes("free")) {
    return `${page.intro} This page focuses on free and low-cost Florida ideas such as parks, museums with free admission windows, public events, markets, beaches, art walks, and family-friendly activities. Free listings can still have registration requirements, limited hours, parking costs, or date-specific rules, so each card points users toward the source that maintains the current details. Use this page to plan a budget-friendly day out, compare nearby markets and events, and discover local activity ideas that do not depend on unsupported discount claims.`;
  }

  if (h1.includes("date night")) {
    return `${page.intro} This page is built for date-night planning across Florida, including restaurants, live events, arts, nightlife, waterfront ideas, karaoke, theater, and local experiences. Date-night offers and event availability can change by day and reservation window, so each card is meant to show the source, offer type, and why it may be useful before sending users to the official page. Related searches connect these ideas with restaurant deals, weekend plans, hotel inspiration, and city-specific local pages.`;
  }

  return `${page.intro} Local Deals Florida keeps this page focused on practical, current local searches rather than broad travel inspiration. Use it to compare real source pages for restaurants, events, attractions, free activities, family ideas, date nights, and weekend plans when they fit this topic. Each card is meant to help you understand the value quickly: what the offer is, where it comes from, when it may be useful, and which official source should be checked before you make plans. Related searches help users move naturally between nearby cities, categories, and the broader Florida Deals Hub network.`;
}

function shouldShowOutdoorGear(page: LandingPageConfig) {
  const content = `${page.slug} ${page.h1} ${page.description}`.toLowerCase();

  return ["fishing", "beach", "water", "outdoor", "weekend", "rainy", "family"].some((term) => content.includes(term));
}

export default async function LandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getLandingPage(slug);

  if (!page) {
    notFound();
  }

  const pageDeals = getDealsForPage(page.dealIds);
  const gearPicks = shouldShowOutdoorGear(page) ? getPiscifunGearPicks() : [];
  const topDeals = pageDeals.slice(0, 3);
  const guideSections = page.guideSections ?? [];
  const cityCluster = getCityCluster(page.slug);
  const relatedPages = page.relatedSlugs
    .map((relatedSlug) => getLandingPage(relatedSlug))
    .filter((relatedPage): relatedPage is LandingPageConfig => Boolean(relatedPage));
  const relatedSearchLinks = [
    { label: "Local Deals Florida", href: "/" },
    ...evergreenSearches,
    ...relatedPages.map((relatedPage) => ({ label: relatedPage.h1, href: landingPagePath(relatedPage.slug) }))
  ].filter((link, index, links) => links.findIndex((candidate) => candidate.href === link.href) === index).slice(0, 10);
  const faqs = buildFaqs(page);
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Local Deals Florida",
        item: baseUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.h1,
        item: `${baseUrl}/${page.slug}`
      }
    ]
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
  };
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${page.h1} featured local finds`,
    itemListElement: pageDeals.map((deal, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: deal.title,
      url: deal.affiliateReadyUrl
    }))
  };
  const articleSchema =
    page.pageType === "guide" || page.pageType === "comparison"
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: page.title,
          description: page.description,
          image: page.image,
          mainEntityOfPage: `${baseUrl}/${page.slug}`,
          publisher: {
            "@type": "Organization",
            name: "Florida Deals Hub",
            url: "https://floridadealshub.com"
          }
        }
      : null;

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fbf7] text-[#163235]">
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqSchema} />
      <JsonLd data={itemListSchema} />
      {articleSchema ? <JsonLd data={articleSchema} /> : null}
      <SiteHeader />

      <section className="relative overflow-hidden bg-[#f7fbf3]">
        <div className="absolute inset-0">
          <FallbackImage alt={page.imageAlt} className="h-full w-full object-cover" fetchPriority="high" loading="eager" src={page.image} />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,251,247,0.97)_0%,rgba(248,251,247,0.9)_48%,rgba(248,251,247,0.42)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(0deg,#f8fbf7_0%,rgba(248,251,247,0)_100%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm font-black text-[#52686b]" aria-label="Breadcrumb">
            <Link className="rounded-full bg-white/85 px-3 py-2 hover:text-[#087f8c]" href="/">
              Home
            </Link>
            <span aria-hidden="true">&gt;</span>
            <Link className="rounded-full bg-white/85 px-3 py-2 hover:text-[#087f8c]" href="/">
              Local Deals
            </Link>
            <span aria-hidden="true">&gt;</span>
            <span className="rounded-full bg-[#087f8c] px-3 py-2 text-white">{page.h1}</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">{page.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-[#163235] sm:text-6xl">{page.h1}</h1>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-[#385154]">{page.intro}</p>
            <p className="mt-4 text-sm font-black uppercase tracking-[0.14em] text-[#087f8c]">
              {freshnessNote}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex h-[52px] items-center justify-center rounded-full bg-[#087f8c] px-7 text-base font-black text-white shadow-xl shadow-[#087f8c]/25 transition hover:bg-[#07515a]"
                href="#local-finds"
                style={{ color: "#ffffff" }}
              >
                View Local Finds
              </a>
              <a
                className="inline-flex h-[52px] items-center justify-center rounded-full border border-[#c7dad7] bg-white/90 px-7 text-base font-black text-[#163235] shadow-xl shadow-[#087f8c]/10 transition hover:border-[#087f8c] hover:text-[#087f8c]"
                href="#alerts"
              >
                Get Alerts
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-[#d8e6e3] bg-white p-6 shadow-xl shadow-[#087f8c]/8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Local planning guide</p>
          <div className="mt-3 max-w-4xl space-y-4 text-base font-semibold leading-8 text-[#52686b]">
            <p>{buildSeoOverview(page)}</p>
            <p>
              Prices, event dates, menus, ticket options, and availability can change. For the cleanest planning experience, start with the offer label,
              review the source and page-level freshness note, then open the official page for current terms before visiting or buying.
            </p>
          </div>
          {guideSections.length > 0 ? (
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {guideSections.map((section) => (
                <div className="rounded-[22px] border border-[#d8e6e3] bg-[#f8fbf7] p-5" key={section.heading}>
                  <h2 className="text-xl font-black text-[#163235]">{section.heading}</h2>
                  <p className="mt-3 text-sm font-semibold leading-7 text-[#52686b]">{section.body}</p>
                </div>
              ))}
            </div>
          ) : null}
          {page.planningTips ? (
            <div className="mt-6 rounded-[22px] bg-[#163235] p-5 text-white">
              <h2 className="text-xl font-black">Quick planning tips</h2>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {page.planningTips.map((tip) => (
                  <p className="rounded-2xl bg-white/10 p-4 text-sm font-bold leading-6 text-white/82" key={tip}>
                    {tip}
                  </p>
                ))}
              </div>
            </div>
          ) : null}
          {page.comparisonRows ? (
            <div className="mt-6 overflow-hidden rounded-[22px] border border-[#d8e6e3]">
              <div className="grid bg-[#163235] px-5 py-4 text-sm font-black uppercase tracking-[0.14em] text-white md:grid-cols-3">
                <p>Option</p>
                <p className="hidden md:block">Best For</p>
                <p className="hidden md:block">Watch For</p>
              </div>
              <div className="divide-y divide-[#d8e6e3] bg-white">
                {page.comparisonRows.map((row) => (
                  <div className="grid gap-3 px-5 py-4 text-sm font-semibold leading-6 text-[#52686b] md:grid-cols-3" key={row.option}>
                    <p className="font-black text-[#163235]">{row.option}</p>
                    <p>
                      <span className="font-black text-[#087f8c] md:hidden">Best for: </span>
                      {row.bestFor}
                    </p>
                    <p>
                      <span className="font-black text-[#087f8c] md:hidden">Watch for: </span>
                      {row.watchFor}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Top Local Deals Right Now</p>
          <h2 className="mt-2 text-3xl font-black text-[#163235]">Start with these current local finds</h2>
          <p className="mt-3 leading-7 text-[#52686b]">
            These picks are selected for clear value, useful source pages, and everyday Florida plans. Details may change, so confirm the current offer before you go.
          </p>
        </div>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {topDeals.map((deal, index) => (
            <div className="relative" key={deal.id}>
              <span className="absolute left-4 top-4 z-10 rounded-full bg-[#163235] px-3 py-1 text-xs font-black text-white shadow-lg shadow-[#163235]/15">
                {topDealLabels[index] ?? "Top Pick"}
              </span>
              <LocalDealCard deal={deal} />
            </div>
          ))}
        </div>
      </section>

      <section id="local-finds" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Current local finds</p>
          <h2 className="mt-2 text-3xl font-black text-[#163235]">Check current details before you go</h2>
          <p className="mt-3 leading-7 text-[#52686b]">
            These cards link to real local offer pages, official event calendars, tourism boards, venues, museums, restaurants, and attraction pages.
            Deals may change, and availability may vary by date.
          </p>
          {page.localContext ? (
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {page.localContext.map((context) => (
                <div className="rounded-2xl border border-[#d8e6e3] bg-white p-4 text-sm font-bold leading-6 text-[#52686b]" key={context}>
                  {context}
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pageDeals.map((deal) => (
            <LocalDealCard deal={deal} key={deal.id} />
          ))}
        </div>
      </section>

      {cityCluster ? (
        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-[28px] border border-[#d8e6e3] bg-white p-6 shadow-xl shadow-[#087f8c]/8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Destination cluster</p>
            <h2 className="mt-2 text-2xl font-black text-[#163235]">{cityCluster.title}</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {cityCluster.links.map((link) =>
                link.href.startsWith("/") ? (
                  <Link className="rounded-full bg-[#eef6f5] px-4 py-2 text-sm font-black text-[#385154] hover:bg-[#dff6f8]" href={link.href} key={link.href}>
                    {link.label}
                  </Link>
                ) : (
                  <a className="rounded-full bg-[#eef6f5] px-4 py-2 text-sm font-black text-[#385154] hover:bg-[#dff6f8]" href={link.href} key={link.label}>
                    {link.label}
                  </a>
                )
              )}
            </div>
          </div>
        </section>
      ) : null}

      <FloridaGetawayBlock />

      {gearPicks.length ? (
        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mb-7 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Florida outdoor gear</p>
            <h2 className="mt-2 text-3xl font-black text-[#163235]">Beach and fishing day essentials</h2>
            <p className="mt-3 leading-7 text-[#52686b]">
              Helpful gear sources for Florida fishing trips, beach days, parks, springs, and weekend outdoor plans. Product availability and prices may change.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {gearPicks.map((item) => (
              <AffiliateGearCard ctaText={item.category === "fishing_gear" ? "Florida Fishing Essentials" : "Browse Piscifun Products"} item={item} key={item.title} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-[#d8e6e3] bg-white p-6 shadow-xl shadow-[#087f8c]/8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Helpful notes</p>
          <h2 className="mt-2 text-2xl font-black text-[#163235]">Local deal FAQ</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-black text-[#163235]">{faq.question}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#52686b]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-[#d8e6e3] bg-white p-6 shadow-xl shadow-[#087f8c]/8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Related Local Searches</p>
          <h2 className="mt-2 text-2xl font-black text-[#163235]">Featured local searches to check next</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {relatedSearchLinks.map((link) => (
              <Link
                className="rounded-2xl bg-[#eef6f5] px-4 py-3 text-sm font-black text-[#385154] hover:bg-[#dff6f8] hover:text-[#087f8c]"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

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

      <SisterSitesSection />
      <SiteFooter />
    </main>
  );
}
