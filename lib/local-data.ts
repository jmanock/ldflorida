import deals from "../data/deals.json";
import trustRecords from "../data/local-trust.json";

export type LocalDealRecord = {
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

export type LocalTrustRecord = {
  dealId: string;
  placeName: string;
  neighborhood?: string;
  address?: string;
  rating?: number;
  reviewCount?: number;
  officialWebsite?: string;
  eventDate?: string;
  image?: string;
  imageAlt?: string;
  sourceName: string;
  lastVerified: string;
};

export type EnrichedLocalDeal = LocalDealRecord & Partial<Omit<LocalTrustRecord, "dealId">>;

const fallbackDeals = deals as LocalDealRecord[];
const fallbackTrustRecords = trustRecords as LocalTrustRecord[];

export function getEnrichedDeals(): EnrichedLocalDeal[] {
  return fallbackDeals.map((deal) => {
    const trust = fallbackTrustRecords.find((record) => record.dealId === deal.id);
    return trust ? { ...deal, ...trust } : deal;
  });
}

export function getFallbackPlaces(city?: string) {
  const normalizedCity = city?.trim().toLowerCase();

  return getEnrichedDeals()
    .filter((deal) => !normalizedCity || deal.city.toLowerCase() === normalizedCity)
    .filter((deal) => deal.placeName || deal.neighborhood || deal.officialWebsite)
    .map((deal) => ({
      id: deal.id,
      placeName: deal.placeName ?? deal.title,
      city: deal.city,
      category: deal.category,
      neighborhood: deal.neighborhood,
      address: deal.address,
      rating: deal.rating,
      reviewCount: deal.reviewCount,
      officialWebsite: deal.officialWebsite ?? deal.affiliateReadyUrl,
      image: deal.image,
      imageAlt: deal.imageAlt ?? deal.image_alt,
      sourceName: deal.sourceName ?? "Curated local source",
      lastVerified: deal.lastVerified
    }));
}

export function getFallbackEvents(city?: string) {
  const normalizedCity = city?.trim().toLowerCase();

  return getEnrichedDeals()
    .filter((deal) => !normalizedCity || deal.city.toLowerCase() === normalizedCity)
    .filter((deal) => deal.category.includes("Event") || Boolean(deal.eventDate))
    .map((deal) => ({
      id: deal.id,
      title: deal.title,
      city: deal.city,
      category: deal.category,
      eventDate: deal.eventDate ?? deal.dates,
      venue: deal.placeName,
      neighborhood: deal.neighborhood,
      url: deal.affiliateReadyUrl,
      image: deal.image,
      imageAlt: deal.image_alt,
      sourceName: deal.sourceName ?? "Curated local source",
      lastVerified: deal.lastVerified
    }));
}
