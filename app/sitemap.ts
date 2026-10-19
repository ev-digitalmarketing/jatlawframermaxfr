import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages = ["", "/about", "/services", "/testimonials", "/consultation", "/contact"];
  return [
    ...pages.map((path) => ({ url: `${site.url}${path}`, lastModified })),
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, lastModified })),
  ];
}
