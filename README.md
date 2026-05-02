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

## Analytics

Outbound deal clicks fire `deal_click` with site, source, city, category, and outbound URL metadata. Event-related cards also fire `event_click`.
