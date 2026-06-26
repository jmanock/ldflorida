"use client";

import { useEffect } from "react";
import { Backpack, Camera, Sailboat } from "lucide-react";
import { trackClarityEvent } from "../../lib/clarity";
import { SAMBOAT_AFFILIATE_URL } from "../../lib/revenuePartners";
import { attractionTravelEssentials, type TravelEssentialItem } from "../../lib/travelEssentials";

const rel = "sponsored nofollow noopener noreferrer";

function eventForAdvertiser(advertiser: TravelEssentialItem["advertiser"]) {
  if (advertiser === "outfitr") return "affiliate_click_outfitr";
  if (advertiser === "nomatic") return "affiliate_click_nomatic";
  if (advertiser === "samboat") return "affiliate_click_attraction";
  return "travel_essentials_click";
}

function emit(event: string, payload: Record<string, string | number>) {
  window.gtag?.("event", event, payload);
  window.dataLayer?.push({ event, ...payload });
  trackClarityEvent(event, payload);
}

export default function TravelEssentialsBlock({ slug }: { slug: string }) {
  const isWaterPage = /boat|yacht|water|beach|key-west|clearwater|miami/.test(slug);
  const items: TravelEssentialItem[] = isWaterPage
    ? [
        ...attractionTravelEssentials.slice(0, 2),
        {
          title: "Boat day planning",
          description: "If the Florida activity is on the water, compare boat and yacht options before the best time slots disappear.",
          cta: "Compare Florida Boat Rentals",
          affiliateUrl: SAMBOAT_AFFILIATE_URL,
          advertiser: "samboat",
          category: "boat_rentals"
        }
      ]
    : attractionTravelEssentials;

  useEffect(() => {
    emit("travel_essentials_view", { source_site: "localdealsflorida.org", page_type: "local_attraction", page_path: window.location.pathname, item_count: items.length });
  }, [items.length]);

  function trackClick(item: TravelEssentialItem) {
    const payload = {
      source_site: "localdealsflorida.org",
      affiliate_program: "awin",
      advertiser: item.advertiser,
      category: item.category,
      cta_text: item.cta,
      item_title: item.title,
      outbound_url: item.affiliateUrl,
      page_path: window.location.pathname
    };
    emit("travel_essentials_click", payload);
    emit(eventForAdvertiser(item.advertiser), payload);
    emit("affiliate_click", payload);
  }

  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8" aria-labelledby="travel-essentials-title">
      <div className="rounded-[28px] border border-[#d8e6e3] bg-white p-6 shadow-xl shadow-[#087f8c]/8">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Travel essentials</p>
        <h2 id="travel-essentials-title" className="mt-2 text-3xl font-black text-[#163235]">Don’t forget the activity-day basics.</h2>
        <p className="mt-3 max-w-3xl font-semibold leading-7 text-[#52686b]">Theme parks, beach days, boat days, and city exploring are easier when the bag, comfort, and memory-keeping pieces are handled first.</p>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {items.map((item) => {
            const Icon = item.advertiser === "samboat" ? Sailboat : item.category === "camera_pack" ? Camera : Backpack;
            return (
              <a key={`${item.advertiser}-${item.title}`} href={item.affiliateUrl} target="_blank" rel={rel} className="group rounded-[24px] border border-[#d8e6e3] bg-[#f8fbf7] p-5 transition hover:-translate-y-1 hover:border-[#087f8c]" onClick={() => trackClick(item)}>
                <Icon className="h-7 w-7 text-[#087f8c]" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-black text-[#163235]">{item.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-[#52686b]">{item.description}</p>
                <span className="mt-5 inline-flex text-sm font-black text-[#087f8c]">{item.cta}</span>
              </a>
            );
          })}
        </div>
        <p className="mt-5 text-xs font-bold text-[#52686b]">Some links may be sponsored. We may earn a commission if you book or buy through them.</p>
      </div>
    </section>
  );
}
