import type { LandingPageConfig } from "./landing-pages";

const orlandoGallery = [
  { src: "https://images.unsplash.com/photo-1597466599360-3b9775841aec?auto=format&fit=crop&w=900&q=80", alt: "Orlando theme park skyline", caption: "Build major park days around realistic travel time and breaks." },
  { src: "https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?auto=format&fit=crop&w=900&q=80", alt: "Florida roller coaster", caption: "Compare park fit, ticket options, and height requirements before visiting." },
  { src: "https://images.unsplash.com/photo-1614065613125-17553fbc59f6?auto=format&fit=crop&w=900&q=80", alt: "Florida wildlife attraction", caption: "Add wildlife, airboat, or indoor activities between theme park days." }
];

const waterGallery = [
  { src: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=900&q=80", alt: "Miami waterfront skyline", caption: "Choose boat experiences by departure area, duration, and weather." },
  { src: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?auto=format&fit=crop&w=900&q=80", alt: "Key West tropical coast", caption: "Sunset timing and cruise schedules shape the best water plans." },
  { src: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=80", alt: "Florida Gulf Coast water", caption: "Keep a weather-friendly backup when planning time on the water." }
];

export const attractionAuthorityPages: LandingPageConfig[] = [
  {
    slug: "things-to-do-in-orlando",
    title: "Things To Do In Orlando: Theme Parks, Tours & Family Attractions",
    description: "Plan things to do in Orlando, from Disney World and Universal Orlando to SeaWorld, ICON Park, airboat tours, free activities, and family attractions.",
    h1: "Things To Do In Orlando: Theme Parks, Tours & Family Attractions",
    eyebrow: "Orlando attractions guide",
    intro: "Orlando rewards travelers who mix major theme parks with smaller attractions, outdoor tours, free neighborhoods, and a realistic plan for Central Florida driving.",
    image: "https://images.unsplash.com/photo-1597466599360-3b9775841aec?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Orlando theme park castle and Florida sky",
    dealIds: ["disney-world-special-offers", "universal-orlando-offers", "orlando-seaworld-limited-time-offers", "orlando-gatorland-visit-orlando-special", "orlando-free-things-to-do"],
    relatedSlugs: ["disney-world-guide", "universal-orlando-guide", "disney-vs-universal", "kennedy-space-center-guide", "free-things-to-do-in-florida"],
    pageType: "guide",
    gallery: orlandoGallery,
    guideSections: [
      { heading: "Choose the right Orlando theme parks", body: "Disney World offers four distinct parks, Universal Orlando emphasizes rides and immersive worlds, and SeaWorld combines marine-life presentations with thrill rides. Match the park to your group instead of trying to visit everything." },
      { heading: "Add tours and family attractions", body: "ICON Park, wildlife attractions, airboat rides, museums, and indoor entertainment can create lower-pressure days between long theme park visits." },
      { heading: "Plan a Kennedy Space Center day trip", body: "Kennedy Space Center is a practical full-day trip from Orlando and pairs especially well with a Port Canaveral stay or cruise departure." },
      { heading: "Save room for free and cheap activities", body: "Walkable entertainment districts, parks, gardens, resort areas, and local events help balance a ticket-heavy Orlando itinerary." }
    ],
    planningTips: ["Allow extra drive time.", "Schedule rest between park days.", "Keep one indoor weather backup."],
    customFaqs: [
      { question: "How many days do you need for Orlando attractions?", answer: "Four to seven days gives most visitors time for two or three major park days plus a lighter attraction, pool, or day-trip day." },
      { question: "What can families do in Orlando besides theme parks?", answer: "Families can compare airboat tours, wildlife attractions, ICON Park, museums, indoor entertainment, free parks, and a Kennedy Space Center day trip." },
      { question: "Is Kennedy Space Center close to Orlando?", answer: "Kennedy Space Center is roughly an hour from many Orlando areas, but drive time varies with your hotel, traffic, and launch-day activity." }
    ]
  },
  {
    slug: "disney-world-guide",
    title: "Disney World Guide (2026): Parks, Hotels, Tickets & Family Tips",
    description: "Use this 2026 Disney World guide to compare parks, ticket planning, hotels, transportation, family activities, Orlando attractions and local deals.",
    h1: "Disney World Guide for Florida Visitors",
    eyebrow: "Orlando theme park guide",
    intro: "A useful Disney World plan starts with the travelers in your group, the experiences they value most, and enough time to avoid turning every day into a race.",
    image: "https://images.unsplash.com/photo-1597466599360-3b9775841aec?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Theme park castle in Orlando",
    dealIds: ["disney-world-special-offers", "orlando-official-offers", "orlando-free-things-to-do", "orlando-rainy-day-things-to-do"],
    relatedSlugs: ["things-to-do-in-orlando", "universal-orlando-guide", "disney-vs-universal", "orlando-things-to-do"],
    pageType: "guide",
    gallery: orlandoGallery,
    comparisonRows: [
      { option: "Magic Kingdom", bestFor: "First visits and younger families", watchFor: "Long days and popular ride waits" },
      { option: "EPCOT", bestFor: "Food, festivals, and mixed-age groups", watchFor: "Large walking distances" },
      { option: "Hollywood Studios", bestFor: "Star Wars and thrill-ride fans", watchFor: "High-demand attractions" },
      { option: "Animal Kingdom", bestFor: "Animals, scenery, and a shorter park day", watchFor: "Earlier closing patterns" }
    ],
    guideSections: [
      { heading: "Choose parks for your travelers", body: "Young children, teens, adults, food-focused travelers, and first-time visitors often prefer different parks. Pick the strongest matches before comparing ticket options." },
      { heading: "Decide where to stay", body: "On-site resorts can simplify transportation, while off-site hotels may offer more space or lower rates. Compare total travel time, parking, and resort fees." },
      { heading: "Build a practical ticket plan", body: "Treat ticket prices and availability as date-specific. Check official options after deciding how many full park days your group can comfortably handle." },
      { heading: "Use transportation strategically", body: "Disney transportation can reduce driving between some resorts and parks, but routes and travel times vary. Leave margin around dining and timed plans." }
    ],
    planningTips: ["Choose parks before tickets.", "Plan a rest day.", "Confirm current transportation details."]
  },
  {
    slug: "universal-orlando-guide",
    title: "Universal Orlando Guide: Parks, Tickets, Hotels & Tips",
    description: "Plan Universal Orlando with practical guidance for Universal Studios Florida, Islands of Adventure, Epic Universe, CityWalk, hotels, and Express Pass.",
    h1: "Universal Orlando Guide: Parks, Tickets, Hotels & Tips",
    eyebrow: "Orlando theme park guide",
    intro: "Universal Orlando works best when visitors understand how its parks connect, which rides fit the group, and whether hotel and Express Pass benefits justify the cost.",
    image: "https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Theme park roller coaster in Florida",
    dealIds: ["universal-orlando-offers", "orlando-official-offers", "orlando-rainy-day-things-to-do"],
    relatedSlugs: ["things-to-do-in-orlando", "disney-world-guide", "disney-vs-universal", "orlando-local-deals"],
    pageType: "guide",
    gallery: orlandoGallery,
    guideSections: [
      { heading: "Compare Universal's parks", body: "Universal Studios Florida, Islands of Adventure, and Epic Universe each reward different interests. Harry Potter fans should pay close attention to park-to-park access and current attraction locations." },
      { heading: "Understand Express Pass", body: "Express Pass can reduce waits on participating attractions, but value changes with crowd levels, park hours, and whether an eligible hotel benefit is included." },
      { heading: "Use CityWalk as an easy add-on", body: "CityWalk is useful for dining and entertainment before or after park hours without requiring another cross-town drive." },
      { heading: "Compare hotels and transportation", body: "Universal-area hotels can reduce travel friction. Compare shuttle details, walking access, parking, and included benefits before choosing." }
    ],
    planningTips: ["Check ride requirements.", "Compare hotel benefits.", "Confirm current park-to-park rules."]
  },
  {
    slug: "disney-vs-universal",
    title: "Disney World vs Universal Orlando: Which Is Better For Your Trip?",
    description: "Compare Disney World vs Universal Orlando for young kids, teens, adults, Harry Potter fans, budgets, trip length, hotels, and first-time visits.",
    h1: "Disney World vs Universal Orlando: Which Is Better For Your Trip?",
    eyebrow: "Orlando attraction comparison",
    intro: "Disney World and Universal Orlando can both anchor a Florida vacation, but they create very different trips. The better choice depends on ages, interests, budget, and available time.",
    image: "https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Orlando theme park rides under blue sky",
    dealIds: ["disney-world-special-offers", "universal-orlando-offers", "orlando-official-offers"],
    relatedSlugs: ["disney-world-guide", "universal-orlando-guide", "things-to-do-in-orlando", "orlando-things-to-do"],
    pageType: "comparison",
    gallery: orlandoGallery,
    comparisonRows: [
      { option: "Families with young kids", bestFor: "Disney World", watchFor: "Character and ride priorities vary" },
      { option: "Teens and thrill-ride fans", bestFor: "Universal Orlando", watchFor: "Check height requirements" },
      { option: "Harry Potter fans", bestFor: "Universal Orlando", watchFor: "Park-to-park access may matter" },
      { option: "Long, immersive vacation", bestFor: "Disney World", watchFor: "More planning and travel time" },
      { option: "Shorter theme park trip", bestFor: "Universal Orlando", watchFor: "Crowds can still affect pacing" }
    ],
    guideSections: [
      { heading: "Best for first-time visitors", body: "Disney offers the classic Orlando vacation experience, while Universal can be easier to understand for a shorter, ride-focused trip." },
      { heading: "Compare the total budget", body: "Compare tickets, hotels, transportation, parking, food, skip-the-line products, and the number of days required rather than looking only at admission." },
      { heading: "How much time each resort needs", body: "Disney can comfortably fill a week. Universal can fit a shorter trip, though adding Epic Universe or repeat rides increases the ideal stay." }
    ]
  },
  {
    slug: "kennedy-space-center-guide",
    title: "Kennedy Space Center Visitor Guide | Orlando & Port Canaveral",
    description: "Plan a Kennedy Space Center visit from Orlando or Port Canaveral with drive-time guidance, cruise-trip tips, exhibits, tickets, and family planning.",
    h1: "Kennedy Space Center Visitor Guide",
    eyebrow: "Space Coast attraction guide",
    intro: "Kennedy Space Center is one of Florida's strongest full-day attractions and an especially natural addition to an Orlando vacation or Port Canaveral cruise trip.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Rocket launch and space exploration experience",
    dealIds: ["visit-florida-outdoor-adventure", "orlando-official-offers", "daytona-beach-things-to-do"],
    relatedSlugs: ["things-to-do-near-port-canaveral", "things-to-do-in-orlando", "orlando-things-to-do", "florida-family-deals"],
    pageType: "guide",
    guideSections: [
      { heading: "Who should visit", body: "Space fans, families with school-age children, history-minded travelers, and cruise visitors with a full free day are especially strong fits." },
      { heading: "Getting there from Orlando", body: "Allow roughly an hour from many Orlando areas, plus traffic and parking time. A rental car or organized tour can simplify the trip." },
      { heading: "Pairing it with Port Canaveral", body: "The visitor complex is close enough to the cruise area to work before or after a sailing when the schedule includes a hotel night and adequate buffer." },
      { heading: "Tickets and tour planning", body: "Check official admission, operating hours, bus-tour availability, and launch-related changes before building the day." }
    ],
    planningTips: ["Allow a full day.", "Check launch-day conditions.", "Leave cruise-day buffer."]
  },
  {
    slug: "things-to-do-near-port-canaveral",
    title: "Things To Do Near Port Canaveral Before or After a Cruise",
    description: "Find things to do near Port Canaveral, including Kennedy Space Center, Cocoa Beach, waterfront dining, airboat tours, hotels, and cruise add-ons.",
    h1: "Things To Do Near Port Canaveral Before or After a Cruise",
    eyebrow: "Florida cruise add-ons",
    intro: "A hotel night near Port Canaveral can turn a stressful same-day arrival into a useful Space Coast mini-trip with beaches, space history, food, and outdoor activities.",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Cruise ship near a Florida port",
    dealIds: ["visit-florida-beach-guide", "visit-florida-outdoor-adventure", "orlando-official-offers"],
    relatedSlugs: ["kennedy-space-center-guide", "florida-water-activities", "things-to-do-in-orlando", "florida-weekend-deals"],
    pageType: "guide",
    guideSections: [
      { heading: "Visit Kennedy Space Center", body: "Kennedy Space Center is the signature Port Canaveral add-on and works best with a full free day rather than a tight embarkation morning." },
      { heading: "Spend time at Cocoa Beach", body: "Cocoa Beach can support a relaxed beach walk, surf-town meal, or low-pressure arrival-day plan near the port." },
      { heading: "Compare waterfront dining and outdoor options", body: "Port-area restaurants, wildlife areas, and airboat tours can fill shorter windows when timing and transportation are confirmed." },
      { heading: "Plan the hotel and cruise connection", body: "Compare nearby hotels, parking, shuttles, airport transfer time, and cruise check-in requirements before choosing an activity." }
    ],
    planningTips: ["Do not crowd embarkation day.", "Confirm shuttle details.", "Leave weather and traffic buffer."]
  },
  {
    slug: "everglades-airboat-tours",
    title: "Best Everglades Airboat Tours In Florida | Visitor Guide",
    description: "Compare Everglades airboat tours near Miami and Fort Lauderdale, with practical family tips, what to expect, what to bring, and weather guidance.",
    h1: "Best Everglades Airboat Tours In Florida",
    eyebrow: "Florida outdoor tour guide",
    intro: "An Everglades airboat trip is a distinctive South Florida experience, but operators, drive times, wildlife conditions, and tour styles vary widely.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Everglades-style wetland landscape",
    dealIds: ["visit-florida-outdoor-adventure", "miami-attraction-deals", "fort-lauderdale-things-to-do-deals"],
    relatedSlugs: ["things-to-do-in-miami", "things-to-do-in-fort-lauderdale", "miami-boat-tours", "florida-water-activities"],
    pageType: "guide",
    gallery: waterGallery,
    guideSections: [
      { heading: "Miami-area airboat tours", body: "Miami-area departures can fit South Florida itineraries, but visitors should compare pickup location, total duration, transportation, and how much time is spent on the water." },
      { heading: "Fort Lauderdale-area options", body: "Fort Lauderdale travelers may find convenient western access. Confirm drive time from the beach or cruise area before booking." },
      { heading: "What families should know", body: "Ask about minimum ages, hearing protection, shade, accessibility, restrooms, and weather policies before taking children." },
      { heading: "What to bring", body: "Sun protection, water, secure hats, comfortable clothing, insect protection, and a flexible weather plan are practical starting points." }
    ]
  },
  {
    slug: "miami-boat-tours",
    title: "Miami Boat Tours, Water Activities & Things To Do",
    description: "Compare Miami boat tours, Biscayne Bay sightseeing, celebrity-home cruises, sunset trips, family water activities, and practical pre-cruise planning.",
    h1: "Miami Boat Tours, Water Activities & Things To Do",
    eyebrow: "Miami water activity guide",
    intro: "Miami looks different from the water. Boat tours can add Biscayne Bay, skyline views, celebrity-home sightseeing, sunset time, or a private group day to a city or cruise trip.",
    image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Miami skyline viewed from the water",
    dealIds: ["miami-official-special-offers", "miami-attraction-deals", "miami-day-pass-deals"],
    relatedSlugs: ["things-to-do-in-miami", "miami-boat-rentals", "everglades-airboat-tours", "key-west-sunset-cruises"],
    pageType: "guide",
    gallery: waterGallery,
    guideSections: [
      { heading: "Biscayne Bay sightseeing tours", body: "Shared sightseeing cruises are a simple way to see the skyline and waterfront. Compare departure point, narration, duration, seating, and weather policy." },
      { heading: "Celebrity-home and sunset cruises", body: "These tours emphasize views and atmosphere. Check whether the experience is family-oriented, music-focused, or designed for adults." },
      { heading: "Private boats and group days", body: "Private options can suit celebrations or flexible itineraries. Confirm captain, capacity, pickup point, inclusions, and cancellation rules." },
      { heading: "Plan around PortMiami", body: "Pre-cruise travelers should keep boat activities on a separate day or leave a generous schedule buffer." }
    ]
  },
  {
    slug: "key-west-sunset-cruises",
    title: "Key West Sunset Cruises & Boat Tours Guide",
    description: "Plan Key West sunset cruises, sailing trips, family-friendly boat tours, adult outings, cruise-visitor activities, and the best time to go.",
    h1: "Key West Sunset Cruises & Boat Tours Guide",
    eyebrow: "Key West water activity guide",
    intro: "Sunset on the water is a signature Key West experience. The best trip depends on whether you want quiet sailing, live music, family comfort, or a social adults-focused evening.",
    image: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Key West tropical sunset over the water",
    dealIds: ["key-west-historic-seaport-things-to-do", "visit-florida-outdoor-adventure", "visit-florida-beach-guide"],
    relatedSlugs: ["things-to-do-in-key-west", "miami-boat-tours", "florida-water-activities", "best-boat-days-in-florida"],
    pageType: "guide",
    gallery: waterGallery,
    guideSections: [
      { heading: "Choose the right sunset cruise", body: "Compare vessel size, seating, music, drinks, food, duration, and group atmosphere. A quiet sail and a lively party cruise are very different experiences." },
      { heading: "Family trips versus adults-focused outings", body: "Families should check age rules, railings, restrooms, shade, and noise. Adults may prefer smaller sailing trips or social cruises." },
      { heading: "Best time to go", body: "Departure times shift with sunset. Arrive early, account for parking or walking time, and check weather and cancellation policies." },
      { heading: "Cruise-visitor planning", body: "Day visitors should compare ship time, excursion timing, and walking distance before booking independently." }
    ]
  },
  {
    slug: "free-things-to-do-in-florida",
    title: "Free Things To Do In Florida | Beaches, Parks & Family Ideas",
    description: "Find free things to do in Florida, including beaches, parks, historic districts, scenic drives, public events, and free family activity ideas.",
    h1: "Free Things To Do In Florida",
    eyebrow: "Evergreen Florida budget guide",
    intro: "Florida's strongest free experiences are often the places that define the state: beaches, waterfront parks, historic districts, scenic drives, public events, and walkable neighborhoods.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Open Florida beach with turquoise water",
    dealIds: ["orlando-free-things-to-do", "st-augustine-free-things", "jaxparks-free-events", "st-pete-pier-events", "clearwater-pier-60-sunset-events"],
    relatedSlugs: ["best-free-things-to-do-in-florida", "things-to-do-in-orlando", "florida-family-deals", "florida-weekend-deals"],
    pageType: "guide",
    guideSections: [
      { heading: "Beaches and waterfront parks", body: "Public beaches, piers, riverwalks, and waterfront parks can anchor a full day. Check access, parking, restrooms, and local rules before leaving." },
      { heading: "Historic districts and scenic drives", body: "St. Augustine, Key West, coastal roads, and walkable downtown areas offer atmosphere and sightseeing without requiring a ticket." },
      { heading: "Free events and museum windows", body: "City calendars and cultural organizations often list concerts, markets, art walks, and limited free-admission periods. Confirm dates directly." },
      { heading: "Free family activity ideas", body: "Parks, beaches, library programs, public gardens, community events, and self-guided walks can help families build affordable Florida days." }
    ],
    planningTips: ["Check parking costs.", "Confirm event dates.", "Bring a weather backup."]
  },
  {
    slug: "orlando-attractions",
    title: "Orlando Attractions | Theme Parks, Tours & Family Activities",
    description: "Compare Orlando attractions including Disney, Universal, SeaWorld, Kennedy Space Center, tours, family activities, and practical planning guides.",
    h1: "Orlando Attractions",
    eyebrow: "Orlando attraction authority",
    intro: "Orlando attractions range from full-day theme parks to wildlife experiences, indoor activities, tours, and easy family plans.",
    image: "https://images.unsplash.com/photo-1597466599360-3b9775841aec?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Orlando theme park attraction",
    dealIds: ["disney-world-special-offers", "universal-orlando-offers", "orlando-seaworld-limited-time-offers", "orlando-gatorland-visit-orlando-special"],
    relatedSlugs: ["things-to-do-in-orlando", "disney-area-attractions", "universal-orlando-guide", "kennedy-space-center-guide"],
    pageType: "guide",
    gallery: orlandoGallery,
    guideSections: [
      { heading: "Featured Orlando attractions", body: "Start with Disney World, Universal Orlando, SeaWorld, and Kennedy Space Center, then compare the time, cost, and energy each experience requires." },
      { heading: "Popular activities beyond theme parks", body: "Airboat tours, wildlife attractions, museums, entertainment districts, and indoor activities create useful lighter days." },
      { heading: "Family-friendly Orlando activities", body: "Match attractions to ages, height requirements, stroller needs, weather, and realistic rest time." }
    ]
  },
  {
    slug: "disney-area-attractions",
    title: "Disney Area Attractions | Things To Do Near Walt Disney World",
    description: "Find Disney-area attractions, family activities, restaurants, indoor ideas, tours, and practical things to do near Walt Disney World.",
    h1: "Disney Area Attractions",
    eyebrow: "Disney-area activity guide",
    intro: "A Disney-area stay can include more than park days. Nearby activities help families create lower-pressure arrival days, rest days, and weather backups.",
    image: "https://images.unsplash.com/photo-1597466599360-3b9775841aec?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Orlando theme park castle",
    dealIds: ["disney-world-special-offers", "orlando-free-things-to-do", "orlando-rainy-day-things-to-do", "orlando-official-offers"],
    relatedSlugs: ["disney-world-guide", "orlando-attractions", "disney-vs-universal", "things-to-do-in-orlando"],
    pageType: "guide",
    gallery: orlandoGallery,
    guideSections: [
      { heading: "Featured Disney-area activities", body: "Compare entertainment districts, family attractions, mini golf, restaurants, and resort-area experiences near the main park corridors." },
      { heading: "Popular rest-day ideas", body: "Pool time, easy dining, free entertainment areas, and short indoor activities can protect energy during a longer park trip." },
      { heading: "Family planning tips", body: "Keep drive time, parking, bedtime, and the next park morning in mind before adding another ticketed experience." }
    ]
  },
  {
    slug: "florida-family-attractions",
    title: "Florida Family Attractions | Theme Parks, Museums & Activities",
    description: "Compare Florida family attractions including theme parks, museums, aquariums, beaches, wildlife experiences, and practical activity guides.",
    h1: "Florida Family Attractions",
    eyebrow: "Family attraction guide",
    intro: "Florida family attractions work best when the activity fits the children, weather, destination, transportation, and pace of the overall trip.",
    image: "https://images.unsplash.com/photo-1597466599360-3b9775841aec?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Florida family attraction",
    dealIds: ["disney-world-special-offers", "universal-orlando-offers", "clearwater-marine-aquarium-visit", "cummer-museum-free-admission"],
    relatedSlugs: ["orlando-attractions", "best-family-activities-in-florida", "free-things-to-do-in-florida", "kennedy-space-center-guide"],
    pageType: "guide",
    guideSections: [
      { heading: "Featured family attractions", body: "Theme parks, Kennedy Space Center, aquariums, museums, wildlife experiences, and beaches can each anchor a family day." },
      { heading: "Popular activities by age", body: "Young children, teens, and multi-generational groups often need different activity lengths, ride requirements, and break schedules." },
      { heading: "Build a flexible family day", body: "Choose one main attraction and one nearby backup rather than filling every hour." }
    ]
  },
  {
    slug: "best-attractions-in-florida",
    title: "Best Attractions In Florida | Theme Parks, Space & Nature",
    description: "Explore the best attractions in Florida, from Orlando theme parks and Kennedy Space Center to beaches, museums, wildlife, and water activities.",
    h1: "Best Attractions In Florida",
    eyebrow: "Florida attraction guide",
    intro: "Florida's strongest attractions span theme parks, space exploration, beaches, historic districts, wildlife, museums, and experiences on the water.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Florida outdoor attraction",
    dealIds: ["disney-world-special-offers", "universal-orlando-offers", "visit-florida-outdoor-adventure", "visit-florida-beach-guide"],
    relatedSlugs: ["orlando-attractions", "florida-family-attractions", "florida-vacation-activities", "best-things-to-do-in-florida"],
    pageType: "guide",
    guideSections: [
      { heading: "Featured Florida attractions", body: "Start with Orlando theme parks, Kennedy Space Center, the Everglades, historic St. Augustine, and Florida's beaches." },
      { heading: "Popular activities by destination", body: "Choose attractions that fit naturally with the hotel area, airport, cruise port, or road-trip route." },
      { heading: "Family-friendly and flexible options", body: "Balance major ticketed attractions with beaches, museums, parks, and weather-friendly backups." }
    ]
  },
  {
    slug: "florida-vacation-activities",
    title: "Florida Vacation Activities | Attractions, Tours & Family Ideas",
    description: "Plan Florida vacation activities including attractions, tours, boat rides, theme parks, beaches, museums, and family-friendly experiences.",
    h1: "Florida Vacation Activities",
    eyebrow: "Vacation activity planner",
    intro: "The best Florida vacation activities connect naturally to where you stay, how you travel, and how much time the group actually has.",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Florida vacation water activity",
    dealIds: ["visit-florida-outdoor-adventure", "visit-florida-beach-guide", "orlando-official-offers", "miami-attraction-deals"],
    relatedSlugs: ["best-attractions-in-florida", "florida-family-attractions", "florida-water-activities", "best-things-to-do-in-florida"],
    pageType: "guide",
    guideSections: [
      { heading: "Featured vacation activities", body: "Theme parks, beaches, boat tours, wildlife, museums, and historic areas can each become the anchor for a Florida trip." },
      { heading: "Popular activities by travel style", body: "Families, couples, cruise travelers, and weekend visitors need different schedules and activity mixes." },
      { heading: "Turn activities into a package", body: "Compare nearby hotels, flights, transportation, and broader vacation package ideas before booking." }
    ]
  }
];
