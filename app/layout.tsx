import type { Metadata } from "next";
import Script from "next/script";
import { CLARITY_ID } from "../lib/clarity";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-5DXJ4ERNX6";
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Florida Deals Hub",
  url: "https://floridadealshub.com",
  sameAs: ["https://flightdealsflorida.org", "https://hoteldealsflorida.org", "https://cruisedealsflorida.org", "https://localdealsflorida.org"]
};
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Local Deals Florida",
  url: "https://localdealsflorida.org",
  publisher: {
    "@type": "Organization",
    name: "Florida Deals Hub",
    url: "https://floridadealshub.com"
  }
};

export const metadata: Metadata = {
  title: "Things To Do In Florida: Local Events, Attractions & Weekend Ideas",
  description:
    "Find things to do in Florida including local events, attractions, restaurants, family activities, date night ideas, free outings, and weekend plans.",
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
    title: "Things To Do In Florida: Local Events, Attractions & Weekend Ideas",
    description:
      "Find Florida events, attractions, restaurants, family activities, free outings, and weekend ideas.",
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
    title: "Local Deals Florida | Attractions, Events & Things To Do",
    description:
      "Discover Florida local deals, attractions, restaurants, events, family activities, date night ideas, free things to do, and weekend plans.",
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
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
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
      </body>
    </html>
  );
}
