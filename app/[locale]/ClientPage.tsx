"use client";

import { useState } from "react";
import { TranslationKeys, TranslationSection } from "@/types";
import { Footer, Header } from "@/components";

type ClientPageProps = {
  initialTranslations: {
    [K in keyof TranslationKeys]: TranslationSection<K>;
  };
};

export default function ClientPage({ initialTranslations }: ClientPageProps) {
  const [translations] = useState(initialTranslations);

  return (
    <>
      <Header translations={translations} />
      <Footer translations={translations["footer"]} />
    </>
  );
}
