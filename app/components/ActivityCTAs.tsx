"use client";

import { Building2, Compass, Hotel, Plane, Sailboat, Ticket, Waves, type LucideIcon } from "lucide-react";
import { trackClarityEvent } from "../../lib/clarity";

type CTAProps = {
  href: string;
  title: string;
  description: string;
  buttonText: string;
  icon: LucideIcon;
  affiliate?: boolean;
  category: string;
};

function ActivityCTA({ href, title, description, buttonText, icon: Icon, affiliate = false, category }: CTAProps) {
  function trackClick() {
    const payload = {
      source_site: "localdealsflorida.org",
      destination_site: href.startsWith("https://") ? new URL(href).hostname : "localdealsflorida.org",
      page_path: window.location.pathname,
      cta_text: buttonText,
      content_type: "activity_cta",
      category,
      outbound_url: href
    };

    window.gtag?.("event", affiliate ? "affiliate_click" : "guide_click", payload);
    window.dataLayer?.push({ event: affiliate ? "affiliate_click" : "guide_click", ...payload });
    trackClarityEvent(affiliate ? "affiliate_click" : "guide_click", payload);
  }

  return (
    <div className="rounded-[22px] border border-[#d8e6e3] bg-white p-5 shadow-lg shadow-[#087f8c]/8">
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#dff6f8] text-[#087f8c]">
        <Icon size={21} aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-lg font-black text-[#163235]">{title}</h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-[#52686b]">{description}</p>
      <a
        className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[#163235] px-5 text-sm font-black text-white transition hover:bg-[#07515a]"
        href={href}
        onClick={trackClick}
        rel={affiliate ? "sponsored noopener noreferrer" : href.startsWith("https://") ? "noopener noreferrer" : undefined}
        style={{ color: "#ffffff" }}
      >
        {buttonText}
      </a>
    </div>
  );
}

export function AttractionCTA() {
  return <ActivityCTA buttonText="Compare Florida Attractions" category="attractions" description="Explore official attraction sources, family ideas, and current planning details." href="/florida-attraction-deals" icon={Ticket} title="Planning an attraction day?" />;
}

export function TourCTA() {
  return <ActivityCTA buttonText="Find Tours & Activities" category="tours" description="Compare outdoor experiences, water activities, city guides, and tour ideas." href="/florida-water-activities" icon={Compass} title="Looking for a Florida tour?" />;
}

export function TicketCTA() {
  return <ActivityCTA buttonText="Plan Your Orlando Visit" category="tickets" description="Use the Orlando attraction guide before checking current ticket options with official sources." href="/things-to-do-in-orlando" icon={Ticket} title="Comparing theme park tickets?" />;
}

export function BoatRentalCTA() {
  return <ActivityCTA buttonText="Explore Boat Day Options" category="boat_rentals" description="Compare Miami boat-day planning, water activities, group needs, and weather considerations." href="/miami-boat-rentals" icon={Waves} title="Planning time on the water?" />;
}

export function HotelCTA() {
  return <ActivityCTA buttonText="Find Nearby Hotels" category="hotels" description="Compare Florida hotels when an attraction day becomes an overnight trip." href="https://hoteldealsflorida.org" icon={Hotel} title="Need a place to stay?" />;
}

export function FlightCTA() {
  return <ActivityCTA buttonText="Find Florida Flights" category="flights" description="Compare Florida airport and route guides before building the rest of the trip." href="https://flightdealsflorida.org" icon={Plane} title="Flying in for the experience?" />;
}

export function CruiseCTA() {
  return <ActivityCTA buttonText="Plan a Florida Cruise" category="cruises" description="Pair Port Canaveral, Miami, Tampa, and Jacksonville sailings with useful local activities." href="https://cruisedealsflorida.org" icon={Sailboat} title="Adding activities to a cruise?" />;
}

export function ActivityCTAGroup({ slug }: { slug: string }) {
  const isWater = /boat|water|sunset|everglades|key-west|miami/.test(slug);
  const isCruise = /port-canaveral|kennedy|cruise/.test(slug);
  const isOrlando = /orlando|disney|universal/.test(slug);

  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mb-6 max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Plan the next step</p>
        <h2 className="mt-2 text-3xl font-black text-[#163235]">Turn activity ideas into a practical Florida day</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {isWater ? <BoatRentalCTA /> : isOrlando ? <TicketCTA /> : <AttractionCTA />}
        {isCruise ? <CruiseCTA /> : <TourCTA />}
        {isOrlando ? <FlightCTA /> : <HotelCTA />}
      </div>
    </section>
  );
}

export function TravelDealsCTA() {
  return <ActivityCTA buttonText="Start at Florida Deals Hub" category="travel_planning" description="Connect activities with flights, hotels, cruises, and Florida vacation planning." href="https://floridadealshub.com" icon={Building2} title="Planning the full Florida trip?" />;
}
