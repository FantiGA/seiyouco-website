"use client";

import { useEffect, useState } from "react";
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
};

export default function ClientPage({ initialTranslations }: ClientPageProps) {
  const [translations] = useState(initialTranslations);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header translations={translations["header"]} isScrolled={isScrolled} />
      <main>
        <Hero translations={translations["hero"]} />
        <About translations={translations["about"]} />
        <Stats translations={translations["stats"]} />
        <Services translations={translations["services"]} />
        <Team translations={translations["team"]} />
        <Contact translations={translations["contact"]} />
      </main>
      <Footer translations={translations["footer"]} />
    </>
  );
}
