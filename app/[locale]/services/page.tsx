import { loadMessages, generateStaticParams } from "@/utils/i18n";
import { Locale } from "@/utils/i18n";
import { Metadata } from "next";
import { Services, ClientPage } from "@/components";

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
    title: `${messages.services.title} - ${messages.head.title}`,
    description: messages.head.description,
    keywords: messages.head.keywords,
    authors: [{ name: "Jun Wu" }],
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;
  const messages = await loadMessages(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: messages.services["service-1-title"],
        description: messages.services["service-1-description"],
        provider: {
          "@type": "Organization",
          name: "Seiyou Co., Ltd.",
          url: `https://seiyouco.com/${locale}`,
        },
      },
      {
        "@type": "Service",
        position: 2,
        name: messages.services["service-2-title"],
        description: messages.services["service-2-description"],
        provider: {
          "@type": "Organization",
          name: "Seiyou Co., Ltd.",
          url: `https://seiyouco.com/${locale}`,
        },
      },
      {
        "@type": "Service",
        position: 3,
        name: messages.services["service-3-title"],
        description: messages.services["service-3-description"],
        provider: {
          "@type": "Organization",
          name: "Seiyou Co., Ltd.",
          url: `https://seiyouco.com/${locale}`,
        },
      },
      {
        "@type": "Service",
        position: 4,
        name: messages.services["service-4-title"],
        description: messages.services["service-4-description"],
        provider: {
          "@type": "Organization",
          name: "Seiyou Co., Ltd.",
          url: `https://seiyouco.com/${locale}`,
        },
      },
      {
        "@type": "Service",
        position: 5,
        name: messages.services["service-5-title"],
        description: messages.services["service-5-description"],
        provider: {
          "@type": "Organization",
          name: "Seiyou Co., Ltd.",
          url: `https://seiyouco.com/${locale}`,
        },
      },
      {
        "@type": "Service",
        position: 6,
        name: messages.services["service-6-title"],
        description: messages.services["service-6-description"],
        provider: {
          "@type": "Organization",
          name: "Seiyou Co., Ltd.",
          url: `https://seiyouco.com/${locale}`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ClientPage initialTranslations={messages} isHomePage={false}>
        <Services translations={messages.services} />
      </ClientPage>
    </>
  );
}
