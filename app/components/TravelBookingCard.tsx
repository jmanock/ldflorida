"use client";
import { trackClarityEvent } from "../../lib/clarity";
import { EXPEDIA_GENERAL_AFFILIATE_URL } from "../../lib/revenuePartners";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export default function TravelBookingCard() {
  const onClick = () => {
    const data = { affiliate: "expedia", category: "travel_booking", component_type: "TravelBookingCard", placement: "travel_booking_section", partner: "expedia", page: window.location.pathname, page_path: window.location.pathname, outbound_url: EXPEDIA_GENERAL_AFFILIATE_URL };
    window.gtag?.("event", "expedia_click", data);
    window.dataLayer?.push({ event: "expedia_click", ...data });
    trackClarityEvent("expedia_click", data);
  };
  return <article className="rounded-[24px] border border-[#d8e6e3] bg-white p-6 shadow-lg shadow-[#087f8c]/8"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#087f8c]">Stay and trip planning</p><h3 className="mt-2 text-2xl font-black text-[#163235]">Turn The Activity Day Into A Florida Getaway</h3><p className="mt-3 text-sm font-semibold leading-7 text-[#52686b]">Compare travel options near the activities you want to visit, then verify current prices and terms.</p><a className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#087f8c] px-6 text-sm font-black text-white" href={EXPEDIA_GENERAL_AFFILIATE_URL} target="_blank" rel="nofollow sponsored noopener noreferrer" onClick={onClick}>Compare Travel Options</a><p className="mt-3 text-xs font-bold leading-5 text-[#52686b]">Some links may be affiliate links. We may earn a commission at no extra cost to you.</p></article>;
}
