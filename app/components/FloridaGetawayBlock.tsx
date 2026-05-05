"use client";

import { Hotel } from "lucide-react";

export default function FloridaGetawayBlock() {
  const hotelDealsUrl = "https://hoteldealsflorida.org";

  function trackHotelDealsClick() {
    window.gtag?.("event", "navigation_click", {
      site: "localdealsflorida.org",
      source: "local",
      label: "Browse Florida Hotel Deals",
      href: hotelDealsUrl,
      page_path: window.location.pathname,
    });
  }

  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
      <div className="rounded-[28px] border border-[#d8e6e3] bg-white p-6 shadow-xl shadow-[#087f8c]/8">
        <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Make It a Florida Weekend</p>
            <h2 className="mt-2 text-2xl font-black text-[#163235]">Planning a full day out or weekend trip?</h2>
            <p className="mt-3 text-sm font-semibold leading-6 text-[#52686b]">
              Browse nearby stays through our Florida Hotel Deals site. Hotel rates may change, and availability varies by date.
            </p>
          </div>
          <a
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#163235] px-6 text-sm font-black text-white shadow-lg shadow-[#163235]/15 transition hover:bg-[#07515a]"
            href={hotelDealsUrl}
            onClick={trackHotelDealsClick}
            style={{ color: "#ffffff" }}
          >
            <Hotel size={18} aria-hidden="true" />
            Browse Florida Hotel Deals
          </a>
        </div>
        <p className="mt-4 text-xs font-bold leading-5 text-[#6f8588]">
          Local deals may change. Compare nearby hotels separately when your plans turn into an overnight stay.
        </p>
      </div>
    </section>
  );
}
