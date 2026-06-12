"use client";
import { trackClarityEvent } from "../../lib/clarity";
import { getTransferAffiliateUrl } from "../../lib/revenuePartners";

function track(event: string, data: Record<string, string>) {
  window.gtag?.("event", event, data);
  window.dataLayer?.push({ event, ...data });
  trackClarityEvent(event, data);
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export default function TransferBookingCard({ slug }: { slug: string }) {
  const href = getTransferAffiliateUrl("localdealsflorida.org", slug);
  return <article className="rounded-[24px] border border-[#d8e6e3] bg-white p-6 shadow-lg shadow-[#087f8c]/8"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#087f8c]">Transportation planning</p><h3 className="mt-2 text-2xl font-black text-[#163235]">Need A Ride To Your Florida Plans?</h3><p className="mt-3 text-sm font-semibold leading-7 text-[#52686b]">Compare airport transfers before building activities around a fixed arrival or departure time.</p><a className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#087f8c] px-6 text-sm font-black text-white" href={href} rel="sponsored" onClick={() => track("transfer_click", { affiliate: "airport_transfer_portal", category: "airport_transfer", page_path: window.location.pathname, outbound_url: href })}>Compare Airport Transfers</a><p className="mt-3 text-xs font-bold leading-5 text-[#52686b]">Some links may be affiliate links. We may earn a commission at no extra cost to you.</p></article>;
}
