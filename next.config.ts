import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // Enable static export
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": __dirname,
    };
    return config;
  },
  // Enable compression
  compress: true,
  // Enable strict mode
  reactStrictMode: true,
  // Enable source maps in production
  productionBrowserSourceMaps: true,
  // Skip trailing slash redirect for static export
  skipTrailingSlashRedirect: true,
  // Skip middleware URL normalization for static export
  skipMiddlewareUrlNormalize: true,
};

export default nextConfig;
