import { ClientPage } from "@/components";
import { loadMessages, generateStaticParams, locales } from "@/utils/i18n";
import { Locale } from "@/utils/i18n";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export { generateStaticParams };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const messages = await loadMessages(locale);

  return {
    title: `${messages.header["menu-home"]} - ${messages.head.title}`,
    description: messages.head.description,
    keywords: messages.head.keywords,
    authors: [{ name: "Jun Wu" }],
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: `https://seiyouco.com/${locale}`,
      title: messages.head.title,
      description: messages.head.description,
      siteName: "Seiyou",
      images: [
        {
          url: "https://seiyouco.com/img/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Seiyou - Innovative IT Solutions Provider",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: messages.head.title,
      description: messages.head.description,
      images: ["https://seiyouco.com/img/og-image.jpg"],
    },
    alternates: {
      canonical: `https://seiyouco.com/${locale}`,
      languages: {
        "x-default": "https://seiyouco.com/en",
        ...Object.fromEntries(
          locales.map((l: Locale) => [l, `https://seiyouco.com/${l}`]),
        ),
      },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  const messages = await loadMessages(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Seiyou Co., Ltd.",
    url: `https://seiyouco.com/${locale}`,
    logo: "https://seiyouco.com/img/logo.svg",
    description: messages.head.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "401, 3-1-3 Toyotamakita",
      addressLocality: "Nerima-ku",
      addressRegion: "Tokyo",
      postalCode: "176-0012",
      addressCountry: "JP",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+81-03-5946-9159",
      contactType: "customer service",
      email: "info@seiyouco.com",
      availableLanguage: ["English", "Japanese", "Chinese", "Korean"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ClientPage initialTranslations={messages} isHomePage={true} />
    </>
  );
}
