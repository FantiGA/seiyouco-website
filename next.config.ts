import type { NextConfig } from "next";

const config: NextConfig = {
  images: {
    domains: ["seiyouco.com"],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["@heroicons/react"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
};

export default config;
