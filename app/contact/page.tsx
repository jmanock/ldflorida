import type { Metadata } from "next";
import InfoPage from "../components/InfoPage";

export const metadata: Metadata = {
  title: "Contact | Local Florida Deals",
  description: "Contact Local Florida Deals for partnerships, deal submissions, and general questions."
};

export default function ContactPage() {
  return (
    <InfoPage
      eyebrow="Contact"
      title="Send us a Florida deal"
      intro="Have a local promotion, event special, resident discount, or partnership idea? Reach the Local Florida Deals team by email."
      sections={[
        {
          heading: "General inbox",
          body: "Email hello@localfloridadeals.com for editorial questions, corrections, partnerships, and launch inquiries."
        },
        {
          heading: "Deal submissions",
          body: "Include the deal title, market, category, savings, valid dates, booking link, and a short description for review."
        }
      ]}
    />
  );
}
