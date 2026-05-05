"use client";

import { BedDouble, Hotel, Plane, Sailboat } from "lucide-react";
import type { BookingCity } from "../../lib/booking-links";

type FloridaGetawayBlockProps = {
  bookingUrl: string;
  city: BookingCity;
  category: string;
};

const networkCards = [
  {
    title: "Find cheap Florida flights",
    description: "Pair local plans with flight deal alerts from Florida airports.",
    href: "https://flightdealsflorida.org",
    icon: Plane
  },
  {
    title: "Browse Florida hotel deals",
    description: "Compare resort, beach, family, and staycation deal ideas.",
    href: "https://hoteldealsflorida.org",
    icon: Hotel
  },
  {
    title: "Browse Florida cruise deals",
    description: "Check sailings before or after local Florida plans.",
    href: "https://cruisedealsflorida.org",
    icon: Sailboat
  }
];

export default function FloridaGetawayBlock({ bookingUrl, city, category }: FloridaGetawayBlockProps) {
  function trackHotelClick() {
    window.gtag?.("event", "hotel_booking_click", {
      site: "localdealsflorida.org",
      source: "local",
      provider: "booking",
      city,
      category,
      page_path: window.location.pathname,
      outbound_url: bookingUrl
    });
  }

  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
      <div className="rounded-[28px] border border-[#d8e6e3] bg-white p-6 shadow-xl shadow-[#087f8c]/8">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Make It a Florida Getaway</p>
          <h2 className="mt-2 text-2xl font-black text-[#163235]">Turn local plans into a weekend stay</h2>
          <p className="mt-3 text-sm font-semibold leading-6 text-[#52686b]">
            Hotel rates may change, and availability varies by date. Check current details before booking.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <a
            className="card-lift rounded-[22px] border border-[#d8e6e3] bg-[#f8fbf7] p-5 shadow-lg shadow-[#087f8c]/8"
            href={bookingUrl}
            onClick={trackHotelClick}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#dff6f8] text-[#087f8c]">
              <BedDouble size={22} aria-hidden="true" />
            </div>
            <h3 className="mt-4 font-black text-[#163235]">Find hotels nearby</h3>
            <p className="mt-2 text-sm font-semibold leading-6 text-[#52686b]">Check hotel rates around {city} for weekend plans, date nights, and local events.</p>
            <span className="mt-4 inline-flex text-sm font-black text-[#087f8c]">Find Nearby Hotels</span>
          </a>

          {networkCards.map((card) => {
            const Icon = card.icon;

            return (
              <a className="card-lift rounded-[22px] border border-[#d8e6e3] bg-white p-5 shadow-lg shadow-[#087f8c]/8" href={card.href} key={card.href}>
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#dff6f8] text-[#087f8c]">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-black text-[#163235]">{card.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#52686b]">{card.description}</p>
                <span className="mt-4 inline-flex text-sm font-black text-[#087f8c]">Check Details</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
