export const AIRPORT_TRANSFER_AFFILIATE_URL =
  "https://www.awin1.com/awclick.php?gid=597088&mid=124434&awinaffid=2881665&linkid=4690637&clickref=";
export const EXPEDIA_GENERAL_AFFILIATE_URL = "https://expedia.com/affiliates/expedia-home.DHcy34V";
export const SAMBOAT_AFFILIATE_URL =
  "https://www.awin1.com/awclick.php?gid=444366&mid=32679&awinaffid=2881665&linkid=4565586&clickref=";
export const transferAndTravelSlugs = new Set([
  "orlando-local-deals", "florida-free-things-to-do", "florida-outdoor-activities",
  "best-florida-weekend-activities", "key-west-local-deals",
  "things-to-do-in-orlando-this-weekend", "things-to-do-in-tampa-this-weekend",
  "things-to-do-in-jacksonville-this-weekend", "things-to-do-in-miami-this-weekend"
]);
export const conversionSlugs = new Set(["orlando-local-deals", "key-west-local-deals", "florida-free-things-to-do", "best-florida-weekend-activities", "things-to-do-in-orlando-this-weekend", "things-to-do-in-tampa-this-weekend", "things-to-do-in-jacksonville-this-weekend", "things-to-do-in-miami-this-weekend", "best-things-to-do-in-florida", "best-florida-attractions"]);
export const getTransferAffiliateUrl = (site: string, slug: string) =>
  `${AIRPORT_TRANSFER_AFFILIATE_URL}${encodeURIComponent(`${site}:${slug}`)}`;
