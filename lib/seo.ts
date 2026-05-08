import type { Metadata } from "next";

const baseUrl = "https://localdealsflorida.org";
const defaultImage = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&h=630&q=85";

export function createPageMetadata({
  title,
  description,
  path,
  image = defaultImage,
  imageAlt = "Florida local restaurant patio with warm evening light"
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
}): Metadata {
  const canonical = `${baseUrl}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_US",
      siteName: "Local Deals Florida",
      url: canonical,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}
