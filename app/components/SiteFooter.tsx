import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#d8e6e3] bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_1.4fr] lg:px-8">
        <div>
          <p className="text-xl font-black">Local Deals Florida</p>
          <p className="mt-3 max-w-md leading-7 text-[#52686b]">
            Local, useful, everyday Florida deals for restaurants, events, attractions, hidden gems, and things to do near you.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          <div>
            <h3 className="font-black">Network</h3>
            <div className="mt-3 grid gap-2 text-sm font-semibold text-[#52686b]">
              <a href="https://flightdealsflorida.org">Flight Deals</a>
              <a href="https://hoteldealsflorida.org">Hotel Deals</a>
              <a href="https://cruisedealsflorida.org">Cruise Deals</a>
              <a href="https://localdealsflorida.org">Local Deals</a>
              <a href="https://floridadealshub.com">Florida Deals Hub</a>
            </div>
          </div>
          <div>
            <h3 className="font-black">Company</h3>
            <div className="mt-3 grid gap-2 text-sm font-semibold text-[#52686b]">
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <a href="/sitemap.xml">Sitemap</a>
            </div>
          </div>
          <div>
            <h3 className="font-black">Markets</h3>
            <div className="mt-3 grid gap-2 text-sm font-semibold text-[#52686b]">
              <Link href="/orlando-local-deals">Orlando</Link>
              <Link href="/miami-local-deals">Miami</Link>
              <Link href="/tampa-local-deals">Tampa</Link>
              <Link href="/jacksonville-local-deals">Jacksonville</Link>
              <Link href="/fort-lauderdale-local-deals">Fort Lauderdale</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
