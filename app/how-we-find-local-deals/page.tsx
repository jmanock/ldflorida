import type { Metadata } from "next";
import { createPageMetadata } from "../../lib/seo";
import InfoPage from "../components/InfoPage";

export const metadata: Metadata = createPageMetadata({
  title: "How We Find Local Deals | Local Deals Florida",
  description:
    "See how Local Deals Florida finds and organizes attractions, restaurants, events, free activities, city guides, and things to do across Florida.",
  path: "/how-we-find-local-deals"
});

export default function HowWeFindLocalDealsPage() {
  return (
    <InfoPage
      eyebrow="How we find local deals"
      title="Built around real Florida source pages"
      intro="Local Deals Florida helps people compare attractions, restaurants, events, family activities, free things to do, and city guides without relying on unsupported coupon language."
      sections={[
        {
          heading: "Where listings come from",
          body: "We look for official attraction pages, city event calendars, local tourism boards, restaurant offer pages, museums, venues, waterfront districts, parks departments, and statewide travel resources. These sources are used to build useful local cards and planning guides."
        },
        {
          heading: "What readers should verify",
          body: "Deals may change, event schedules may change, availability varies, and weather can affect outdoor plans. Readers should confirm prices, dates, hours, parking, restrictions, reservations, and ticket terms directly with the official source."
        },
        {
          heading: "How pages are organized",
          body: "We group Florida local discovery by city, activity type, seasonal intent, comparison need, and planning context. The goal is to help locals and travelers find useful things to do faster, then connect naturally to Florida Flight Deals, Florida Hotel Deals, Florida Cruise Deals, and Florida Deals Hub."
        }
      ]}
    />
  );
}
