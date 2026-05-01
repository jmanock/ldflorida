import { ArrowRight, Building2, Hotel, Plane, Sailboat } from "lucide-react";

const sisterSites = [
  {
    title: "Flight Deals",
    href: "https://flightdealsflorida.org",
    description: "Cheap airfare alerts for Florida airports, weekend routes, and warm-weather trips.",
    icon: Plane
  },
  {
    title: "Hotel Deals",
    href: "https://hoteldealsflorida.org",
    description: "Resorts, beach stays, family hotels, and Florida staycation rates.",
    icon: Hotel
  },
  {
    title: "Cruise Deals",
    href: "https://cruisedealsflorida.org",
    description: "Sailings from Miami, Port Canaveral, Tampa, Fort Lauderdale, and Jacksonville.",
    icon: Sailboat
  },
  {
    title: "Florida Deals Hub",
    href: "https://floridadealshub.com",
    description: "The parent network for Florida flights, hotels, cruises, and local savings.",
    icon: Building2
  }
];

export default function SisterSitesSection() {
  return (
    <section className="border-y border-[#d8e6e3] bg-[#eef6f5]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087f8c]">Explore More Florida Deals</p>
          <h2 className="mt-3 text-3xl font-black text-[#163235] sm:text-4xl">
            One trusted network for Florida travel, stays, cruises, and local savings.
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {sisterSites.map((site) => {
            const Icon = site.icon;

            return (
              <a
                className="card-lift rounded-[24px] border border-[#d8e6e3] bg-white p-6 shadow-lg shadow-[#087f8c]/8"
                href={site.href}
                key={site.title}
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#dff6f8] text-[#087f8c]">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-black text-[#163235]">{site.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#52686b]">{site.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#087f8c]">
                  Explore
                  <ArrowRight size={16} aria-hidden="true" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
