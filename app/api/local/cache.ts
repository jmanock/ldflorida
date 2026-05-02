export const LOCAL_API_REVALIDATE_SECONDS = 60 * 60 * 12;

export const localApiCacheHeaders = {
  "Cache-Control": `public, s-maxage=${LOCAL_API_REVALIDATE_SECONDS}, stale-while-revalidate=${LOCAL_API_REVALIDATE_SECONDS}`
};
