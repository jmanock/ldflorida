"use client";

import type { PiscifunAffiliateItem } from "../../lib/affiliate/piscifunLinks";
import FallbackImage from "./FallbackImage";

export default function AffiliateGearCard({ item, ctaText = "Browse Piscifun Products" }: { item: PiscifunAffiliateItem; ctaText?: string }) {
  function trackClick() {
    const payload = {
      source_site: "localdealsflorida.org",
      affiliate_program: "awin",
      advertiser: "piscifun",
      item_title: item.title,
      category: item.category,
      cta_text: ctaText,
      outbound_url: item.affiliateUrl,
      page_path: window.location.pathname
    };

    window.gtag?.("event", "affiliate_click", payload);
    window.dataLayer?.push({
      event: "affiliate_click",
      ...payload
    });
  }

  return (
    <article className="overflow-hidden rounded-[24px] border border-[#d8e6e3] bg-white shadow-xl shadow-[#087f8c]/8">
      <div className="h-40 bg-[#eef6f5]">
        <FallbackImage alt={item.imageAlt} className="h-full w-full object-cover" src={item.imageUrl} />
      </div>
      <div className="p-5">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-[#087f8c]">{item.destinationOrUseCase}</p>
        <h3 className="mt-2 text-xl font-black text-[#163235]">{item.title}</h3>
        <p className="mt-3 text-sm font-semibold leading-6 text-[#52686b]">{item.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.bestForTags.map((tag) => (
            <span className="rounded-full bg-[#eef6f5] px-3 py-1 text-xs font-black text-[#385154]" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <a
          className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[#163235] px-5 text-sm font-black text-white transition hover:bg-[#07515a]"
          href={item.affiliateUrl}
          onClick={trackClick}
          rel="nofollow sponsored noopener noreferrer"
          target="_blank"
        >
          {ctaText}
        </a>
        <p className="mt-3 text-xs font-semibold leading-5 text-[#6f8588]">
          Some links on this site may earn us a commission at no extra cost to you.
        </p>
      </div>
    </article>
  );
}
