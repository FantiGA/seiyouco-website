"use client";

import { useEffect, useState, ReactNode } from "react";
import { TranslationKeys, TranslationSection } from "@/types";
import { Footer, Header, Hero } from "@/components";
import clsx from "clsx";

interface ClientPageProps {
  initialTranslations: {
    [K in keyof TranslationKeys]: TranslationSection<K>;
  };
  isHomePage?: boolean;
  children?: ReactNode;
}

export function ClientPage({
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
      <main
        className={clsx(
          !isHomePage && "mt-28",
          !isHomePage && "px-[calc(var(--bs-gutter-x)*.5)]",
          "w-full",
        )}
      >
        {children || <Hero translations={translations["hero"]} />}
      </main>
      <Footer translations={translations["footer"]} />
    </>
  );
}
