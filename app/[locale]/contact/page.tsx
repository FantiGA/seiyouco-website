import { loadMessages, generateStaticParams } from "@/utils/i18n";
import { Locale } from "@/utils/i18n";
import { Metadata } from "next";
import { Contact } from "@/components";
import ClientPage from "../ClientPage";

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
    title: messages.contact.title,
    description: messages.contact.description,
    keywords: messages.head.keywords,
    authors: [{ name: "Jun Wu" }],
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const messages = await loadMessages(locale);

  return (
    <ClientPage initialTranslations={messages} isHomePage={false}>
      <Contact translations={messages.contact} />
    </ClientPage>
  );
}
