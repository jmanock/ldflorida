import type { Metadata } from "next";
import InfoPage from "../components/InfoPage";

export const metadata: Metadata = {
  title: "About | Local Florida Deals",
  description: "Learn about Local Florida Deals and the Florida savings network."
};

export default function AboutPage() {
  return (
    <InfoPage
      eyebrow="About"
      title="Built for Florida deal seekers"
      intro="Local Florida Deals helps residents and visitors find useful savings on attractions, hotels, restaurants, events, and family-friendly things to do."
      sections={[
        {
          heading: "Our focus",
          body: "We organize local savings by market, category, budget, and deal type so visitors can quickly find ideas that fit their plans."
        },
        {
          heading: "Part of a Florida network",
          body: "The site is designed to connect naturally with Florida Cruise Deals and Florida Flight Deals as a broader travel and savings family."
        }
      ]}
    />
  );
}
