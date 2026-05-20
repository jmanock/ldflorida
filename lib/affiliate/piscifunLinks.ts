export type PiscifunAffiliateItem = {
  title: string;
  description: string;
  category: string;
  destinationOrUseCase: string;
  affiliateUrl: string;
  imageUrl: string;
  imageAlt: string;
  bestForTags: string[];
};

export const piscifunHomepageAffiliateUrl = "https://www.awin1.com/cread.php?awinmid=89509&awinaffid=2881665";

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
    bestForTags: ["Water activities", "Fishing trips", "Beach weekends"]
  }
];

export function getPiscifunGearPicks() {
  return piscifunGearPicks;
}
