import type { Metadata } from "next";
import { createPageMetadata } from "../../lib/seo";
import InfoPage from "../components/InfoPage";

export const metadata: Metadata = createPageMetadata({
  title: "Editorial Policy | Local Deals Florida",
  description:
    "Learn how Local Deals Florida reviews local attractions, events, restaurants, activity guides, source links, and Florida Deals Hub editorial standards.",
  path: "/editorial-policy"
});

export default function EditorialPolicyPage() {
  return (
    <InfoPage
      eyebrow="Editorial policy"
      title="How we publish Florida local guides"
      intro="Local Deals Florida is part of the Florida Deals Hub travel network. We organize Florida attractions, restaurants, events, activities, and city guides to help locals and travelers discover things to do faster."
      sections={[
        {
          heading: "Source-first publishing",
          body: "We prioritize official tourism boards, city calendars, attraction websites, restaurant pages, museum pages, event venues, and public source pages. Local offers, event schedules, prices, hours, and availability may change, so readers should confirm current details directly with the official source before visiting or buying."
        },
        {
          heading: "Safe deal language",
          body: "We avoid unsupported savings claims, unsupported urgency, unsupported exclusives, and stale card-level timestamps. When exact pricing is not clear from the source, we use safer wording such as view ticket options, browse current offers, event details may vary, or confirm details with the official source."
        },
        {
          heading: "Guide updates",
          body: "Our city guides, comparison pages, seasonal pages, and activity guides are updated as the Florida Deals Hub network grows. We focus on usefulness, internal linking, clear source attribution, descriptive images, and practical planning context."
        }
      ]}
    />
  );
}
