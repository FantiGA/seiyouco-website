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

  return (
    <ClientPage initialTranslations={messages} isHomePage={false}>
      <Services translations={messages.services} />
      {/* <Stats translations={messages.stats} /> */}
    </ClientPage>
  );
}
