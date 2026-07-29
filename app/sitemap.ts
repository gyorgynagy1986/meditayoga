import type { MetadataRoute } from "next";
import { instructors, site } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/oratipusok", priority: 0.9 },
    { path: "/foglalas", priority: 0.9 },
    { path: "/arak", priority: 0.8 },
    { path: "/studio", priority: 0.8 },
    { path: "/oktatok", priority: 0.8 },
    { path: "/rolunk", priority: 0.7 },
    { path: "/kapcsolat", priority: 0.7 },
    { path: "/hazirend", priority: 0.5 },
  ];

  return [
    ...pages.map((p) => ({
      url: `${site.url}${p.path}`,
      lastModified,
      priority: p.priority,
    })),
    ...instructors.map((i) => ({
      url: `${site.url}/oktatok/${i.slug}`,
      lastModified,
      priority: 0.6,
    })),
  ];
}
