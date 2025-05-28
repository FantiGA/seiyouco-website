import { MetadataRoute } from "next";
import { locales } from "@/utils/i18n";

export const dynamic = "force-static";
export const revalidate = 3600; // revalidate every hour

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://seiyouco.com";
  const routes = ["", "/about", "/services", "/contact", "/careers"];

  const sitemapEntries = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
  );

  return sitemapEntries;
}
