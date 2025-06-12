import { MetadataRoute } from "next";

export const dynamic = "force-static";
export const revalidate = 3600; // revalidate every hour

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://seiyouco.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
