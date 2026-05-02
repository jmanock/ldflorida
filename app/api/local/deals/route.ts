import { NextResponse } from "next/server";
import { getEnrichedDeals } from "../../../../lib/local-data";
import { localApiCacheHeaders, LOCAL_API_REVALIDATE_SECONDS } from "../cache";

export const revalidate = 43200;

export async function GET() {
  return NextResponse.json(
    {
      ok: true,
      source: "static_fallback",
      refreshedAt: new Date().toISOString(),
      data: getEnrichedDeals()
    },
    { headers: localApiCacheHeaders }
  );
}
