"use client";

import { useEffect, useState, ReactNode } from "react";
import { TranslationKeys, TranslationSection } from "@/types";
import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Services,
  Stats,
  Team,
} from "@/components";

type ClientPageProps = {
  initialTranslations: {
    [K in keyof TranslationKeys]: TranslationSection<K>;
  };
  isHomePage?: boolean;
  children?: ReactNode;
};

export default function ClientPage({
  initialTranslations,
  isHomePage,
  children,
}: ClientPageProps) {
  const [translations] = useState(initialTranslations);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <>
      <Header
        translations={translations["header"]}
        isScrolled={isScrolled}
        languageTranslations={translations["language"]}
      />
      <main>
        {children || (
          <>
            <Hero translations={translations["hero"]} />
            <About translations={translations["about"]} />
            <Stats translations={translations["stats"]} />
            <Services translations={translations["services"]} />
            <Team translations={translations["team"]} />
            <Contact translations={translations["contact"]} />
          </>
        )}
      </main>
      <Footer translations={translations["footer"]} />
    </>
  );
}
