import type { MetadataRoute } from "next";
import { landingPages } from "../data/landing-pages";

const baseUrl = "https://localdealsflorida.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/contact", "/privacy", "/terms"];
  const seoPages = landingPages.map((page) => `/${page.slug}`);

  return [...staticPages, ...seoPages].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date("2026-05-01"),
    changeFrequency: path === "" ? "daily" : "monthly",
    priority: path === "" ? 1 : 0.6
  }));
}
