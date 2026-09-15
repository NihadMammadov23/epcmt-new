import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.siteUrl;
  const now = new Date();

  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/haqqimizda", priority: 0.8 },
    { path: "/xidmetler", priority: 0.9 },
    { path: "/layiheler", priority: 0.9 },
    { path: "/qalereya", priority: 0.6 },
    { path: "/elaqe", priority: 0.7 },
  ].map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: r.priority,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/xidmetler/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/layiheler/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
