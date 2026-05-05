import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLandingPage, landingPagePath, landingPages, type LandingPageConfig } from "../../data/landing-pages";
import { getBookingCityForPage, getBookingUrlForCity } from "../../lib/booking-links";
import { getEnrichedDeals } from "../../lib/local-data";
import FloridaGetawayBlock from "../components/FloridaGetawayBlock";
import LocalDealCard, { type LocalDeal } from "../components/LocalDealCard";
import NewsletterForm from "../components/NewsletterForm";
import SisterSitesSection from "../components/SisterSitesSection";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const baseUrl = "https://localdealsflorida.org";
const lastUpdated = "May 2, 2026";
const evergreenSearches = [
  { label: "Orlando Local Deals", href: "/orlando-local-deals" },
  { label: "Miami Weekend Deals", href: "/miami-weekend-deals" },
  { label: "Tampa Events Deals", href: "/tampa-events-deals" },
  { label: "Florida Restaurant Deals", href: "/florida-restaurant-deals" },
  { label: "Florida Attraction Deals", href: "/florida-attraction-deals" },
  { label: "Free Things To Do In Florida", href: "/florida-free-things-to-do" },
  { label: "Florida Date Night Deals", href: "/florida-date-night-deals" }
];

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

function buildFaqs(page: LandingPageConfig) {
  const topic = page.h1.toLowerCase();

  return [
    {
      question: `What are the best ${topic} right now?`,
      answer: `Start with the curated local finds on this page, then check each official source for current details, dates, and availability.`
    },
    {
      question: `Are ${topic} updated regularly?`,
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

export default async function LandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getLandingPage(slug);

  if (!page) {
    notFound();
  }

  const pageDeals = getDealsForPage(page.dealIds);
  const relatedPages = page.relatedSlugs
    .map((relatedSlug) => getLandingPage(relatedSlug))
    .filter((relatedPage): relatedPage is LandingPageConfig => Boolean(relatedPage));
  const faqs = buildFaqs(page);
  const bookingCity = getBookingCityForPage(page.slug);
  const bookingUrl = bookingCity ? getBookingUrlForCity(bookingCity) : null;
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

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fbf7] text-[#163235]">
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqSchema} />
      <JsonLd data={itemListSchema} />
      <SiteHeader />

      <section className="relative overflow-hidden bg-[#f7fbf3]">
        <div className="absolute inset-0">
          <img alt={page.imageAlt} className="h-full w-full object-cover" decoding="async" fetchPriority="high" src={page.image} />
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
            {bookingCity ? (
              <p className="mt-3 max-w-2xl text-base font-semibold leading-7 text-[#52686b]">
                Planning around {bookingCity}? Compare current local finds with nearby hotels and weekend stay options when it makes sense.
              </p>
            ) : null}
            <p className="mt-4 text-sm font-black uppercase tracking-[0.14em] text-[#087f8c]">
              Updated: May 2026 · Last checked {lastUpdated} · New deals added regularly
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

      {bookingCity && bookingUrl ? <FloridaGetawayBlock bookingUrl={bookingUrl} category={page.h1} city={bookingCity} /> : null}

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
          <div className="mt-5 flex flex-wrap gap-3">
            <Link className="rounded-full bg-[#eef6f5] px-4 py-2 text-sm font-black text-[#385154] hover:bg-[#dff6f8]" href="/">
              Local Deals Florida
            </Link>
            {evergreenSearches.map((search) => (
              <Link className="rounded-full bg-[#eef6f5] px-4 py-2 text-sm font-black text-[#385154] hover:bg-[#dff6f8]" href={search.href} key={search.href}>
                {search.label}
              </Link>
            ))}
            {relatedPages.map((relatedPage) => (
              <Link
                className="rounded-full bg-[#eef6f5] px-4 py-2 text-sm font-black text-[#385154] hover:bg-[#dff6f8]"
                href={landingPagePath(relatedPage.slug)}
                key={relatedPage.slug}
              >
                {relatedPage.h1}
              </Link>
            ))}
          </div>
        </div>
      </section>

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

      <SisterSitesSection />
      <SiteFooter />
    </main>
  );
}
