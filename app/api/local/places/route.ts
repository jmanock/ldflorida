import { NextRequest, NextResponse } from "next/server";
import { getFallbackPlaces } from "../../../../lib/local-data";
import { localApiCacheHeaders, LOCAL_API_REVALIDATE_SECONDS } from "../cache";

export const revalidate = 43200;

type NormalizedPlace = {
  id: string;
  placeName: string;
  city?: string;
  category?: string;
  neighborhood?: string;
  address?: string;
  rating?: number;
  reviewCount?: number;
  officialWebsite?: string;
  image?: string;
  imageAlt?: string;
  provider: string;
};

function fallback(city?: string) {
  return NextResponse.json(
    {
      ok: true,
      source: "static_fallback",
      refreshedAt: new Date().toISOString(),
      data: getFallbackPlaces(city).map((place) => ({ ...place, provider: "Local Deals Florida" }))
    },
    { headers: localApiCacheHeaders }
  );
}

async function fetchYelpPlaces(city: string, category: string): Promise<NormalizedPlace[]> {
  const apiKey = process.env.YELP_API_KEY;
  if (!apiKey) return [];

  const params = new URLSearchParams({
    location: `${city}, FL`,
    term: category,
    limit: "8"
  });
  const response = await fetch(`https://api.yelp.com/v3/businesses/search?${params.toString()}`, {
    headers: { Authorization: `Bearer ${apiKey}` },
    next: { revalidate: LOCAL_API_REVALIDATE_SECONDS }
  });

  if (!response.ok) return [];
  const payload = (await response.json()) as {
    businesses?: Array<{
      id: string;
      name: string;
      rating?: number;
      review_count?: number;
      url?: string;
      image_url?: string;
      categories?: Array<{ title: string }>;
      location?: { city?: string; address1?: string; display_address?: string[] };
    }>;
  };

  return (payload.businesses ?? []).map((business) => ({
    id: business.id,
    placeName: business.name,
    city: business.location?.city,
    category: business.categories?.[0]?.title,
    address: business.location?.display_address?.join(", ") ?? business.location?.address1,
    rating: business.rating,
    reviewCount: business.review_count,
    officialWebsite: business.url,
    image: business.image_url,
    imageAlt: `${business.name} local place photo`,
    provider: "Yelp Fusion"
  }));
}

async function fetchGooglePlaces(city: string, category: string): Promise<NormalizedPlace[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return [];

  const params = new URLSearchParams({
    query: `${category} in ${city}, Florida`,
    key: apiKey
  });
  const response = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?${params.toString()}`, {
    next: { revalidate: LOCAL_API_REVALIDATE_SECONDS }
  });

  if (!response.ok) return [];
  const payload = (await response.json()) as {
    results?: Array<{
      place_id: string;
      name: string;
      formatted_address?: string;
      rating?: number;
      user_ratings_total?: number;
      types?: string[];
    }>;
  };

  return (payload.results ?? []).slice(0, 8).map((place) => ({
    id: place.place_id,
    placeName: place.name,
    city,
    category: place.types?.[0]?.replaceAll("_", " "),
    address: place.formatted_address,
    rating: place.rating,
    reviewCount: place.user_ratings_total,
    provider: "Google Places"
  }));
}

export async function GET(request: NextRequest) {
  const city = request.nextUrl.searchParams.get("city") ?? "";
  const category = request.nextUrl.searchParams.get("category") ?? "local deals";
  const provider = request.nextUrl.searchParams.get("provider") ?? "fallback";

  try {
    const data =
      provider === "yelp"
        ? await fetchYelpPlaces(city || "Orlando", category)
        : provider === "google"
          ? await fetchGooglePlaces(city || "Orlando", category)
          : [];

    if (data.length > 0) {
      return NextResponse.json({ ok: true, source: provider, refreshedAt: new Date().toISOString(), data }, { headers: localApiCacheHeaders });
    }
  } catch {
    return fallback(city);
  }

  return fallback(city);
}
