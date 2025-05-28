import { Metadata } from "next";

export const defaultMetadata: Metadata = {
  metadataBase: new URL("https://seiyouco.com"),
  title: {
    default: "Seiyouco - Professional Translation Services",
    template: "%s | Seiyouco",
  },
  description:
    "Professional translation services in multiple languages. We provide high-quality translation, interpretation, and localization services for businesses and individuals.",
  keywords: [
    "translation",
    "localization",
    "interpretation",
    "language services",
    "professional translation",
  ],
  authors: [{ name: "Seiyouco" }],
  creator: "Seiyouco",
  publisher: "Seiyouco",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://seiyouco.com",
    siteName: "Seiyouco",
    title: "Seiyouco - Professional Translation Services",
    description:
      "Professional translation services in multiple languages. We provide high-quality translation, interpretation, and localization services for businesses and individuals.",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Seiyouco - Professional Translation Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seiyouco - Professional Translation Services",
    description:
      "Professional translation services in multiple languages. We provide high-quality translation, interpretation, and localization services for businesses and individuals.",
    images: ["/img/og-image.jpg"],
    creator: "@seiyouco",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://seiyouco.com",
    languages: {
      en: "https://seiyouco.com/en",
      ja: "https://seiyouco.com/ja",
      "zh-CN": "https://seiyouco.com/zh-CN",
      "zh-TW": "https://seiyouco.com/zh-TW",
      "zh-HK": "https://seiyouco.com/zh-HK",
      ko: "https://seiyouco.com/ko",
    },
  },
};
