export const EXPEDIA_AFFILIATE_BASE = "https://expedia.com/affiliate/2Wbjdi2";

export type ExpediaDestinationKey =
  | "orlando"
  | "miami"
  | "tampa"
  | "fortLauderdale"
  | "jacksonville"
  | "stPetersburg"
  | "daytona"
  | "stAugustine";

export function getExpediaHotelLink(destination: string) {
  const links: Record<string, string> = {
    // Replace these base links with Expedia Creator Hub city-specific deep links when available.
    orlando: EXPEDIA_AFFILIATE_BASE,
    miami: EXPEDIA_AFFILIATE_BASE,
    tampa: EXPEDIA_AFFILIATE_BASE,
    fortLauderdale: EXPEDIA_AFFILIATE_BASE,
    jacksonville: EXPEDIA_AFFILIATE_BASE,
    stPetersburg: EXPEDIA_AFFILIATE_BASE,
    daytona: EXPEDIA_AFFILIATE_BASE,
    stAugustine: EXPEDIA_AFFILIATE_BASE
  };

  return links[destination] ?? EXPEDIA_AFFILIATE_BASE;
}

export const expediaDestinationLabels: Record<ExpediaDestinationKey, string> = {
  orlando: "Orlando",
  miami: "Miami",
  tampa: "Tampa",
  fortLauderdale: "Fort Lauderdale",
  jacksonville: "Jacksonville",
  stPetersburg: "St. Petersburg",
  daytona: "Daytona Beach",
  stAugustine: "St. Augustine"
};

const cityDestinationMap: Record<string, ExpediaDestinationKey> = {
  Orlando: "orlando",
  Miami: "miami",
  Tampa: "tampa",
  "Fort Lauderdale": "fortLauderdale",
  Jacksonville: "jacksonville",
  "St. Petersburg": "stPetersburg",
  "Daytona Beach": "daytona",
  "St. Augustine": "stAugustine"
};

const slugDestinationMap: Record<string, ExpediaDestinationKey> = {
  "orlando-local-deals": "orlando",
  "orlando-things-to-do-deals": "orlando",
  "miami-local-deals": "miami",
  "miami-weekend-deals": "miami",
  "tampa-local-deals": "tampa",
  "tampa-events-deals": "tampa",
  "fort-lauderdale-local-deals": "fortLauderdale",
  "fort-lauderdale-restaurant-deals": "fortLauderdale",
  "jacksonville-local-deals": "jacksonville",
  "jacksonville-family-deals": "jacksonville",
  "st-petersburg-local-deals": "stPetersburg",
  "st-petersburg-date-night-deals": "stPetersburg",
  "daytona-beach-local-deals": "daytona",
  "st-augustine-local-deals": "stAugustine",
  "florida-weekend-deals": "orlando",
  "florida-date-night-deals": "stPetersburg",
  "florida-family-deals": "orlando",
  "florida-attraction-deals": "orlando",
  "florida-event-deals": "miami",
  "florida-food-and-drink-deals": "stPetersburg",
  "florida-free-things-to-do": "stAugustine",
  "florida-local-deals-under-50": "orlando",
  "florida-restaurant-deals": "fortLauderdale",
  "florida-things-to-do-deals": "orlando"
};

export function getExpediaDestinationForCity(city: string) {
  return cityDestinationMap[city];
}

export function getExpediaDestinationForPage(slug: string) {
  return slugDestinationMap[slug];
}
