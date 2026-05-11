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
  pageType?: "local" | "category" | "guide";
  guideSections?: {
    heading: string;
    body: string;
  }[];
  planningTips?: string[];
};

export const landingPages: LandingPageConfig[] = [
  {
    slug: "orlando-local-deals",
    title: "Orlando Local Deals | Attractions, Events & Family Activities",
    description:
      "Explore Orlando local deals including attractions, restaurants, family activities, events, and Florida weekend ideas.",
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
    title: "Florida Restaurant Deals | Dining Specials & Food Finds",
    description:
      "Find Florida restaurant deals, dining specials, food events, brunch spots, and local food experiences across the state.",
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
    title: "Free Things To Do In Florida | Beaches, Parks & Local Activities",
    description:
      "Discover free things to do in Florida including beaches, parks, family activities, outdoor attractions, and local experiences.",
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
  },
  {
    slug: "clearwater-local-deals",
    title: "Clearwater Local Deals | Beaches, Events & Family Activities",
    description:
      "Find Clearwater local deals and activity ideas including beaches, Pier 60 events, family attractions, outdoor activities, and Gulf Coast things to do.",
    h1: "Clearwater Local Deals",
    eyebrow: "Clearwater Beach and Gulf Coast",
    intro:
      "Use this Clearwater local deals page to compare beach activities, family attractions, sunset events, waterfront dining ideas, and Gulf Coast things to do before you go.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Clearwater-style white sand beach and blue Gulf water",
    dealIds: ["clearwater-beach-things-to-do", "clearwater-marine-aquarium-visit", "clearwater-pier-60-sunset-events", "st-pete-pier-events"],
    relatedSlugs: ["florida-beach-activities", "florida-family-deals", "florida-free-things-to-do", "st-petersburg-local-deals"],
    localContext: [
      "Useful for beach days, sunset walks, aquarium visits, and family-friendly Gulf Coast plans.",
      "Includes tourism and official attraction pages where hours, access, and ticket details are maintained.",
      "Weather, parking, beach conditions, and event schedules can change quickly."
    ]
  },
  {
    slug: "key-west-local-deals",
    title: "Key West Local Deals | Events, Tours & Island Things To Do",
    description:
      "Find Key West local deals and activity ideas including island tours, festivals, waterfront experiences, nightlife, museums, and free things to do.",
    h1: "Key West Local Deals",
    eyebrow: "Island activities and local events",
    intro:
      "Browse Key West local finds for festivals, historic seaport walks, water activities, museums, nightlife, island tours, and practical things to do in the Florida Keys.",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Tropical Key West pool and palm trees",
    dealIds: ["key-west-things-to-do", "key-west-fantasy-fest-events", "key-west-historic-seaport", "visit-florida-beach-guide"],
    relatedSlugs: ["florida-beach-activities", "florida-weekend-deals", "florida-date-night-deals", "best-florida-festivals-guide"],
    localContext: [
      "Useful for comparing island tours, waterfront districts, festival weekends, and walkable local experiences.",
      "Check event schedules, tour availability, parking, and weather before building a full day around one activity.",
      "Good for date nights, weekend stays, cruise-adjacent plans, and Florida Keys road trips."
    ]
  },
  {
    slug: "naples-local-deals",
    title: "Naples Local Deals | Beaches, Events & Things To Do",
    description:
      "Find Naples local deals and activity ideas including beaches, parks, events, dining districts, family activities, and Gulf Coast things to do.",
    h1: "Naples Local Deals",
    eyebrow: "Gulf Coast local discovery",
    intro:
      "Use this Naples local deals page to compare beaches, parks, dining areas, art events, outdoor activities, family ideas, and local things to do around the Paradise Coast.",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Sunny Naples-style Gulf Coast beach with clear water",
    dealIds: ["naples-things-to-do", "naples-beaches-parks", "naples-events-calendar", "visit-florida-beach-guide"],
    relatedSlugs: ["florida-beach-activities", "florida-outdoor-activities", "florida-weekend-deals", "florida-restaurant-deals"],
    localContext: [
      "Useful for beach days, nature preserves, art events, shopping districts, and dining-focused weekends.",
      "Outdoor access, parking, weather, and seasonal event calendars can change.",
      "Use official tourism and venue pages to confirm details before visiting."
    ]
  },
  {
    slug: "florida-theme-park-deals",
    title: "Florida Theme Park Deals | Orlando Tickets & Park Offers",
    description:
      "Find Florida theme park deals and official offer pages for Orlando parks, Tampa attractions, ticket options, family activities, and vacation planning.",
    h1: "Florida Theme Park Deals",
    eyebrow: "Theme parks and ticket planning",
    intro:
      "Compare official Florida theme park offer pages for Orlando parks, Tampa Bay attractions, ticket bundles, annual pass options, and family-focused activity planning.",
    image: "https://images.unsplash.com/photo-1570466343961-8a8a4e1b4ca4?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Theme park roller coaster and blue Florida sky",
    dealIds: ["disney-world-special-offers", "universal-orlando-offers", "orlando-seaworld-limited-time-offers", "busch-gardens-tampa-offers", "tampa-bay-citypass"],
    relatedSlugs: ["orlando-local-deals", "orlando-things-to-do-deals", "florida-attraction-deals", "best-florida-theme-parks-guide"],
    localContext: [
      "Good for comparing official ticket pages, package offers, annual pass options, and attraction bundles.",
      "Prices, blackout dates, residency requirements, and package terms can change by date.",
      "Confirm details with the park source before buying or reserving."
    ]
  },
  {
    slug: "florida-outdoor-activities",
    title: "Florida Outdoor Activities | Parks, Springs, Trails & Local Ideas",
    description:
      "Explore Florida outdoor activities including parks, beaches, springs, trails, paddling, wildlife viewing, and local activity ideas across the state.",
    h1: "Florida Outdoor Activities",
    eyebrow: "Parks, trails, water, and wildlife",
    intro:
      "Find Florida outdoor activity ideas for parks, beaches, springs, trails, paddling, wildlife viewing, outdoor events, and low-cost local adventures.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Sunlit Florida-style forest trail",
    dealIds: ["visit-florida-outdoor-adventure", "naples-beaches-parks", "daytona-beach-things-to-do", "st-augustine-free-things", "jacksonville-free-affordable-family-activities"],
    relatedSlugs: ["florida-beach-activities", "florida-free-things-to-do", "florida-family-deals", "best-beaches-in-florida-guide"],
    localContext: [
      "Useful for low-cost days outdoors, family walks, paddling, wildlife viewing, and beach-adjacent activities.",
      "Weather, trail conditions, tides, parking, and park hours can change.",
      "Check the official source before driving to a park, preserve, beach, or launch point."
    ]
  },
  {
    slug: "florida-beach-activities",
    title: "Florida Beach Activities | Beaches, Events & Coastal Things To Do",
    description:
      "Find Florida beach activities including free beach ideas, coastal events, family beach towns, waterfront dining, parks, and outdoor things to do.",
    h1: "Florida Beach Activities",
    eyebrow: "Coastal local finds",
    intro:
      "Browse Florida beach activity ideas for Gulf and Atlantic beach towns, sunset events, waterfront districts, parks, family days, and low-cost coastal plans.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Wide Florida beach with turquoise water",
    dealIds: ["visit-florida-beach-guide", "clearwater-beach-things-to-do", "clearwater-pier-60-sunset-events", "daytona-beach-things-to-do", "naples-beaches-parks"],
    relatedSlugs: ["clearwater-local-deals", "daytona-beach-local-deals", "naples-local-deals", "florida-outdoor-activities"],
    localContext: [
      "Useful for comparing public beach days, sunset events, coastal towns, and free waterfront activities.",
      "Parking, lifeguard coverage, weather, tides, and event schedules may change.",
      "Use official tourism pages for current access and local rules."
    ]
  },
  {
    slug: "florida-rainy-day-activities",
    title: "Florida Rainy Day Activities | Indoor Attractions & Local Ideas",
    description:
      "Find Florida rainy day activities including museums, aquariums, indoor attractions, restaurants, shopping, shows, and family-friendly things to do.",
    h1: "Florida Rainy Day Activities",
    eyebrow: "Indoor and weather-friendly ideas",
    intro:
      "Use this rainy day activity page to find museums, aquariums, indoor attractions, theater, dining, galleries, shopping, and family-friendly plans when Florida weather changes.",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Visitors viewing artwork inside a bright museum",
    dealIds: ["orlando-rainy-day-things-to-do", "clearwater-marine-aquarium-visit", "cummer-museum-free-admission", "tampa-fmopa-under-50", "broward-center-events"],
    relatedSlugs: ["florida-family-deals", "florida-attraction-deals", "florida-date-night-deals", "florida-event-deals"],
    localContext: [
      "Useful for museums, aquariums, theaters, galleries, indoor play, and dining plans.",
      "Hours, tickets, and show schedules can change quickly during busy or stormy periods.",
      "Check source pages before leaving, especially for timed-entry attractions."
    ]
  },
  {
    slug: "best-free-things-to-do-in-florida",
    title: "Best Free Things To Do In Florida | Parks, Beaches & Local Ideas",
    description:
      "Explore the best free things to do in Florida including beaches, parks, museums, events, art walks, markets, and family-friendly local ideas.",
    h1: "Best Free Things To Do In Florida",
    eyebrow: "Free Florida activity guide",
    intro:
      "Florida has more free things to do than most travelers realize: beaches, public parks, historic streets, art walks, farmers markets, free museum windows, waterfront districts, and city-run event calendars.",
    image: "https://images.unsplash.com/photo-1605804522243-7b235996771c?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Florida waterfront bridge and historic district view",
    dealIds: ["orlando-free-things-to-do", "st-augustine-free-things", "cummer-museum-free-admission", "clearwater-pier-60-sunset-events", "jaxparks-free-events"],
    relatedSlugs: ["florida-free-things-to-do", "florida-family-deals", "florida-beach-activities", "florida-outdoor-activities"],
    pageType: "guide",
    guideSections: [
      {
        heading: "Start with beaches, parks, and walkable districts",
        body:
          "Many of Florida's strongest free activities are public spaces rather than coupons. Beaches, riverwalks, historic districts, piers, public gardens, and waterfront parks can anchor an entire day with little or no admission cost. The real planning work is checking parking rules, public access points, hours, restrooms, weather, and whether an event changes the normal traffic pattern."
      },
      {
        heading: "Use official calendars for free events",
        body:
          "City calendars, tourism boards, park departments, museums, and neighborhood associations often list free concerts, movie nights, markets, art walks, fitness classes, and cultural festivals. These are high-value local finds because they change often and can be easy to miss on broad travel sites. Always confirm dates with the organizer before driving across town."
      },
      {
        heading: "Pair free ideas with low-cost nearby plans",
        body:
          "A free beach morning can become an affordable day when paired with a picnic, a self-guided historic walk, a public market, or a museum with a free admission window. Local Deals Florida groups these ideas with nearby city and category pages so users can build realistic plans instead of chasing unsupported discounts."
      }
    ],
    planningTips: ["Confirm parking and access rules.", "Check weather before beach or outdoor plans.", "Look for city calendars before weekends."]
  },
  {
    slug: "best-family-activities-in-florida",
    title: "Best Family Activities In Florida | Attractions, Parks & Local Ideas",
    description:
      "Find the best family activities in Florida including attractions, parks, museums, beaches, free events, aquariums, and weekend ideas.",
    h1: "Best Family Activities In Florida",
    eyebrow: "Family activity guide",
    intro:
      "Florida family activities range from major theme parks to free riverfront markets, wildlife attractions, aquariums, public beaches, museums, nature trails, and city-run events.",
    image: "https://images.unsplash.com/photo-1564429097439-e400382dc893?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Colorful indoor play space for family activities",
    dealIds: ["clearwater-marine-aquarium-visit", "orlando-gatorland-visit-orlando-special", "jacksonville-free-affordable-family-activities", "cummer-museum-free-admission", "tampa-bay-citypass"],
    relatedSlugs: ["florida-family-deals", "orlando-local-deals", "jacksonville-family-deals", "florida-free-things-to-do"],
    pageType: "guide",
    guideSections: [
      {
        heading: "Balance headline attractions with flexible local stops",
        body:
          "Theme parks and aquariums can be memorable anchors, but families often need flexible backup ideas: parks, playgrounds, free museum windows, markets, trails, and quick indoor stops when weather changes. The best family plan usually mixes one ticketed activity with one or two lower-cost local ideas nearby."
      },
      {
        heading: "Watch age ranges, nap windows, and travel time",
        body:
          "A deal is only useful if it fits the day. Check stroller rules, parking, food policies, timed-entry requirements, and whether the activity works for toddlers, older kids, grandparents, or mixed-age groups. Florida traffic and heat can turn a short drive into a longer outing, especially around holiday weekends."
      },
      {
        heading: "Use local pages for city-specific planning",
        body:
          "Orlando leans attraction-heavy, Jacksonville has strong riverfront and museum options, Clearwater is beach and aquarium friendly, and St. Augustine offers historic walks and low-cost sightseeing. Linking between city pages helps families compare realistic options without starting over."
      }
    ],
    planningTips: ["Check ticket windows before promising an activity.", "Keep an indoor backup for summer storms.", "Verify parking and stroller rules."]
  },
  {
    slug: "best-florida-weekend-activities",
    title: "Best Florida Weekend Activities | Events, Beaches & Local Plans",
    description:
      "Plan Florida weekend activities with local events, beaches, attractions, markets, restaurants, free things to do, and family-friendly ideas.",
    h1: "Best Florida Weekend Activities",
    eyebrow: "Weekend activity guide",
    intro:
      "Florida weekends can be built around beaches, markets, local festivals, attraction visits, waterfront dining, museum days, neighborhood events, and quick overnight trips.",
    image: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Boats on blue water near a sunny Florida marina",
    dealIds: ["daytona-beach-events", "las-olas-events", "st-pete-pier-events", "naples-events-calendar", "jacksonville-riverside-arts-market"],
    relatedSlugs: ["florida-weekend-deals", "miami-weekend-deals", "tampa-events-deals", "florida-event-deals"],
    pageType: "guide",
    guideSections: [
      {
        heading: "Build weekends around live calendars",
        body:
          "Weekend plans work best when they start with current event calendars. Markets, festivals, museum programs, waterfront concerts, and city events can change by week, and some require registration even when admission is free. Check the event source first, then add dining, beach time, or nearby attractions."
      },
      {
        heading: "Have a weather-friendly backup",
        body:
          "Florida weekends can shift quickly because of heat, afternoon storms, or seasonal crowds. Pair outdoor plans with nearby indoor options such as museums, theaters, aquariums, restaurants, galleries, or shopping districts. This keeps the weekend useful even if the first plan changes."
      },
      {
        heading: "Use city pages to narrow the search",
        body:
          "Miami weekends often lean nightlife, beach, and arts; Tampa Bay mixes waterfront events and attractions; Orlando works for theme parks and family activities; Jacksonville has markets and museums; and coastal towns like Clearwater, Daytona, Naples, and Key West are strong for beach-focused weekends."
      }
    ],
    planningTips: ["Check calendars midweek for weekend updates.", "Book timed tickets early when needed.", "Pair events with nearby dining."]
  },
  {
    slug: "best-date-night-ideas-florida",
    title: "Best Date Night Ideas In Florida | Restaurants, Events & Local Nights Out",
    description:
      "Find Florida date night ideas including restaurants, waterfront events, live shows, nightlife, museums, food finds, and weekend activities.",
    h1: "Best Date Night Ideas In Florida",
    eyebrow: "Date night guide",
    intro:
      "Florida date nights can be simple and local: waterfront walks, happy hours, theater, live music, art nights, sunset beaches, rooftop drinks, food markets, and low-key neighborhood events.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Outdoor restaurant table set for date night",
    dealIds: ["st-pete-lala-date-night", "st-pete-luna-happy-hour", "broward-center-events", "las-olas-events", "miami-sandrell-rivers-theater-offers"],
    relatedSlugs: ["florida-date-night-deals", "florida-restaurant-deals", "st-petersburg-date-night-deals", "miami-weekend-deals"],
    pageType: "guide",
    guideSections: [
      {
        heading: "Choose the mood before the deal",
        body:
          "A useful date night plan starts with the mood: casual drinks, a show, a waterfront walk, a food-focused evening, or a special occasion. Local deal pages can help find current options, but the right fit matters more than chasing a generic discount."
      },
      {
        heading: "Confirm reservations and show times",
        body:
          "Restaurant specials, happy hours, theater tickets, karaoke rooms, and event calendars may change by day or season. Confirm hours, reservation windows, dress codes, parking, and age restrictions with the source before building a full evening around one listing."
      },
      {
        heading: "Use nearby local pages for better plans",
        body:
          "St. Petersburg works well for waterfront dining and arts, Fort Lauderdale for Las Olas and live shows, Miami for nightlife and culture, and Tampa for downtown events. City and category links make it easier to pair dinner with something nearby."
      }
    ],
    planningTips: ["Confirm reservation rules.", "Check parking near nightlife districts.", "Build one backup activity nearby."]
  },
  {
    slug: "how-to-save-money-on-florida-attractions",
    title: "How To Save Money On Florida Attractions | Tickets & Local Tips",
    description:
      "Learn how to save money on Florida attractions with official offer pages, city passes, resident deals, free activities, and smart ticket planning.",
    h1: "How To Save Money On Florida Attractions",
    eyebrow: "Attraction savings guide",
    intro:
      "Saving on Florida attractions starts with checking official offer pages, city passes, resident promotions, free alternatives, off-peak timing, and bundled tickets before buying.",
    image: "https://images.unsplash.com/photo-1570466343961-8a8a4e1b4ca4?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Theme park roller coaster against a bright sky",
    dealIds: ["orlando-gatorland-visit-orlando-special", "tampa-bay-citypass", "st-augustine-attraction-coupons", "miami-attraction-deals", "fort-lauderdale-resident-attraction-offers"],
    relatedSlugs: ["florida-attraction-deals", "florida-theme-park-deals", "florida-local-deals-under-50", "orlando-things-to-do-deals"],
    pageType: "guide",
    guideSections: [
      {
        heading: "Start with official attraction and tourism pages",
        body:
          "Official attraction pages and destination tourism boards are usually the safest place to verify current terms. They may list resident offers, seasonal packages, bundled admissions, museum free days, city passes, and attraction-specific promotions without relying on unsupported coupon claims."
      },
      {
        heading: "Compare bundles against your actual plan",
        body:
          "City passes and bundled tickets can be valuable when you will use enough included attractions. Before buying, compare the number of days, travel distance between attractions, reservation requirements, expiration windows, blackout dates, and whether the included stops match your group."
      },
      {
        heading: "Mix paid attractions with free local ideas",
        body:
          "A lower-cost Florida activity day often combines one paid attraction with a free beach, park, public market, historic district, or waterfront walk. This keeps the day full without stacking expensive tickets for every hour."
      }
    ],
    planningTips: ["Check resident requirements.", "Compare bundle expiration windows.", "Do not assume third-party savings are current."]
  },
  {
    slug: "best-florida-theme-parks-guide",
    title: "Best Florida Theme Parks Guide | Orlando, Tampa & Ticket Tips",
    description:
      "Compare Florida theme parks, Orlando attractions, Tampa parks, ticket offers, family planning tips, and official theme park deal pages.",
    h1: "Best Florida Theme Parks Guide",
    eyebrow: "Theme park planning guide",
    intro:
      "Florida theme park planning is about more than choosing a park. Tickets, lodging, transportation, age mix, weather, crowds, dining, and rest days all affect the value of the trip.",
    image: "https://images.unsplash.com/photo-1597466599360-3b9775841aec?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Orlando theme park castle and blue sky",
    dealIds: ["disney-world-special-offers", "universal-orlando-offers", "orlando-seaworld-limited-time-offers", "busch-gardens-tampa-offers", "tampa-bay-citypass"],
    relatedSlugs: ["florida-theme-park-deals", "orlando-local-deals", "florida-attraction-deals", "how-to-save-money-on-florida-attractions"],
    pageType: "guide",
    guideSections: [
      {
        heading: "Match the park to the group",
        body:
          "Orlando parks can be ideal for multi-day vacations, character experiences, thrill rides, water parks, and entertainment districts. Tampa adds a strong coaster and animal-focused option. The best value depends on age range, ride tolerance, budget, hotel location, and how much downtime the group needs."
      },
      {
        heading: "Check official offer pages before booking",
        body:
          "Theme park ticket and package offers can change by season, residency, hotel stay, number of days, and special events. Official offer pages are the right place to confirm what is active, what dates qualify, and whether a promotion has restrictions."
      },
      {
        heading: "Plan around weather and fatigue",
        body:
          "Florida heat and summer storms can make rest time valuable. A smart theme park trip may include morning park time, indoor breaks, evening entertainment, and a non-park day with free or low-cost local activities nearby."
      }
    ],
    planningTips: ["Compare date-specific ticket terms.", "Build in rest time.", "Check park reservation or event rules."]
  },
  {
    slug: "best-florida-food-cities",
    title: "Best Florida Food Cities | Dining, Markets & Local Food Finds",
    description:
      "Explore the best Florida food cities for restaurants, markets, brunch, seafood, date nights, food events, and local dining experiences.",
    h1: "Best Florida Food Cities",
    eyebrow: "Florida dining guide",
    intro:
      "Florida food cities are shaped by waterfront dining, Caribbean and Latin influence, seafood, brunch culture, farmers markets, food halls, resort dining, and neighborhood restaurant scenes.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Brunch table with coffee and breakfast plates",
    dealIds: ["st-pete-luna-happy-hour", "jacksonville-riverside-arts-market", "tampa-downtown-community-events", "miami-day-pass-deals", "las-olas-events"],
    relatedSlugs: ["florida-restaurant-deals", "florida-food-and-drink-deals", "fort-lauderdale-restaurant-deals", "florida-date-night-deals"],
    pageType: "guide",
    guideSections: [
      {
        heading: "Miami, St. Pete, Tampa, and Fort Lauderdale all work differently",
        body:
          "Miami is strong for nightlife, Latin food, hotel dining, and cultural neighborhoods. St. Petersburg has waterfront restaurants, happy hours, and arts districts. Tampa blends downtown events, food trucks, Cuban influence, and casual dining. Fort Lauderdale works well for Las Olas, beach-area restaurants, and date nights."
      },
      {
        heading: "Look for food events, not only restaurant discounts",
        body:
          "Food value often shows up through markets, happy hours, brunch specials, restaurant weeks, festivals, and neighborhood events rather than simple coupons. These listings change quickly, so source pages and event calendars matter."
      },
      {
        heading: "Confirm menus and hours before visiting",
        body:
          "Restaurant offers can depend on day, time, location, dine-in rules, and menu availability. Check current details before making a reservation, especially around holidays, event weekends, and beach or downtown districts."
      }
    ],
    planningTips: ["Check restaurant hours directly.", "Search markets for low-cost food finds.", "Pair dining with nearby events."]
  },
  {
    slug: "best-beaches-in-florida-guide",
    title: "Best Beaches In Florida Guide | Beach Towns & Coastal Activities",
    description:
      "Explore Florida beaches, beach towns, coastal activities, free beach ideas, parks, sunset events, and family-friendly waterfront plans.",
    h1: "Best Beaches In Florida Guide",
    eyebrow: "Florida beach planning guide",
    intro:
      "Florida beaches vary widely: Gulf Coast sunsets, Atlantic surf towns, Keys water activities, family-friendly public parks, quiet nature preserves, and lively waterfront districts all create different beach days.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Wide Florida beach with blue water and white sand",
    dealIds: ["visit-florida-beach-guide", "clearwater-beach-things-to-do", "daytona-beach-things-to-do", "naples-beaches-parks", "key-west-things-to-do"],
    relatedSlugs: ["florida-beach-activities", "clearwater-local-deals", "daytona-beach-local-deals", "naples-local-deals"],
    pageType: "guide",
    guideSections: [
      {
        heading: "Choose the coast by the day you want",
        body:
          "Clearwater and Naples are strong for Gulf Coast beach days, sunsets, and calmer water. Daytona Beach is better for a classic Atlantic beach-town feel and events. Key West mixes waterfront walks, boating, nightlife, and island history. St. Augustine adds historic sightseeing near the coast."
      },
      {
        heading: "Free does not always mean friction-free",
        body:
          "Many beach activities are free, but parking, bridge traffic, weather, tides, facilities, beach rules, and event closures can affect the day. Official tourism pages and city beach pages are useful for current access details."
      },
      {
        heading: "Pair beaches with nearby local activities",
        body:
          "A full coastal day can include a public beach, pier or marina walk, outdoor market, waterfront restaurant, sunset event, or nature preserve. Local pages help users connect beach time with realistic nearby ideas."
      }
    ],
    planningTips: ["Check parking before arrival.", "Watch weather and tide conditions.", "Look for nearby sunset events."]
  },
  {
    slug: "florida-rainy-day-guide",
    title: "Florida Rainy Day Guide | Indoor Activities & Weather-Friendly Ideas",
    description:
      "Find Florida rainy day ideas including museums, aquariums, indoor attractions, restaurants, theaters, shopping, galleries, and family activities.",
    h1: "Florida Rainy Day Guide",
    eyebrow: "Indoor Florida planning guide",
    intro:
      "Rainy days are part of Florida planning, especially in summer. A useful backup list can save a family trip, date night, beach weekend, or attraction day when the weather turns.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Photography prints displayed in a museum gallery",
    dealIds: ["orlando-rainy-day-things-to-do", "clearwater-marine-aquarium-visit", "cummer-museum-free-admission", "tampa-fmopa-under-50", "miami-arts-culture-deals"],
    relatedSlugs: ["florida-rainy-day-activities", "florida-family-deals", "florida-attraction-deals", "florida-date-night-deals"],
    pageType: "guide",
    guideSections: [
      {
        heading: "Keep a short indoor list for every trip",
        body:
          "Good rainy day options include museums, aquariums, theaters, galleries, food halls, shopping districts, indoor attractions, hotel day passes, and long lunches. The best backup is nearby, easy to book, and flexible on timing."
      },
      {
        heading: "Check timed entry and weather policies",
        body:
          "Indoor attractions may sell timed tickets, adjust hours, or become busy when storms hit. Confirm availability before leaving, and review parking, refund policies, stroller rules, food options, and accessibility needs."
      },
      {
        heading: "Use rainy days for local discovery",
        body:
          "A stormy afternoon can be a good excuse to explore a museum, restaurant district, gallery, brewery, theater, or aquarium you might otherwise skip. Local category pages make those backups easier to find by city and activity type."
      }
    ],
    planningTips: ["Save one indoor backup per day.", "Check timed-entry availability.", "Avoid long drives during storms."]
  },
  {
    slug: "best-florida-festivals-guide",
    title: "Best Florida Festivals Guide | Events, Food, Arts & Weekend Ideas",
    description:
      "Explore Florida festivals including food events, arts festivals, beach events, cultural celebrations, family weekends, and local event calendars.",
    h1: "Best Florida Festivals Guide",
    eyebrow: "Festival and event guide",
    intro:
      "Florida festivals can turn a normal weekend into a full local trip: food events, art walks, waterfront concerts, cultural celebrations, beach festivals, holiday markets, and neighborhood events.",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Outdoor concert and festival crowd at sunset",
    dealIds: ["key-west-fantasy-fest-events", "daytona-beach-events", "naples-events-calendar", "st-pete-pier-events", "las-olas-events"],
    relatedSlugs: ["florida-event-deals", "florida-weekend-deals", "miami-weekend-deals", "tampa-events-deals"],
    pageType: "guide",
    guideSections: [
      {
        heading: "Use official event calendars first",
        body:
          "Festival dates, ticket windows, locations, road closures, parking, and weather policies can change. Official calendars from tourism boards, venues, cities, and festival organizers are the most reliable starting points."
      },
      {
        heading: "Plan around crowd and lodging demand",
        body:
          "Major festival weekends can affect hotel rates, rideshare availability, restaurant reservations, and parking. Check dates early, then use related Florida hotel and flight sites when a local event turns into an overnight trip."
      },
      {
        heading: "Look beyond the headline event",
        body:
          "The best festival weekends often include surrounding activities: waterfront walks, nearby restaurants, public markets, museums, beach time, or free community programming. Related local pages help users build a more complete plan."
      }
    ],
    planningTips: ["Confirm festival dates with the organizer.", "Check parking and road closures.", "Book popular weekends early."]
  }
];

export function getLandingPage(slug: string) {
  return landingPages.find((page) => page.slug === slug);
}

export function landingPagePath(slug: string) {
  return `/${slug}`;
}
