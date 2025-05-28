import { MetadataRoute } from "next";
import { locales } from "@/utils/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://seiyouco.com";
  const routes = ["", "/about", "/services", "/contact", "/careers"];

  const sitemap = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
  );

  return sitemap;
}
