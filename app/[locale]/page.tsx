import { ClientPage } from "@/components";
import { loadMessages, generateStaticParams } from "@/utils/i18n";
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
    title: messages.header.title,
    description: messages.header.description,
    keywords: messages.header.keywords,
    authors: [{ name: "Jun Wu" }],
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  const messages = await loadMessages(locale);
  return <ClientPage initialTranslations={messages} isHomePage={true} />;
}
