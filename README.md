# Local Deals Florida

Local Deals Florida is the local savings and things-to-do site in the Florida Deals Hub network. The site renders from static curated data first, then offers optional server-side API routes for freshness and future partner enrichment.

## API Setup

Copy `.env.example` to `.env.local` and add only the providers you want to test:

```env
GOOGLE_PLACES_API_KEY=
YELP_API_KEY=
EVENTBRITE_API_KEY=
LOCAL_DEALS_API_KEY=
```

API keys are used only from Next.js server routes. They are not exposed to the browser.

## Local API Routes

- `/api/local/deals` returns the curated deal feed enriched with static trust data.
- `/api/local/places?city=Orlando&provider=yelp` can call Yelp Fusion when `YELP_API_KEY` is set.
- `/api/local/places?city=Orlando&provider=google` can call Google Places Text Search when `GOOGLE_PLACES_API_KEY` is set.
- `/api/local/events?city=Tampa` can call Eventbrite when `EVENTBRITE_API_KEY` is set.

If a key is missing, a provider fails, or an API returns no useful results, the route returns normalized static fallback data.

## Caching And Fallbacks

Local API responses use a 12-hour cache window with stale-while-revalidate headers. The site does not block rendering on third-party APIs, so homepage and SEO landing pages keep working even if Google, Yelp, Eventbrite, or a future partner feed is unavailable.

Static fallback data lives in:

- `data/deals.json`
- `data/local-trust.json`

## Affiliate And Partner Links

Deal URLs are centralized in `data/deals.json` as `affiliateReadyUrl`. Replace those values with affiliate, referral, UTM, or partner URLs later without changing card components or page layouts.

Keep all external deal links pointed at real public pages and continue using `target="_blank"` with `rel="noopener noreferrer"`.

## Booking And Awin Readiness

Booking.com hotel links live in `lib/booking-links.ts`. Every Booking URL passes through:

```ts
export function getBookingLink(url: string) {
  return url;
}
```

Until Awin approval is complete, `getBookingLink` returns the normal Booking URL. After approval, replace the helper internals with the Awin deep-link format so city CTA blocks keep working without page-level edits.

To add a new city hotel CTA:

- Add the city and Booking search URL to `cityBookingLinks`.
- Map the page slug to that city in `slugCityMap`.
- The SEO page will render the “Make It a Florida Getaway” block automatically when a city mapping exists.

## Analytics

Outbound deal clicks fire `deal_click` with site, source, city, category, and outbound URL metadata. Event-related cards also fire `event_click`.

Booking.com hotel clicks fire `hotel_booking_click` with `site`, `source`, `provider`, `city`, `category`, `page_path`, and `outbound_url` metadata. Network links stay in the same tab; Booking links open in a new tab with `rel="noopener noreferrer"`.
