import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";
import { projects } from "@/utils/projects";

const staticPaths = [
  "",
  "/about",
  "/certifications",
  "/projects",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of SITE.locales) {
    // Static routes per locale
    for (const path of staticPaths) {
      const url = new URL(`/${locale}${path}`, SITE.metadataBase).toString();
      const priority = path === "" ? 1 : path === "/projects" ? 0.8 : 0.7;
      entries.push({
        url,
        lastModified: now,
        changeFrequency: "weekly",
        priority,
      });
    }

    // Dynamic project detail pages per locale
    for (const p of projects) {
      const url = new URL(
        `/${locale}/projects/${encodeURIComponent(p.name)}`,
        SITE.metadataBase
      ).toString();
      entries.push({
        url,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}

// Revalida o sitemap diariamente (24h)
export const revalidate = 60 * 60 * 24;
