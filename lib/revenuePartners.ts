export const AIRPORT_TRANSFER_AFFILIATE_URL =
  "https://www.awin1.com/awclick.php?gid=597088&mid=124434&awinaffid=2881665&linkid=4690637&clickref=";
export const EXPEDIA_GENERAL_AFFILIATE_URL = "https://expedia.com/affiliates/expedia-home.DHcy34V";
export const transferAndTravelSlugs = new Set([
  "orlando-local-deals", "florida-free-things-to-do", "florida-outdoor-activities",
  "best-florida-weekend-activities"
]);
export const getTransferAffiliateUrl = (site: string, slug: string) =>
  `${AIRPORT_TRANSFER_AFFILIATE_URL}${encodeURIComponent(`${site}:${slug}`)}`;
