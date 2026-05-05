import type { Metadata } from "next";
import InfoPage from "../components/InfoPage";

export const metadata: Metadata = {
  title: "Terms | Local Deals Florida",
  description: "Terms of use for Local Deals Florida."
};

export default function TermsPage() {
  return (
    <InfoPage
      eyebrow="Terms"
      title="Terms of Use"
      intro="These starter terms describe the intended MVP usage rules for Local Deals Florida. They should be reviewed before public launch."
      sections={[
        {
          heading: "Deal accuracy",
          body: "Deals, prices, and dates can change. Users should confirm all details with the provider before purchasing or visiting."
        },
        {
          heading: "External links",
          body: "Hotel, deal, and sister-site links may send users to third-party websites with their own terms, privacy policies, prices, and availability."
        },
        {
          heading: "Editorial use",
          body: "Local Deals Florida may organize, feature, or remove listings as needed to keep the site useful and current."
        }
      ]}
    />
  );
}
