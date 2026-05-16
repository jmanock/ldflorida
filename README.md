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

Outbound deal clicks fire both `deal_click` and `local_card_click` with `site`, `source_site`, `source`, `city`, `category`, `deal_title`, `source_name`, `cta_text`, `outbound_url`, and `page_path` metadata. Event-related cards also fire `event_click`.

Image fallbacks fire `image_fallback_used` with `site`, `image_src`, and `page_path` metadata when a remote image fails and the branded local fallback is used.

Network links fire `navigation_click` and `network_site_click`. Footer city and activity links also fire `city_guide_click` or `activity_guide_click` when the link target clearly matches that intent.

The current UI keeps hotel monetization as a page-level Florida Hotel Deals cross-link, tracked as navigation/network activity. Individual local deal cards do not show hotel CTAs. If Expedia links are reintroduced later, use `hotel_booking_click` with `site`, `source`, `provider`, `city`, `category`, `page_path`, and `outbound_url` metadata.

## Image Fallback Strategy

Image rendering uses `app/components/FallbackImage.tsx` for homepage hero images, SEO page hero images, and local deal cards. If a remote image fails, the component swaps to `/images/fallbacks/florida-activity-placeholder.svg` while preserving the same dimensions and layout.

When adding local card images:

- Use a relevant image for the city or activity type.
- Keep `image_alt` descriptive and specific.
- Prefer reasonably sized remote URLs with width and quality parameters.
- Avoid repeating the same image within the same section when a better local image is available.
- Do not leave image paths blank.

## SEO Structure

The sitemap is generated in `app/sitemap.ts` from the canonical domain `https://localdealsflorida.org`. Static company pages and all entries from `data/landing-pages.ts` are included as HTTPS, non-www URLs. New SEO pages should be added to `landingPages` so sitemap inclusion, static generation, and internal linking stay aligned.

Canonical URLs are self-referencing. Dynamic SEO pages set canonical, Open Graph URL, and Twitter metadata in `app/[slug]/page.tsx`; static support pages use `createPageMetadata` from `lib/seo.ts`.

Structured data is intentionally conservative:

- Global `Organization` and `WebSite` schema live in `app/layout.tsx`.
- SEO pages include `BreadcrumbList`, `FAQPage`, and `ItemList`.
- Event, LocalBusiness, Product, or Offer schema should only be added when the source data is specific and accurate.

SEO landing pages should follow the same structure: shared header, breadcrumb, unique hero metadata, page-level freshness note, local planning copy, top local finds, deal grid, related searches, newsletter, sister sites, and shared footer.

### Local Deals V2 Strategy

Version 2 expands the site from a deal feed into a Florida discovery resource. The homepage now layers popular searches, featured city clusters, things-to-do categories, editorial picks, seasonal guides, planning links, FAQs, and trust language around the existing deal explorer. Keep future additions editorial and useful first: explain what a user can do, who it helps, what details may change, and which official source should be checked.

### City Cluster Strategy

City pages and homepage clusters should connect local deals, things-to-do guides, restaurants, attractions, family activity pages, weekend pages, hotels, flights, and Florida Deals Hub. Internal links stay in the same tab. Prioritize real Florida markets with clear local intent: Orlando, Miami, Tampa, Fort Lauderdale, Jacksonville, St. Augustine, Daytona Beach, Clearwater, Key West, Naples, and St. Petersburg.

### Local Category Page Strategy

Category pages such as `florida-restaurant-deals`, `florida-theme-park-deals`, `florida-outdoor-activities`, and `florida-rainy-day-activities` should explain who the page helps, which activity types are included, how offers or event details can change, and which city pages are related. Keep category copy useful and local, not keyword-stuffed.

### Activity Guide Strategy

Authority guides use the same dynamic route, but set `pageType: "guide"` and include `guideSections` plus `planningTips`. These pages should be less commercial and more helpful: practical planning advice, seasonal context, city comparisons, free or low-cost alternatives, and internal links to relevant city/category pages. Use deal cards as supporting source links rather than the entire page.

### Comparison Page Strategy

Comparison pages use `pageType: "comparison"` with `guideSections`, `planningTips`, and `comparisonRows`. They render a comparison table, Article schema, FAQPage schema, related searches, source-backed cards, and the same network planning section as other SEO pages.

### Related Searches And Destination Clusters

SEO pages render a 6-10 link `Related Local Searches` grid from evergreen searches plus page-specific related slugs. Orlando, Miami, and Tampa pages also render destination clusters that connect city pages, category pages, and the broader Florida Deals Hub network.

### Footer SEO Structure

The footer is organized into crawl-friendly groups: Florida Cities, Local Deal Categories, Florida Deals Network, and Company links. Internal links stay in the same tab; network links also stay in the same tab to keep the Florida Deals Hub experience connected.

## Adding Pages Or Cards Safely

When adding a new page, include a unique title, meta description, canonical path, Open Graph image, Twitter image, 3-5 FAQs, related pages, useful intro copy, and 3-6 real deal IDs. Avoid broad duplicate copy across pages. For guide pages, add `guideSections` and `planningTips` so the page has real informational depth.

When adding a new deal card, use a real source URL, descriptive image alt text, a safe offer label, a source name if available, and a clear category. Do not invent prices or savings. External deal links should open in a new tab with `rel="noopener noreferrer"`; internal Florida Deals Hub network links should stay in the same tab.
