import type { MetadataRoute } from "next";

const baseUrl = "https://localdealsflorida.org";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/contact", "/privacy", "/terms"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date("2026-04-30"),
    changeFrequency: path === "" ? "daily" : "monthly",
    priority: path === "" ? 1 : 0.6
  }));
}
