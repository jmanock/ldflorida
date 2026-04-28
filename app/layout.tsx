import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Local Florida Deals | Attractions, Events, Hotels, Food & Family Savings",
  description:
    "Discover daily Florida deals on attractions, hotels, restaurants, events, theme parks, family fun, resident discounts, and weekend ideas.",
  keywords: [
    "Florida deals",
    "Orlando discounts",
    "Miami deals",
    "Tampa events",
    "Fort Lauderdale savings",
    "Jacksonville family deals",
    "Florida resident discounts"
  ],
  openGraph: {
    title: "Local Florida Deals",
    description:
      "Daily savings on attractions, hotels, restaurants, events, and family fun across Florida.",
    type: "website",
    locale: "en_US",
    siteName: "Local Florida Deals"
  },
  alternates: {
    canonical: "https://localfloridadeals.com"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
