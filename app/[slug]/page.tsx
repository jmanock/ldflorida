import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import deals from "../../data/deals.json";
import { getLandingPage, landingPagePath, landingPages, type LandingPageConfig } from "../../data/landing-pages";
import LocalDealCard, { type LocalDeal } from "../components/LocalDealCard";
import NewsletterForm from "../components/NewsletterForm";
import SisterSitesSection from "../components/SisterSitesSection";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const baseUrl = "https://localdealsflorida.org";

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
  const allDeals = deals as LocalDeal[];
  return dealIds.map((id) => allDeals.find((deal) => deal.id === id)).filter(Boolean) as LocalDeal[];
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

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fbf7] text-[#163235]">
      <SiteHeader />

      <section className="relative overflow-hidden bg-[#f7fbf3]">
        <div className="absolute inset-0">
          <img alt={page.imageAlt} className="h-full w-full object-cover" src={page.image} />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,251,247,0.97)_0%,rgba(248,251,247,0.9)_48%,rgba(248,251,247,0.42)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(0deg,#f8fbf7_0%,rgba(248,251,247,0)_100%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">{page.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-[#163235] sm:text-6xl">{page.h1}</h1>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-[#385154]">{page.intro}</p>
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
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Curated local finds</p>
          <h2 className="mt-2 text-3xl font-black text-[#163235]">Check current details before you go</h2>
          <p className="mt-3 leading-7 text-[#52686b]">
            These cards link to real local offer pages, official event calendars, tourism boards, venues, museums, restaurants, and attraction pages.
            Deals may change, and availability may vary by date.
          </p>
        </div>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pageDeals.map((deal) => (
            <LocalDealCard deal={deal} key={deal.id} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-[#d8e6e3] bg-white p-6 shadow-xl shadow-[#087f8c]/8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Related local deal pages</p>
          <h2 className="mt-2 text-2xl font-black text-[#163235]">Featured local searches</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link className="rounded-full bg-[#eef6f5] px-4 py-2 text-sm font-black text-[#385154] hover:bg-[#dff6f8]" href="/">
              Local Deals Florida
            </Link>
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
