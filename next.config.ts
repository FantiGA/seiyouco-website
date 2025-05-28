import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // Enable static export
  output: "export",
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": __dirname,
    };
    return config;
  },
};

export default nextConfig;
