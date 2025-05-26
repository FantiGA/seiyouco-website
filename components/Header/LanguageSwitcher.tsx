"use client";

import { useCallback, useEffect, useState, type FC } from "react";
import { useRouter, usePathname } from "next/navigation";
import clsx from "clsx";
import type { TranslationSection } from "@/types";
import { locales, type Locale } from "@/utils/i18n";

interface Props {
  languageTranslations: TranslationSection<"language">;
}

export const LanguageSwitcher: FC<Props> = ({ languageTranslations }) => {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState<Locale>("en");
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = useCallback(
    (locale: Locale) => {
      router.push(`/${locale}`);
      setIsLanguageMenuOpen(false);
    },
    [router],
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

  return (
    <div className="relative">
      <button
        onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
        className={clsx(
          "!text-[var(--nav-color)]",
          "text-sm",
          "px-0.5",
          "[font-family:var(--nav-font)]",
          "font-normal",
          "flex",
          "items-center",
          "justify-between",
          "whitespace-nowrap",
          "transition-all",
          "duration-300",
          "relative",
          "uppercase",
          "hover:text-[var(--nav-hover-color)]",
        )}
      >
        {getLanguageName(currentLocale as Locale)}
        <i className="bi bi-chevron-down ml-1"></i>
      </button>
      {isLanguageMenuOpen && (
        <div
          className={clsx(
            "absolute",
            "right-0",
            "mt-2",
            "w-32",
            "bg-white",
            "rounded-md",
            "shadow-lg",
            "py-1",
            "z-50",
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
                "text-gray-700",
                "hover:bg-gray-100",
                locale === currentLocale && "bg-gray-100",
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
