"use client";

import { useCallback, useEffect, useRef, useState, type FC } from "react";
import { useRouter, usePathname } from "next/navigation";
import clsx from "clsx";
import type { TranslationSection } from "@/types";
import { locales, type Locale } from "@/utils/i18n";
import { LanguageIcon } from "@heroicons/react/24/outline";
import { Icon } from "..";

interface Props {
  languageTranslations: TranslationSection<"language">;
}

export const LanguageSwitcher: FC<Props> = ({ languageTranslations }) => {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState<Locale>("en");
  const router = useRouter();
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = useCallback(
    (locale: Locale) => {
      // Get the current path without the locale prefix
      const pathWithoutLocale = pathname.replace(
        /^\/[a-z]{2}(?:-[A-Z]{2})?(?=\/|$)/,
        "",
      );
      // Construct the new path with the selected locale
      const newPath = `/${locale}${pathWithoutLocale}`;
      router.push(newPath);
      setIsLanguageMenuOpen(false);
    },
    [router, pathname],
  );

  const getLanguageName = (locale: Locale) => {
    return languageTranslations?.[locale] || languageTranslations["en"];
  };

  useEffect(() => {
    const matched = locales.find((locale) => pathname.startsWith(`/${locale}`));
    if (matched) {
      setCurrentLocale(matched);
    }
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
    };

    if (isLanguageMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLanguageMenuOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
        className={clsx(
          "!text-[var(--nav-color)] lg:!text-[var(--nav-color)]",
          "[font-family:var(--nav-font)] font-normal",
          "text-base lg:text-base",
          "px-0.5",
          "flex items-center justify-start",
          "whitespace-nowrap",
          "transition-all duration-300",
          "relative",
          "w-full lg:w-auto",
          "uppercase",
          "before:content-['']",
          "before:absolute",
          "before:h-0.5",
          "before:-bottom-1.5",
          "before:left-0",
          "before:bg-[var(--accent-color)]",
          "before:transition-all",
          "before:duration-300",
          "before:ease-in-out",
        )}
      >
        <Icon icon={LanguageIcon} className="size-6 mr-1" />
        {getLanguageName(currentLocale as Locale)}
        <i className="bi bi-chevron-down ml-1"></i>
      </button>
      {isLanguageMenuOpen && (
        <div
          className={clsx(
            "absolute",
            "right-auto lg:right-0",
            "mt-2",
            "w-36",
            "bg-[var(--nav-dropdown-background-color)]",
            "text-[var(--nav-dropdown-color)]",
            "rounded-md",
            "shadow-sm lg:shadow-lg",
            "py-1",
            "z-[9999]",
          )}
        >
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              className={clsx(
                "block",
                "w-full",
                "text-left",
                "px-4",
                "py-2",
                "text-sm",
                "hover:bg-[var(--nav-dropdown-hover-background-color)]",
                locale === currentLocale &&
                  "text-[var(--accent-color)] bg-[var(--nav-dropdown-background-color)]",
              )}
            >
              {getLanguageName(locale)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
