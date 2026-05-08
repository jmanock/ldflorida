import type { Metadata } from "next";
import { createPageMetadata } from "../../lib/seo";
import InfoPage from "../components/InfoPage";

export const metadata: Metadata = createPageMetadata({
  title: "About Local Deals Florida | Florida Deals Hub",
  description: "Learn how Local Deals Florida curates restaurants, events, attractions, family activities, and local savings as part of Florida Deals Hub.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <InfoPage
      eyebrow="About"
      title="Built for Florida deal seekers"
      intro="Local Deals Florida helps residents and visitors find useful savings on restaurants, events, attractions, hidden gems, and family-friendly things to do."
      sections={[
        {
          heading: "Our focus",
          body: "We organize local savings by market, category, budget, and deal type so visitors can quickly find ideas that fit their plans."
        },
        {
          heading: "Part of a Florida network",
          body: "The site is part of Florida Deals Hub, connecting naturally with Florida Flight Deals, Florida Hotel Deals, and Florida Cruise Deals as one broader travel and savings family."
        }
      ]}
    />
  );
}
