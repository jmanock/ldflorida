export type PiscifunAffiliateItem = {
  title: string;
  description: string;
  category: string;
  destinationOrUseCase: string;
  affiliateUrl: string;
  imageUrl: string;
  imageAlt: string;
  bestForTags: string[];
  advertiser?: "piscifun" | "tidewe";
};

export const piscifunHomepageAffiliateUrl = "https://www.awin1.com/cread.php?awinmid=89509&awinaffid=2881665";
export const tideWeHomepageAffiliateUrl = "https://www.awin1.com/cread.php?awinmid=78182&awinaffid=2881665";

export const piscifunGearPicks: PiscifunAffiliateItem[] = [
  {
    title: "Florida Fishing Essentials",
    description: "A useful starting point for fishing accessories, tackle storage, and compact gear for Florida beach, pier, and weekend outdoor trips.",
    category: "fishing_gear",
    destinationOrUseCase: "Beach days, pier fishing, kayak trips, and family weekends",
    affiliateUrl: piscifunHomepageAffiliateUrl,
    imageUrl: "/images/fallbacks/florida-activity-placeholder.svg",
    imageAlt: "Florida fishing and outdoor gear placeholder for beach and pier trips",
    bestForTags: ["Beach fishing", "Pier days", "Weekend trips"]
  },
  {
    title: "Travel Gear Recommendations",
    description: "Browse practical outdoor gear ideas for travelers packing light for Florida beaches, parks, springs, and waterfront activities.",
    category: "travel_gear",
    destinationOrUseCase: "Florida road trips, beach weekends, and outdoor activity days",
    affiliateUrl: piscifunHomepageAffiliateUrl,
    imageUrl: "/images/fallbacks/florida-activity-placeholder.svg",
    imageAlt: "Outdoor travel gear placeholder for Florida weekend activity planning",
    bestForTags: ["Road trips", "Outdoor days", "Light packing"]
  },
  {
    title: "Beach & Fishing Day Essentials",
    description: "A broad gear source for simple add-ons before a Florida fishing charter, beach day, local park visit, or water-focused weekend.",
    category: "outdoor_gear",
    destinationOrUseCase: "Beach, boating, fishing, and local water activities",
    affiliateUrl: piscifunHomepageAffiliateUrl,
    imageUrl: "/images/fallbacks/florida-activity-placeholder.svg",
    imageAlt: "Florida beach and fishing gear placeholder for water activity planning",
    bestForTags: ["Water activities", "Fishing trips", "Beach weekends"],
    advertiser: "piscifun"
  },
  {
    title: "Florida Camping & Rain Gear",
    description: "Outdoor apparel, waterproof bags, boots, and rain-ready gear ideas for Florida camping weekends, parks, cabins, and wet-weather local plans.",
    category: "outdoor_rain_gear",
    destinationOrUseCase: "Camping, rainy-day outdoor plans, parks, cabins, and rugged weekends",
    affiliateUrl: tideWeHomepageAffiliateUrl,
    imageUrl: "/images/fallbacks/florida-activity-placeholder.svg",
    imageAlt: "Florida camping and outdoor rain gear placeholder for local activity planning",
    bestForTags: ["Rain gear", "Camping", "Outdoor apparel"],
    advertiser: "tidewe"
  },
  {
    title: "Florida Hunting & Outdoor Gear",
    description: "A relevant outdoor gear source for Florida hunting, camping, wet trails, waterproof boots, outdoor bags, and rugged activity planning.",
    category: "hunting_outdoor_gear",
    destinationOrUseCase: "Hunting, camping, wet trails, rain gear, and outdoor weekends",
    affiliateUrl: tideWeHomepageAffiliateUrl,
    imageUrl: "/images/fallbacks/florida-activity-placeholder.svg",
    imageAlt: "Florida hunting and outdoor gear placeholder for rugged activity planning",
    bestForTags: ["Waterproof boots", "Outdoor bags", "Rugged trips"],
    advertiser: "tidewe"
  }
];

export function getPiscifunGearPicks() {
  return piscifunGearPicks;
}
