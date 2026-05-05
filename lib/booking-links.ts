export function getBookingLink(url: string) {
  return url;
}

export const cityBookingLinks = {
  Orlando: getBookingLink("https://www.booking.com/searchresults.html?ss=Orlando"),
  Miami: getBookingLink("https://www.booking.com/searchresults.html?ss=Miami"),
  Tampa: getBookingLink("https://www.booking.com/searchresults.html?ss=Tampa"),
  "Fort Lauderdale": getBookingLink("https://www.booking.com/searchresults.html?ss=Fort+Lauderdale"),
  Jacksonville: getBookingLink("https://www.booking.com/searchresults.html?ss=Jacksonville+Florida"),
  "St. Petersburg": getBookingLink("https://www.booking.com/searchresults.html?ss=St+Petersburg+Florida"),
  "Daytona Beach": getBookingLink("https://www.booking.com/searchresults.html?ss=Daytona+Beach"),
  "St. Augustine": getBookingLink("https://www.booking.com/searchresults.html?ss=St+Augustine")
} as const;

export type BookingCity = keyof typeof cityBookingLinks;

const slugCityMap: Record<string, BookingCity> = {
  "orlando-local-deals": "Orlando",
  "orlando-things-to-do-deals": "Orlando",
  "miami-local-deals": "Miami",
  "miami-weekend-deals": "Miami",
  "tampa-local-deals": "Tampa",
  "tampa-events-deals": "Tampa",
  "fort-lauderdale-local-deals": "Fort Lauderdale",
  "fort-lauderdale-restaurant-deals": "Fort Lauderdale",
  "jacksonville-local-deals": "Jacksonville",
  "jacksonville-family-deals": "Jacksonville",
  "st-petersburg-local-deals": "St. Petersburg",
  "st-petersburg-date-night-deals": "St. Petersburg",
  "daytona-beach-local-deals": "Daytona Beach",
  "st-augustine-local-deals": "St. Augustine",
  "florida-weekend-deals": "Orlando",
  "florida-date-night-deals": "St. Petersburg",
  "florida-family-deals": "Orlando",
  "florida-attraction-deals": "Orlando"
};

export function getBookingCityForPage(slug: string) {
  return slugCityMap[slug];
}

export function getBookingUrlForCity(city: BookingCity) {
  return cityBookingLinks[city];
}
