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
  if (deal.sourceName) return deal.sourceName.replace(/^Official /, "");
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
  if (url.includes("fmopa.org")) return "Florida Museum of Photographic Arts";
  if (url.includes("oysterbarstpete.com")) return "The Oyster Bar";
  if (url.includes("lalakaraoke.com")) return "LALA St. Pete";

  return "Official source";
}

export function getDealCta(deal: DealDisplayInput) {
  const category = deal.category.toLowerCase();
  const badge = deal.badge.toLowerCase();

  if (category.includes("free") || badge.includes("free")) return "View Free Activity";
  if (category.includes("event") || category.includes("weekend")) return "See Event Details";
  if (category.includes("food") || category.includes("restaurant")) return "View Dining Deal";
  if (category.includes("attraction")) return "View Ticket Options";
  if (category.includes("under")) return "See Discount Details";
  if (badge.includes("current") || badge.includes("resident")) return "View Current Offer";

  return "Check Details";
}

export function getWhyThisDeal(deal: DealDisplayInput) {
  const category = deal.category.toLowerCase();
  const badge = deal.badge.toLowerCase();

  if (deal.title.includes("Visit Orlando") || deal.title.includes("Visit Jacksonville")) return "Official tourism offer hub";
  if (category.includes("free") || badge.includes("free")) return "Low-cost thing to do in Florida";
  if (category.includes("family") || badge.includes("family")) return "Family-friendly local pick";
  if (category.includes("event") || category.includes("weekend")) return "Good option for a weekend activity";
  if (category.includes("food") || category.includes("restaurant")) return "Useful dining or date night idea";
  if (category.includes("attraction")) return `${deal.city} attraction worth checking`;
  if (category.includes("local experiences")) return "Useful local experience idea";

  return "Curated local find from a real source";
}
