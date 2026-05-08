import type { Metadata } from "next";
import { createPageMetadata } from "../../lib/seo";
import InfoPage from "../components/InfoPage";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Local Deals Florida | Submit Local Deals",
  description: "Contact Local Deals Florida for local deal submissions, source corrections, partnerships, restaurants, events, attractions, and Florida savings ideas.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <InfoPage
      eyebrow="Contact"
      title="Send us a Florida deal"
      intro="Have a local promotion, event special, restaurant discount, or partnership idea? Reach the Local Deals Florida team by email."
      sections={[
        {
          heading: "General inbox",
          body: "Email hello@localdealsflorida.org for editorial questions, corrections, partnerships, and launch inquiries."
        },
        {
          heading: "Deal submissions",
          body: "Include the deal title, market, category, savings, valid dates, source link, and a short description for review."
        }
      ]}
    />
  );
}
