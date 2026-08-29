import type { MetadataRoute } from "next";
import profile from "@/data/profile.json";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${profile.site.url}/sitemap.xml`,
  };
}
