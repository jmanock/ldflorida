import { NextRequest, NextResponse } from "next/server";
import { getFallbackEvents } from "../../../../lib/local-data";
import { localApiCacheHeaders, LOCAL_API_REVALIDATE_SECONDS } from "../cache";

export const revalidate = 43200;

function fallback(city?: string) {
  return NextResponse.json(
    {
      ok: true,
      source: "static_fallback",
      refreshedAt: new Date().toISOString(),
      data: getFallbackEvents(city).map((event) => ({ ...event, provider: "Local Deals Florida" }))
    },
    { headers: localApiCacheHeaders }
  );
}

export async function GET(request: NextRequest) {
  const city = request.nextUrl.searchParams.get("city") ?? "";
  const apiKey = process.env.EVENTBRITE_API_KEY;

  if (!apiKey) {
    return fallback(city);
  }

  try {
    const params = new URLSearchParams({
      "location.address": city ? `${city}, FL` : "Florida",
      expand: "venue",
      sort_by: "date"
    });
    const response = await fetch(`https://www.eventbriteapi.com/v3/events/search/?${params.toString()}`, {
      headers: { Authorization: `Bearer ${apiKey}` },
      next: { revalidate: LOCAL_API_REVALIDATE_SECONDS }
    });

    if (!response.ok) {
      return fallback(city);
    }

    const payload = (await response.json()) as {
      events?: Array<{
        id: string;
        name?: { text?: string };
        description?: { text?: string };
        url?: string;
        start?: { local?: string };
        logo?: { url?: string };
        venue?: { name?: string; address?: { city?: string; localized_address_display?: string } };
      }>;
    };

    const data = (payload.events ?? []).slice(0, 8).map((event) => ({
      id: event.id,
      title: event.name?.text ?? "Local event",
      city: event.venue?.address?.city ?? city,
      category: "Events",
      description: event.description?.text?.slice(0, 180),
      eventDate: event.start?.local,
      venue: event.venue?.name,
      address: event.venue?.address?.localized_address_display,
      url: event.url,
      image: event.logo?.url,
      imageAlt: event.name?.text ? `${event.name.text} event image` : "Local event image",
      provider: "Eventbrite"
    }));

    return NextResponse.json({ ok: true, source: "eventbrite", refreshedAt: new Date().toISOString(), data }, { headers: localApiCacheHeaders });
  } catch {
    return fallback(city);
  }
}
