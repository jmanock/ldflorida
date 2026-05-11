type DealDisplayInput = {
  title: string;
  city: string;
  category: string;
  price: string;
  badge: string;
  affiliateReadyUrl: string;
  sourceName?: string;
  placeName?: string;
};

export function getOfferLabel(deal: DealDisplayInput) {
  return deal.price?.trim() || "Check current offer";
}

export function getDealSourceName(deal: DealDisplayInput) {
  if (deal.title.includes("Gatorland")) return "Gatorland";
  if (deal.sourceName) return deal.sourceName.replace(/^Official /, "").replace(/ offer page$/i, "").replace(/ page$/i, "");
  if (deal.placeName) return deal.placeName;

  const url = deal.affiliateReadyUrl;
  if (url.includes("visitorlando.com")) return "Visit Orlando";
  if (url.includes("seaworld.com")) return "SeaWorld Orlando";
  if (url.includes("gatorland.com")) return "Gatorland";
  if (url.includes("miamiandbeaches.com")) return "Greater Miami & Miami Beach";
  if (url.includes("visittampabay.com")) return "Visit Tampa Bay";
  if (url.includes("buschgardens.com")) return "Busch Gardens Tampa Bay";
  if (url.includes("stpetepier.org")) return "St. Pete Pier";
  if (url.includes("tampasdowntown.com")) return "Tampa Downtown Partnership";
  if (url.includes("visitlauderdale.com")) return "Visit Lauderdale";
  if (url.includes("browardcenter.org")) return "Broward Center";
  if (url.includes("lasolasboulevard.com")) return "Las Olas Boulevard";
  if (url.includes("visitjacksonville.com")) return "Visit Jacksonville";
  if (url.includes("cummermuseum.org")) return "Cummer Museum";
  if (url.includes("events.jacksonville.gov")) return "City of Jacksonville";
  if (url.includes("daytonabeach.com")) return "Daytona Beach Area CVB";
  if (url.includes("visitstaugustine.com")) return "Visit St. Augustine";
  if (url.includes("staaa.org")) return "St. Augustine Art Association";
  if (url.includes("visitstpeteclearwater.com")) return "Visit St. Pete-Clearwater";
  if (url.includes("myclearwater.com")) return "City of Clearwater";
  if (url.includes("cmaquarium.org")) return "Clearwater Marine Aquarium";
  if (url.includes("sunsetsatpier60.com")) return "Sunsets at Pier 60";
  if (url.includes("fla-keys.com")) return "The Florida Keys & Key West";
  if (url.includes("fantasyfest.com")) return "Fantasy Fest";
  if (url.includes("keywesthistoricseaport.com")) return "Key West Historic Seaport";
  if (url.includes("visitnaplesfl.com")) return "Visit Naples";
  if (url.includes("disneyworld.disney.go.com")) return "Walt Disney World";
  if (url.includes("universalorlando.com")) return "Universal Orlando Resort";
  if (url.includes("visitflorida.com")) return "VISIT FLORIDA";
  if (url.includes("fmopa.org")) return "Florida Museum of Photographic Arts";
  if (url.includes("oysterbarstpete.com")) return "The Oyster Bar";
  if (url.includes("lalakaraoke.com")) return "LALA St. Pete";

  return "Official source";
}

export function getDealCta(deal: DealDisplayInput) {
  const category = deal.category.toLowerCase();
  const badge = deal.badge.toLowerCase();
  const city = deal.city;

  if (deal.title.includes("Gatorland")) return "Get Attraction Offer";
  if (category.includes("free") || badge.includes("free")) return "View Free Activity";
  if (category.includes("theme park")) return "View Theme Park Offers";
  if (category.includes("event") || category.includes("weekend")) return city === "Florida" ? "Browse Florida Festivals" : "View Event Details";
  if (category.includes("food") || category.includes("restaurant")) return "Explore Dining Deals";
  if (category.includes("attraction")) return city === "Orlando" ? "View Orlando Attraction Deals" : "View Ticket Options";
  if (category.includes("beach") || category.includes("outdoor")) return "Explore Outdoor Activities";
  if (category.includes("under")) return "See Discount Details";
  if (badge.includes("current") || badge.includes("resident")) return "View Current Offer";

  return "Explore Local Deals";
}

export function getWhyThisDeal(deal: DealDisplayInput) {
  const category = deal.category.toLowerCase();
  const badge = deal.badge.toLowerCase();

  if (deal.title.includes("Gatorland")) return "Good option for a low-cost Orlando attraction day.";
  if (deal.title.includes("Visit Orlando") || deal.title.includes("Visit Jacksonville")) return "Official tourism offer hub";
  if (category.includes("free") || badge.includes("free")) return "Low-cost thing to do in Florida";
  if (category.includes("family") || badge.includes("family")) return "Family-friendly local pick";
  if (category.includes("theme park")) return "Official park offer page worth checking before buying tickets";
  if (category.includes("event") || category.includes("weekend")) return "Good option for a weekend activity";
  if (category.includes("food") || category.includes("restaurant")) return "Useful dining or date night idea";
  if (category.includes("attraction")) return `${deal.city} attraction worth checking`;
  if (category.includes("beach")) return "Useful coastal activity source for a Florida beach day";
  if (category.includes("outdoor")) return "Good source for parks, trails, beaches, and nature plans";
  if (category.includes("rainy")) return "Helpful indoor backup when Florida weather changes";
  if (category.includes("local experiences")) return "Useful local experience idea";

  return "Curated local find from a real source";
}

export function getBestFor(deal: DealDisplayInput) {
  const category = deal.category.toLowerCase();
  const badge = deal.badge.toLowerCase();

  if (category.includes("free") || badge.includes("free")) return "Budget-friendly days out";
  if (category.includes("family") || badge.includes("family")) return "Weekend family trips";
  if (category.includes("event") || category.includes("weekend")) return "Weekend planning";
  if (category.includes("food") || category.includes("restaurant")) return "Dining and nights out";
  if (category.includes("theme park") || category.includes("attraction")) return "Attraction days";
  if (category.includes("beach")) return "Beach days";
  if (category.includes("outdoor")) return "Outdoor exploring";
  if (category.includes("local experiences")) return "Local experiences";

  return "Florida local discovery";
}
