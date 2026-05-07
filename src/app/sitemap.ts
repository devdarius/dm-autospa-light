import { MetadataRoute } from "next";
import { COMPANY, SERVICES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = COMPANY.siteUrl;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/uslugi`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/cennik`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/galeria`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${base}/uslugi/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
