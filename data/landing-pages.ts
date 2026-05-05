export type LandingPageConfig = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  image: string;
  imageAlt: string;
  dealIds: string[];
  relatedSlugs: string[];
  localContext?: string[];
};

export const landingPages: LandingPageConfig[] = [
  {
    slug: "orlando-local-deals",
    title: "Orlando Local Deals | Restaurants, Events & Things To Do",
    description:
      "Find Orlando local deals including restaurant specials, attractions, family activities, weekend events, and things to do across Central Florida.",
    h1: "Orlando Local Deals",
    eyebrow: "Central Florida local finds",
    intro:
      "Browse local Orlando deals for attractions, events, family activities, weekend plans, and nearby hotels when a local day turns into a stay. These curated local finds point to official offer pages and current details across Central Florida.",
    image: "https://images.unsplash.com/photo-1597466599360-3b9775841aec?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Orlando theme park castle and blue sky",
    dealIds: [
      "orlando-gatorland-visit-orlando-special",
      "orlando-seaworld-limited-time-offers",
      "orlando-official-offers",
      "orlando-budget-things-to-do",
      "orlando-free-things-to-do"
    ],
    relatedSlugs: ["orlando-things-to-do-deals", "florida-attraction-deals", "florida-family-deals", "florida-local-deals-under-50"],
    localContext: [
      "Useful for attraction days, visiting family, and Central Florida weekend planning.",
      "Includes official source pages for theme parks, budget ideas, and free things to do.",
      "Check date-specific terms before buying tickets or planning around an offer."
    ]
  },
  {
    slug: "miami-local-deals",
    title: "Miami Local Deals | Restaurants, Events & Things To Do",
    description:
      "Find Miami local deals including attraction offers, arts events, day passes, restaurant ideas, beaches, and things to do around Miami and Miami Beach.",
    h1: "Miami Local Deals",
    eyebrow: "Miami and beaches",
    intro:
      "Find current Miami local searches for attractions, arts, culture, day passes, and weekend-friendly things to do. Deal details may change, so confirm availability with the official source.",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Miami beach and skyline on a sunny day",
    dealIds: [
      "miami-official-special-offers",
      "miami-sandrell-rivers-theater-offers",
      "miami-day-pass-deals",
      "miami-attraction-deals",
      "miami-arts-culture-deals"
    ],
    relatedSlugs: ["miami-weekend-deals", "florida-event-deals", "florida-date-night-deals", "florida-food-and-drink-deals"]
  },
  {
    slug: "tampa-local-deals",
    title: "Tampa Local Deals | Events, Attractions & Things To Do",
    description:
      "Find Tampa local deals including attraction offers, events, food and drink finds, museums, family activities, and weekend things to do.",
    h1: "Tampa Local Deals",
    eyebrow: "Tampa Bay local searches",
    intro:
      "Browse Tampa local deal finds for attractions, downtown events, museums, food, and things to do around Tampa Bay. Check current details before planning your visit.",
    image: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Food truck serving food at an outdoor Tampa-style event",
    dealIds: ["tampa-bay-citypass", "tampa-fmopa-under-50", "busch-gardens-tampa-offers", "tampa-downtown-community-events"],
    relatedSlugs: ["tampa-events-deals", "florida-attraction-deals", "florida-food-and-drink-deals", "florida-weekend-deals"]
  },
  {
    slug: "fort-lauderdale-local-deals",
    title: "Fort Lauderdale Local Deals | Restaurants, Events & Things To Do",
    description:
      "Find Fort Lauderdale local deals including attraction offers, restaurants, boating, nightlife, weekend events, and things to do near the beach.",
    h1: "Fort Lauderdale Local Deals",
    eyebrow: "Beach, boating, and local offers",
    intro:
      "Use this page to find Fort Lauderdale local deal pages for attractions, events, resident offers, weekend ideas, boating, dining, and nightlife.",
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Fort Lauderdale beach road with palm trees",
    dealIds: [
      "fort-lauderdale-lauderdeals",
      "fort-lauderdale-things-to-do-deals",
      "fort-lauderdale-resident-attraction-offers",
      "broward-center-events",
      "las-olas-events"
    ],
    relatedSlugs: ["fort-lauderdale-restaurant-deals", "florida-weekend-deals", "florida-date-night-deals", "florida-attraction-deals"]
  },
  {
    slug: "jacksonville-local-deals",
    title: "Jacksonville Local Deals | Events, Family Activities & Things To Do",
    description:
      "Find Jacksonville local deals including family activities, free events, museums, markets, riverfront ideas, and things to do around Northeast Florida.",
    h1: "Jacksonville Local Deals",
    eyebrow: "Northeast Florida local finds",
    intro:
      "Browse Jacksonville local deal finds for family activities, free events, arts, markets, parks, and current local things to do.",
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Jacksonville museum and cultural district building",
    dealIds: [
      "jacksonville-official-deals",
      "cummer-museum-free-admission",
      "jacksonville-riverside-arts-market",
      "jacksonville-free-affordable-family-activities",
      "jaxparks-free-events"
    ],
    relatedSlugs: ["jacksonville-family-deals", "florida-free-things-to-do", "florida-family-deals", "florida-event-deals"]
  },
  {
    slug: "st-petersburg-local-deals",
    title: "St. Petersburg Local Deals | Restaurants, Events & Things To Do",
    description:
      "Find St. Petersburg local deals including restaurant offers, waterfront events, date night ideas, arts, dining, and things to do around St. Pete.",
    h1: "St. Petersburg Local Deals",
    eyebrow: "St. Pete dining and waterfront finds",
    intro:
      "Explore St. Petersburg local finds for waterfront events, restaurant specials, date night ideas, and current things to do around St. Pete.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Outdoor restaurant table near the water for a St. Petersburg night out",
    dealIds: ["st-pete-pier-events", "st-pete-luna-happy-hour", "st-pete-lala-date-night", "tampa-bay-citypass"],
    relatedSlugs: ["st-petersburg-date-night-deals", "tampa-local-deals", "florida-food-and-drink-deals", "florida-weekend-deals"]
  },
  {
    slug: "daytona-beach-local-deals",
    title: "Daytona Beach Local Deals | Events, Attractions & Things To Do",
    description:
      "Find Daytona Beach local deals including events, attractions, beach ideas, family activities, speedway tours, and things to do around Daytona.",
    h1: "Daytona Beach Local Deals",
    eyebrow: "Beach events and attractions",
    intro:
      "Use this Daytona Beach local deals page to check official events, attraction details, Speedway tours, beach ideas, and current things to do.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Sunny Daytona-style beach with waves and open sand",
    dealIds: ["daytona-speedway-tours", "daytona-beach-events", "daytona-beach-things-to-do"],
    relatedSlugs: ["florida-weekend-deals", "florida-attraction-deals", "florida-things-to-do-deals", "florida-free-things-to-do"]
  },
  {
    slug: "st-augustine-local-deals",
    title: "St. Augustine Local Deals | Attractions, Events & Things To Do",
    description:
      "Find St. Augustine local deals including attraction coupons, free things to do, art events, historic district ideas, tours, and local experiences.",
    h1: "St. Augustine Local Deals",
    eyebrow: "Historic district local finds",
    intro:
      "Find St. Augustine local deals for attraction coupons, free things to do, arts events, historic tours, family activities, and useful local ideas near places to stay.",
    image: "https://images.unsplash.com/photo-1604164448130-d1df213c64a3?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Historic St. Augustine street with old buildings",
    dealIds: ["st-augustine-attraction-coupons", "st-augustine-free-things", "st-augustine-art-association-calendar"],
    relatedSlugs: ["florida-free-things-to-do", "florida-attraction-deals", "florida-things-to-do-deals", "daytona-beach-local-deals"]
  },
  {
    slug: "florida-restaurant-deals",
    title: "Florida Restaurant Deals | Food, Drinks & Local Dining Offers",
    description:
      "Find Florida restaurant deals including food specials, brunch offers, date night options, happy hours, and local dining deals across major Florida cities.",
    h1: "Florida Restaurant Deals",
    eyebrow: "Food, drinks, and dining offers",
    intro:
      "Browse featured Florida restaurant and dining-related local finds. Availability may vary, so check the restaurant or tourism source before making plans.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Restaurant dining room with warm lighting",
    dealIds: ["st-pete-luna-happy-hour", "tampa-downtown-community-events", "jacksonville-riverside-arts-market", "miami-day-pass-deals"],
    relatedSlugs: ["fort-lauderdale-restaurant-deals", "florida-date-night-deals", "florida-food-and-drink-deals", "st-petersburg-date-night-deals"],
    localContext: [
      "Built for comparing dining, happy hour, market, and date-night-friendly local finds.",
      "Cards point to restaurant pages, tourism pages, venues, and official public calendars.",
      "Availability may vary by location, day of week, and provider."
    ]
  },
  {
    slug: "florida-event-deals",
    title: "Florida Event Deals | Local Events, Shows & Weekend Ideas",
    description:
      "Find Florida event deals and local event pages for concerts, arts, museums, markets, family activities, and weekend things to do.",
    h1: "Florida Event Deals",
    eyebrow: "Events and local calendars",
    intro:
      "Explore current local event pages across Florida, including official calendars, venues, museums, markets, and weekend-friendly local searches.",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Outdoor concert crowd at sunset",
    dealIds: ["miami-sandrell-rivers-theater-offers", "broward-center-events", "st-pete-pier-events", "jaxparks-free-events", "daytona-beach-events"],
    relatedSlugs: ["miami-weekend-deals", "tampa-events-deals", "florida-weekend-deals", "florida-free-things-to-do"]
  },
  {
    slug: "florida-attraction-deals",
    title: "Florida Attraction Deals | Theme Parks, Museums & Local Offers",
    description:
      "Find Florida attraction deals including theme park offers, museum discounts, local attraction coupons, family activities, and things to do.",
    h1: "Florida Attraction Deals",
    eyebrow: "Attractions and admission offers",
    intro:
      "Find current Florida attraction pages for theme parks, museums, historic sites, tours, family activities, and official offer pages.",
    image: "https://images.unsplash.com/photo-1570466343961-8a8a4e1b4ca4?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Theme park roller coaster against the sky",
    dealIds: ["orlando-gatorland-visit-orlando-special", "orlando-seaworld-limited-time-offers", "tampa-bay-citypass", "miami-attraction-deals", "st-augustine-attraction-coupons"],
    relatedSlugs: ["orlando-local-deals", "florida-family-deals", "florida-things-to-do-deals", "florida-local-deals-under-50"],
    localContext: [
      "Good for checking theme parks, museums, historic sites, tours, and family attractions.",
      "Official source pages are prioritized when available.",
      "Ticket prices, blackout dates, and package terms can change."
    ]
  },
  {
    slug: "florida-family-deals",
    title: "Florida Family Deals | Attractions, Events & Kid-Friendly Ideas",
    description:
      "Find Florida family deals including attractions, museums, free activities, markets, events, and kid-friendly things to do across Florida.",
    h1: "Florida Family Deals",
    eyebrow: "Family activities and local ideas",
    intro:
      "Browse Florida family-friendly deal finds for museums, markets, parks, attractions, low-cost ideas, and event calendars worth checking before you go.",
    image: "https://images.unsplash.com/photo-1564429097439-e400382dc893?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Colorful indoor play space for family activities",
    dealIds: ["jacksonville-free-affordable-family-activities", "cummer-museum-free-admission", "orlando-free-things-to-do", "tampa-bay-citypass", "daytona-speedway-tours"],
    relatedSlugs: ["jacksonville-family-deals", "orlando-local-deals", "florida-free-things-to-do", "florida-attraction-deals"]
  },
  {
    slug: "florida-weekend-deals",
    title: "Florida Weekend Deals | Events, Restaurants & Things To Do",
    description:
      "Find Florida weekend deals including events, attractions, restaurants, markets, family activities, beaches, and local things to do this weekend.",
    h1: "Florida Weekend Deals",
    eyebrow: "Weekend plans across Florida",
    intro:
      "Use these weekend-focused local finds to compare current event calendars, dining ideas, attractions, beaches, and things to do across Florida.",
    image: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Boats on blue water near a sunny marina",
    dealIds: ["las-olas-events", "st-pete-pier-events", "daytona-beach-events", "jacksonville-riverside-arts-market", "miami-sandrell-rivers-theater-offers"],
    relatedSlugs: ["miami-weekend-deals", "tampa-events-deals", "florida-event-deals", "florida-date-night-deals"]
  },
  {
    slug: "florida-things-to-do-deals",
    title: "Florida Things To Do Deals | Local Offers & Event Ideas",
    description:
      "Find Florida things to do deals including attractions, events, free activities, local experiences, weekend plans, and city guides.",
    h1: "Florida Things To Do Deals",
    eyebrow: "Useful local searches",
    intro:
      "Find current Florida things-to-do pages with official attraction offers, tourism guides, free activities, event calendars, and local experience ideas.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "People relaxing near a sunny waterfront park",
    dealIds: ["orlando-official-offers", "miami-official-special-offers", "fort-lauderdale-lauderdeals", "daytona-beach-things-to-do", "st-augustine-free-things"],
    relatedSlugs: ["florida-free-things-to-do", "florida-attraction-deals", "florida-weekend-deals", "orlando-things-to-do-deals"]
  },
  {
    slug: "florida-free-things-to-do",
    title: "Free Things To Do In Florida | Events, Attractions & Local Ideas",
    description:
      "Find free and low-cost things to do in Florida including local events, family activities, beaches, festivals, and weekend ideas.",
    h1: "Free Things To Do In Florida",
    eyebrow: "Free and low-cost local finds",
    intro:
      "Browse official free and low-cost Florida activity pages for museums, beaches, parks, markets, art events, and local calendars.",
    image: "https://images.unsplash.com/photo-1605804522243-7b235996771c?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Florida waterfront bridge and historic district view",
    dealIds: ["orlando-free-things-to-do", "cummer-museum-free-admission", "st-augustine-free-things", "st-pete-pier-events", "jaxparks-free-events"],
    relatedSlugs: ["florida-family-deals", "florida-event-deals", "jacksonville-local-deals", "st-augustine-local-deals"],
    localContext: [
      "Useful for parks, museums, markets, beaches, art walks, and local public calendars.",
      "Free does not always mean registration-free, so check current details with the source.",
      "Includes low-cost local ideas where official free options are limited."
    ]
  },
  {
    slug: "florida-date-night-deals",
    title: "Florida Date Night Deals | Restaurants, Events & Local Experiences",
    description:
      "Find Florida date night deals including restaurants, events, activities, local experiences, and weekend ideas across Orlando, Miami, Tampa, Jacksonville, and more.",
    h1: "Florida Date Night Deals",
    eyebrow: "Restaurants, events, and local nights out",
    intro:
      "Use these curated date night finds to compare restaurants, theater, nightlife, waterfront events, local experiences, and staycation ideas around Florida.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Outdoor restaurant table set for date night",
    dealIds: ["st-pete-lala-date-night", "st-pete-luna-happy-hour", "miami-sandrell-rivers-theater-offers", "las-olas-events", "broward-center-events"],
    relatedSlugs: ["st-petersburg-date-night-deals", "florida-restaurant-deals", "florida-event-deals", "miami-weekend-deals"],
    localContext: [
      "Built for nights out, restaurant ideas, shows, waterfront plans, and local experiences.",
      "Featured finds include real venues and official event or restaurant pages.",
      "Check reservation requirements, show times, and current terms before heading out."
    ]
  },
  {
    slug: "florida-food-and-drink-deals",
    title: "Florida Food And Drink Deals | Restaurants, Markets & Happy Hours",
    description:
      "Find Florida food and drink deals including restaurant offers, happy hours, local markets, date night ideas, and dining-related things to do.",
    h1: "Florida Food And Drink Deals",
    eyebrow: "Dining, drinks, and markets",
    intro:
      "Browse food and drink finds across Florida, including restaurant offer pages, happy hour listings, markets, and local dining experiences.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Brunch table with breakfast plates and coffee",
    dealIds: ["st-pete-luna-happy-hour", "tampa-downtown-community-events", "jacksonville-riverside-arts-market", "miami-day-pass-deals"],
    relatedSlugs: ["florida-restaurant-deals", "fort-lauderdale-restaurant-deals", "florida-date-night-deals", "st-petersburg-date-night-deals"]
  },
  {
    slug: "florida-local-deals-under-50",
    title: "Florida Local Deals Under $50 | Affordable Things To Do",
    description:
      "Find Florida local deals under $50 including affordable attractions, museums, family activities, free events, markets, and low-cost things to do.",
    h1: "Florida Local Deals Under $50",
    eyebrow: "Affordable local ideas",
    intro:
      "Find affordable Florida local searches with official pages for under-$50 activities, free events, museums, markets, and budget-friendly things to do.",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Mini golf green and putters for affordable family fun",
    dealIds: ["orlando-budget-things-to-do", "tampa-fmopa-under-50", "st-augustine-free-things", "cummer-museum-free-admission", "jacksonville-free-affordable-family-activities"],
    relatedSlugs: ["florida-free-things-to-do", "florida-family-deals", "florida-things-to-do-deals", "orlando-local-deals"]
  },
  {
    slug: "orlando-things-to-do-deals",
    title: "Orlando Things To Do Deals | Attractions, Events & Family Ideas",
    description:
      "Find Orlando things to do deals including attraction offers, family activities, budget-friendly ideas, free things to do, and local experiences.",
    h1: "Orlando Things To Do Deals",
    eyebrow: "Attractions and local ideas",
    intro:
      "Find Orlando things-to-do pages for theme parks, attractions, free activities, budget-friendly ideas, and current local offers in Central Florida.",
    image: "https://images.unsplash.com/photo-1570466343961-8a8a4e1b4ca4?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Orlando theme park ride with blue sky",
    dealIds: ["orlando-gatorland-visit-orlando-special", "orlando-seaworld-limited-time-offers", "orlando-official-offers", "orlando-budget-things-to-do", "orlando-free-things-to-do"],
    relatedSlugs: ["orlando-local-deals", "florida-attraction-deals", "florida-family-deals", "florida-local-deals-under-50"]
  },
  {
    slug: "miami-weekend-deals",
    title: "Miami Weekend Deals | Events, Restaurants & Things To Do",
    description:
      "Find Miami weekend deals including events, restaurant offers, nightlife, attractions, beaches, and local things to do this weekend.",
    h1: "Miami Weekend Deals",
    eyebrow: "Weekend in Miami",
    intro:
      "Use this Miami weekend deals page to compare events, attraction offers, arts, day passes, restaurants, beaches, nearby hotels, and current local things to do.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Rooftop bar and nightlife setting with city lights",
    dealIds: ["miami-sandrell-rivers-theater-offers", "miami-day-pass-deals", "miami-attraction-deals", "miami-arts-culture-deals", "miami-official-special-offers"],
    relatedSlugs: ["miami-local-deals", "florida-event-deals", "florida-date-night-deals", "florida-food-and-drink-deals"],
    localContext: [
      "Built for weekend planning across Miami, Miami Beach, arts districts, attractions, and nightlife.",
      "Includes official destination pages and venue pages with current details.",
      "Review event dates, ticket availability, and deal terms directly with each source."
    ]
  },
  {
    slug: "tampa-events-deals",
    title: "Tampa Events Deals | Weekend Events, Food & Things To Do",
    description:
      "Find Tampa event deals including downtown events, food trucks, waterfront activities, museums, attractions, and weekend things to do.",
    h1: "Tampa Events Deals",
    eyebrow: "Events around Tampa Bay",
    intro:
      "Browse Tampa events and local deal pages for downtown programming, food truck events, attraction offers, museums, weekend plans, and nearby hotel options.",
    image: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Food truck at an outdoor Tampa event",
    dealIds: ["tampa-downtown-community-events", "st-pete-pier-events", "busch-gardens-tampa-offers", "tampa-bay-citypass", "tampa-fmopa-under-50"],
    relatedSlugs: ["tampa-local-deals", "florida-event-deals", "florida-weekend-deals", "florida-food-and-drink-deals"],
    localContext: [
      "Good for checking downtown programming, museum visits, and Tampa Bay event calendars.",
      "Includes venue and tourism pages where times and ticket details are maintained by the source.",
      "Availability can change for weather, holidays, and special-event weekends."
    ]
  },
  {
    slug: "jacksonville-family-deals",
    title: "Jacksonville Family Deals | Events, Museums & Things To Do",
    description:
      "Find Jacksonville family deals including free activities, museums, markets, parks, local events, and kid-friendly things to do.",
    h1: "Jacksonville Family Deals",
    eyebrow: "Family-friendly Northeast Florida",
    intro:
      "Find Jacksonville family deal pages for free admission ideas, museums, riverfront events, markets, parks, and kid-friendly local searches.",
    image: "https://images.unsplash.com/photo-1564429097439-e400382dc893?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Colorful indoor play space for family activity ideas",
    dealIds: ["jacksonville-free-affordable-family-activities", "cummer-museum-free-admission", "jacksonville-riverside-arts-market", "jaxparks-free-events", "jacksonville-official-deals"],
    relatedSlugs: ["jacksonville-local-deals", "florida-family-deals", "florida-free-things-to-do", "florida-event-deals"]
  },
  {
    slug: "fort-lauderdale-restaurant-deals",
    title: "Fort Lauderdale Restaurant Deals | Dining, Events & Date Night Ideas",
    description:
      "Find Fort Lauderdale restaurant deals, dining ideas, date night options, Las Olas events, local offers, and things to do near the beach.",
    h1: "Fort Lauderdale Restaurant Deals",
    eyebrow: "Dining near the beach",
    intro:
      "Use this Fort Lauderdale dining page for local offer hubs, Las Olas events, date night ideas, beach-area things to do, and current details.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Restaurant dining room with warm lights",
    dealIds: ["fort-lauderdale-lauderdeals", "las-olas-events", "broward-center-events", "fort-lauderdale-things-to-do-deals"],
    relatedSlugs: ["florida-restaurant-deals", "florida-date-night-deals", "fort-lauderdale-local-deals", "florida-food-and-drink-deals"]
  },
  {
    slug: "st-petersburg-date-night-deals",
    title: "St. Petersburg Date Night Deals | Restaurants, Events & Local Ideas",
    description:
      "Find St. Petersburg date night deals including restaurants, waterfront events, happy hours, karaoke, local experiences, and weekend ideas.",
    h1: "St. Petersburg Date Night Deals",
    eyebrow: "St. Pete nights out",
    intro:
      "Find St. Petersburg date night ideas with restaurant offers, waterfront events, karaoke, local experiences, and current details to check before going.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Outdoor restaurant table for date night by the water",
    dealIds: ["st-pete-lala-date-night", "st-pete-luna-happy-hour", "st-pete-pier-events", "tampa-downtown-community-events"],
    relatedSlugs: ["st-petersburg-local-deals", "florida-date-night-deals", "florida-restaurant-deals", "florida-weekend-deals"]
  }
];

export function getLandingPage(slug: string) {
  return landingPages.find((page) => page.slug === slug);
}

export function landingPagePath(slug: string) {
  return `/${slug}`;
}
