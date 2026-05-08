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

## Expedia Affiliate Links

Expedia hotel links live in `lib/affiliateLinks.ts`. Every Expedia URL passes through:

```ts
export function getExpediaHotelLink(destination: string) {
  // ...
}
```

The current base affiliate URL is `https://expedia.com/affiliate/2Wbjdi2`. When Expedia Creator Hub provides city-specific deep links, replace the matching values inside `getExpediaHotelLink` so page components and card CTAs keep working without layout edits.

To add a new city hotel CTA:

- Add a destination key to `ExpediaDestinationKey`.
- Add the label to `expediaDestinationLabels`.
- Add the city mapping to `cityDestinationMap`.
- Add page slugs to `slugDestinationMap` when SEO pages should render the “Make It a Weekend Trip” block.

Current destination keys: `orlando`, `miami`, `tampa`, `fortLauderdale`, `jacksonville`, `stPetersburg`, `daytona`, and `stAugustine`.

## Analytics

Outbound deal clicks fire `deal_click` with site, source, city, category, and outbound URL metadata. Event-related cards also fire `event_click`.

The current UI keeps hotel monetization as a page-level Florida Hotel Deals cross-link, tracked as `navigation_click`. Individual local deal cards do not show hotel CTAs. If Expedia links are reintroduced later, use `hotel_booking_click` with `site`, `source`, `provider`, `city`, `category`, `page_path`, and `outbound_url` metadata.

## SEO Structure

The sitemap is generated in `app/sitemap.ts` from the canonical domain `https://localdealsflorida.org`. Static company pages and all entries from `data/landing-pages.ts` are included as HTTPS, non-www URLs. New SEO pages should be added to `landingPages` so sitemap inclusion, static generation, and internal linking stay aligned.

Canonical URLs are self-referencing. Dynamic SEO pages set canonical, Open Graph URL, and Twitter metadata in `app/[slug]/page.tsx`; static support pages use `createPageMetadata` from `lib/seo.ts`.

Structured data is intentionally conservative:

- Global `Organization` and `WebSite` schema live in `app/layout.tsx`.
- SEO pages include `BreadcrumbList`, `FAQPage`, and `ItemList`.
- Event, LocalBusiness, Product, or Offer schema should only be added when the source data is specific and accurate.

SEO landing pages should follow the same structure: shared header, breadcrumb, unique hero metadata, page-level freshness note, local planning copy, top local finds, deal grid, related searches, newsletter, sister sites, and shared footer.

## Adding Pages Or Cards Safely

When adding a new page, include a unique title, meta description, canonical path, Open Graph image, Twitter image, 3-5 FAQs, related pages, and 3-6 real deal IDs. Avoid broad duplicate copy across pages.

When adding a new deal card, use a real source URL, descriptive image alt text, a safe offer label, a source name if available, and a clear category. Do not invent prices or savings. External deal links should open in a new tab with `rel="noopener noreferrer"`; internal Florida Deals Hub network links should stay in the same tab.
