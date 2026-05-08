import type { Metadata } from "next";
import { createPageMetadata } from "../../lib/seo";
import InfoPage from "../components/InfoPage";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy | Local Deals Florida",
  description: "Read the Local Deals Florida privacy policy for email alerts, analytics, contact requests, and Florida Deals Hub site usage.",
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <InfoPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="This starter policy explains the intended MVP privacy posture for Local Deals Florida. It should be reviewed by counsel before public launch."
      sections={[
        {
          heading: "Information collected",
          body: "The MVP email form is intended to collect an email address for deal alerts. Future analytics or advertising tools should be disclosed here before launch."
        },
        {
          heading: "How information is used",
          body: "Email addresses should be used to send requested Florida deal alerts, site updates, and related savings content."
        },
        {
          heading: "User choices",
          body: "Marketing emails should include an unsubscribe option, and users should be able to contact the team with privacy questions."
        }
      ]}
    />
  );
}
