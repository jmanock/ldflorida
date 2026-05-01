import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-5DXJ4ERNX6";

export const metadata: Metadata = {
  title: "Florida Local Deals | Restaurants, Events & Things To Do",
  description:
    "Find local Florida deals for restaurants, events, attractions, family activities, weekend plans, and things to do in Orlando, Miami, Tampa, Jacksonville, and Fort Lauderdale.",
  keywords: [
    "Florida local deals",
    "restaurants deals Florida",
    "Florida events",
    "things to do in Florida",
    "Orlando deals",
    "Miami deals",
    "Tampa deals",
    "Jacksonville deals",
    "Fort Lauderdale deals"
  ],
  openGraph: {
    title: "Florida Local Deals | Restaurants, Events & Things To Do",
    description:
      "Find local Florida deals for restaurants, events, attractions, family activities, weekend plans, and things to do in Orlando, Miami, Tampa, Jacksonville, and Fort Lauderdale.",
    type: "website",
    locale: "en_US",
    siteName: "Local Deals Florida",
    url: "https://localdealsflorida.org",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: "Florida local restaurant patio with warm evening light"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Florida Local Deals | Restaurants, Events & Things To Do",
    description:
      "Find local Florida deals for restaurants, events, attractions, family activities, weekend plans, and things to do.",
    images: ["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&h=630&q=85"]
  },
  alternates: {
    canonical: "https://localdealsflorida.org"
  },
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}

        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
