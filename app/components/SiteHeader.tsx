import { Bell } from "lucide-react";

const navItems = [
  { label: "Flights", href: "https://flightdealsflorida.org" },
  { label: "Hotels", href: "https://hoteldealsflorida.org" },
  { label: "Cruises", href: "https://cruisedealsflorida.org" },
  { label: "Local Deals", href: "/", active: true },
  { label: "Florida Deals Hub", href: "https://floridadealshub.com" }
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Top navigation">
        <a className="flex items-center gap-3" href="/" aria-label="Local Deals Florida home">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#087f8c] text-lg font-black text-white shadow-md shadow-[#087f8c]/25">
            LD
          </span>
          <span className="leading-tight">
            <span className="block text-base font-black">Local Deals Florida</span>
            <span className="block text-xs font-bold text-[#6f8588]">Part of Florida Deals Hub</span>
          </span>
        </a>
        <div className="hidden items-center gap-1 rounded-full bg-[#eef6f5] p-1 md:flex">
          {navItems.map((site) => (
            <a
              className={`rounded-full px-4 py-2 text-sm font-bold transition hover:bg-white hover:text-[#087f8c] ${
                site.active ? "bg-white text-[#087f8c] shadow-sm" : "text-[#52686b]"
              }`}
              href={site.href}
              key={site.label}
              aria-current={site.active ? "page" : undefined}
            >
              {site.label}
            </a>
          ))}
        </div>
        <a
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#163235] px-3 text-sm font-bold text-white shadow-md shadow-[#163235]/15 transition hover:bg-[#07515a] sm:px-4"
          href="#alerts"
          aria-label="Get deal alerts"
          style={{ color: "#ffffff" }}
        >
          <Bell size={16} aria-hidden="true" />
          <span>Alerts</span>
        </a>
      </nav>
      <nav className="deal-scroll flex gap-2 overflow-x-auto border-t border-[#d8e6e3] px-4 py-2 text-xs font-black text-[#52686b] sm:px-6 md:hidden" aria-label="Mobile navigation">
        {navItems.map((site) => (
          <a
            aria-current={site.active ? "page" : undefined}
            className={`whitespace-nowrap rounded-full border px-3 py-2 ${
              site.active ? "border-[#087f8c] bg-[#087f8c] text-white" : "border-[#d8e6e3] bg-white"
            }`}
            href={site.href}
            key={site.label}
          >
            {site.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
