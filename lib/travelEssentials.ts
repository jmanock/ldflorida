export type TravelEssentialItem = {
  title: string;
  description: string;
  cta: string;
  affiliateUrl: string;
  advertiser: "outfitr" | "nomatic" | "samboat" | "petpivot";
  category: string;
};

export const OUTFITR_MAIN_URL =
  "https://www.awin1.com/awclick.php?gid=582217&mid=117613&awinaffid=2881665&linkid=4523197";
export const OUTFITR_PROMO_URL =
  "https://www.awin1.com/awclick.php?gid=582217&mid=117613&awinaffid=2881665&linkid=4656702";
export const OUTFITR_CODE = "OUTFITRER15";
export const NOMATIC_TRAVEL_BAGS_SALE_URL =
  "https://www.awin1.com/awclick.php?gid=532276&mid=90033&awinaffid=2881665&linkid=4060937";
export const NOMATIC_CAMERA_PACK_URL =
  "https://www.awin1.com/awclick.php?gid=605175&mid=90033&awinaffid=2881665&linkid=4779684";
export const PETPIVOT_URL =
  "https://www.awin1.com/awclick.php?gid=334034&mid=124298&awinaffid=2881665&linkid=3709779&clickref=";

export const attractionTravelEssentials: TravelEssentialItem[] = [
  {
    title: "Day bag for Florida attractions",
    description: "Florida attraction days are easier with a comfortable day bag, room for water, sunscreen, souvenirs, and a place to keep the memories.",
    cta: "View Day Bags",
    affiliateUrl: OUTFITR_MAIN_URL,
    advertiser: "outfitr",
    category: "day_bag"
  },
  {
    title: "Camera pack for big trip days",
    description: "Useful for theme parks, historic streets, boat days, museums, and beach sunsets when you want memories without juggling gear.",
    cta: "See Camera Pack",
    affiliateUrl: NOMATIC_CAMERA_PACK_URL,
    advertiser: "nomatic",
    category: "camera_pack"
  },
  {
    title: "Travel bag sale",
    description: "A good travel bag is one of those things you remember right before the trip. Handle it before the activity day sneaks up.",
    cta: "Browse Travel Bags",
    affiliateUrl: NOMATIC_TRAVEL_BAGS_SALE_URL,
    advertiser: "nomatic",
    category: "travel_bags"
  }
];

export const petTravelEssential: TravelEssentialItem = {
  title: "Pet-friendly trip supplies",
  description: "Planning a pet-friendly Florida day? Check pet travel basics before you build the outing around restaurants, parks, or hotels.",
  cta: "Browse Pet Travel Picks",
  affiliateUrl: PETPIVOT_URL,
  advertiser: "petpivot",
  category: "pet_travel"
};
