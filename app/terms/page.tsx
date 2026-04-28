import type { Metadata } from "next";
import InfoPage from "../components/InfoPage";

export const metadata: Metadata = {
  title: "Terms | Local Florida Deals",
  description: "Terms of use for Local Florida Deals."
};

export default function TermsPage() {
  return (
    <InfoPage
      eyebrow="Terms"
      title="Terms of Use"
      intro="These starter terms describe the intended MVP usage rules for Local Florida Deals. They should be reviewed before public launch."
      sections={[
        {
          heading: "Deal accuracy",
          body: "Deals, prices, and dates can change. Users should confirm all details with the provider before purchasing or visiting."
        },
        {
          heading: "External links",
          body: "Booking and sister-site links may send users to third-party websites with their own terms, privacy policies, prices, and availability."
        },
        {
          heading: "Editorial use",
          body: "Local Florida Deals may organize, feature, or remove listings as needed to keep the site useful and current."
        }
      ]}
    />
  );
}
