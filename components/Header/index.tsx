"use client";

import Image from "next/image";
import { useState, type FC } from "react";
import Link from "next/link";
import clsx from "clsx";
import type { TranslationSection } from "@/types";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { usePathname } from "next/navigation";
import { locales } from "@/utils/i18n";
import { Icon } from "..";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface Props {
  translations: TranslationSection<"header">;
  isScrolled: boolean;
  languageTranslations: TranslationSection<"language">;
}

export const Header: FC<Props> = ({
  translations,
  isScrolled,
  languageTranslations,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const locale =
    locales.find((locale) => pathname.startsWith(`/${locale}`)) || "en";

  const isActive = (path: string) => {
    if (path === "") {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    const normalizedPathname = pathname.replace(/\/$/, "");
    const normalizedPath = path.replace(/\/$/, "");
    return normalizedPathname === normalizedPath;
  };

  return (
    <header
      className={clsx(
        "[--default-color:#ffffff] [--heading-color:#ffffff]",
        isScrolled
          ? "![--background-color:#474d52] shadow-[0px_0_18px_rgba(0,0,0,0.1)]"
          : "[--background-color:rgba(0,0,0,0)]",
        "py-4 transition-all duration-500 z-[997]",
        "items-center",
        "flex",
        "fixed top-0 left-0 right-0",
        "text-[var(--default-color)]",
        "bg-[var(--background-color)]",
      )}
    >
      <div
        className={clsx(
          "items-center",
          "justify-between",
          "relative",
          "flex",
          "container",
          "max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1140px] xl:max-w-[1320px]",
          "mx-auto",
          "w-full",
          "px-[calc(var(--bs-gutter-x)*.5)]",
        )}
      >
        <Link
          href={`/`}
          className={clsx(
            "leading-none items-center flex",
            "ml-4 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4",
          )}
        >
          <Image
            src="/img/logo.svg"
            alt={`${translations.title} Logo`}
            width={48}
            height={48}
            priority
          />
        </Link>

        <nav
          className={clsx(
            "p-0",
            isMenuOpen ? "block" : "hidden lg:block",
            "fixed lg:relative",
            "overflow-hidden lg:overflow-visible",
            "inset-0 lg:inset-auto",
            "left-0 lg:left-auto",
            "right-0 lg:right-auto",
            "bg-[rgba(33,37,41,0.8)] lg:bg-transparent",
            "transition-all lg:transition-none",
            "duration-300 lg:duration-0",
            "z-[9997] lg:z-[996]",
          )}
        >
          <ul
            className={clsx(
              "block lg:flex",
              "absolute lg:relative",
              "bg-[var(--nav-dropdown-color)] lg:bg-transparent",
              "shadow-none",
              "overflow-y-auto lg:overflow-y-visible",
              "z-[9998] lg:z-[996]",
              "list-none",
              "inset-[60px_20px_20px_20px] lg:inset-auto",
              "py-4 lg:py-0 px-4 lg:px-0",
              "!m-0",
              "rounded-lg lg:rounded-none",
              "border border-[color-mix(in_srgb,var(--default-color),transparent_90%)] lg:border-0",
              "transition-all duration-300 lg:transition-none",
            )}
          >
            <li
              className={clsx(
                "nowrap px-3.5 py-4",
                "relative",
                "w-full lg:w-auto",
              )}
            >
              <Link
                href={`/${locale}/`}
                className={clsx(
                  isActive("")
                    ? "text-[var(--nav-hover-color)] before:invisible lg:before:visible before:w-full"
                    : "!text-[var(--nav-color)] before:invisible before:w-0",
                  "[font-family:var(--nav-font)] font-normal",
                  "text-base",
                  "px-0.5",
                  "flex items-center justify-between",
                  "whitespace-nowrap",
                  "transition-all duration-300",
                  "relative",
                  "w-full lg:w-auto",
                  "uppercase",
                  "hover:before:visible",
                  "hover:before:w-full",
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
                onClick={() => setIsMenuOpen(false)}
              >
                {translations["menu-home"]}
              </Link>
            </li>
            <li
              className={clsx(
                "nowrap px-3.5 py-4",
                "relative",
                "w-full lg:w-auto",
              )}
            >
              <Link
                href={`/${locale}/about`}
                className={clsx(
                  isActive(`/${locale}/about`)
                    ? "text-[var(--nav-hover-color)] before:invisible lg:before:visible before:w-full"
                    : "!text-[var(--nav-color)] before:invisible before:w-0",
                  "[font-family:var(--nav-font)] font-normal",
                  "text-base lg:text-base",
                  "px-0.5",
                  "flex items-center justify-between",
                  "whitespace-nowrap",
                  "transition-all duration-300",
                  "relative",
                  "w-full lg:w-auto",
                  "uppercase",
                  "hover:before:visible",
                  "hover:before:w-full",
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
                onClick={() => setIsMenuOpen(false)}
              >
                {translations["menu-about"]}
              </Link>
            </li>
            <li
              className={clsx(
                "nowrap px-3.5 py-4",
                "relative",
                "w-full lg:w-auto",
              )}
            >
              <Link
                href={`/${locale}/services`}
                className={clsx(
                  isActive(`/${locale}/services`)
                    ? "text-[var(--nav-hover-color)] before:invisible lg:before:visible before:w-full"
                    : "!text-[var(--nav-color)] before:invisible before:w-0",
                  "[font-family:var(--nav-font)] font-normal",
                  "text-base lg:text-base",
                  "px-0.5",
                  "flex items-center justify-between",
                  "whitespace-nowrap",
                  "transition-all duration-300",
                  "relative",
                  "w-full lg:w-auto",
                  "uppercase",
                  "hover:before:visible",
                  "hover:before:w-full",
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
                onClick={() => setIsMenuOpen(false)}
              >
                {translations["menu-services"]}
              </Link>
            </li>
            <li
              className={clsx(
                "nowrap px-3.5 py-4",
                "relative",
                "w-full lg:w-auto",
              )}
            >
              <Link
                href={`/${locale}/contact`}
                className={clsx(
                  isActive(`/${locale}/contact`)
                    ? "text-[var(--nav-hover-color)] before:invisible lg:before:visible before:w-full"
                    : "!text-[var(--nav-color)] before:invisible before:w-0",
                  "[font-family:var(--nav-font)] font-normal",
                  "text-base lg:text-base",
                  "px-0.5",
                  "flex items-center justify-between",
                  "whitespace-nowrap",
                  "transition-all duration-300",
                  "relative",
                  "w-full lg:w-auto",
                  "uppercase",
                  "hover:before:visible",
                  "hover:before:w-full",
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
                onClick={() => setIsMenuOpen(false)}
              >
                {translations["menu-contact"]}
              </Link>
            </li>
            <li
              className={clsx(
                "nowrap px-3.5 py-4",
                "relative",
                "w-full lg:w-auto",
              )}
            >
              <Link
                href={`/${locale}/careers`}
                className={clsx(
                  isActive(`/${locale}/careers`)
                    ? "text-[var(--nav-hover-color)] before:invisible lg:before:visible before:w-full"
                    : "!text-[var(--nav-color)] before:invisible before:w-0",
                  "[font-family:var(--nav-font)] font-normal",
                  "text-base lg:text-base",
                  "px-0.5",
                  "flex items-center justify-between",
                  "whitespace-nowrap",
                  "transition-all duration-300",
                  "relative",
                  "w-full lg:w-auto",
                  "uppercase",
                  "hover:before:visible",
                  "hover:before:w-full",
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
                onClick={() => setIsMenuOpen(false)}
              >
                {translations["menu-careers"]}
              </Link>
            </li>
            <li
              className={clsx(
                "nowrap px-3.5 py-4",
                "relative",
                "w-full lg:w-auto",
              )}
            >
              <LanguageSwitcher languageTranslations={languageTranslations} />
            </li>
          </ul>
          <button
            className={clsx(
              "absolute top-6 right-3 block lg:hidden",
              "text-2xl leading-none cursor-pointer transition-colors duration-300",
              "z-[9999]",
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon icon={XMarkIcon} className={clsx("size-8")} />
          </button>
        </nav>

        <button
          className={clsx("block lg:hidden", "text-2xl mr-3")}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon
            icon={isMenuOpen ? XMarkIcon : Bars3Icon}
            className={clsx(
              "size-8",
              "transition-all duration-300 ease-in-out",
              "text-[var(--contrast-color)]",
              "group-hover:text-[var(--accent-color)]",
            )}
          />
        </button>
      </div>
    </header>
  );
};
