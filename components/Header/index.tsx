"use client";

import { useState, type FC } from "react";
import Link from "next/link";
import clsx from "clsx";
import type { TranslationSection } from "@/types";
import { LanguageSwitcher } from "./LanguageSwitcher";

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

  return (
    <header
      className={clsx(
        "[--default-color:#ffffff] [--heading-color:#ffffff]",
        isScrolled
          ? "![--background-color:#474d52] shadow-[0px_0_18px_rgba(0,0,0,0.1)]"
          : "[--background-color:rgba(0,0,0,0)]",
        "py-[15px] transition-all duration-500 z-[997]",
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
          "[--bs-gutter-x:1.5rem] [--bs-gutter-y:0]",
          "w-full",
          "max-w-[1140px]",
          "px-[calc(var(--bs-gutter-x)*.5)]",
          "mx-auto",
        )}
      >
        <Link href="/" className={clsx("leading-none", "items-center", "flex")}>
          <h1
            className={clsx(
              "text-3xl",
              "font-normal",
              "uppercase",
              "text-[var(--heading-color)]",
            )}
          >
            {translations.title}
          </h1>
        </Link>

        <nav className="p-0 hidden lg:block">
          <ul
            className={clsx(
              "m-0",
              "p-0",
              "flex",
              "list-none",
              "items-center",
              "space-x-8",
            )}
          >
            <li className={clsx("nowrap px-3.5 py-4", "relative")}>
              <Link
                href="#hero"
                className={clsx(
                  "text-[var(--nav-hover-color)]",
                  "hover:text-[var(--nav-hover-color)]",
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
                  "before:content-['']",
                  "before:absolute",
                  "before:w-full",
                  "before:h-0.5",
                  "before:-bottom-1.5",
                  "before:left-0",
                  "before:bg-[var(--accent-color)]",
                  "before:transition-all",
                  "before:duration-300",
                  "before:ease-in-out",
                  "before:visible",
                  "hover:before:visible",
                )}
              >
                {translations["menu-home"]}
              </Link>
            </li>
            <li className={clsx("nowrap px-3.5 py-4", "relative")}>
              <Link
                href="#about"
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
                  "before:content-['']",
                  "before:absolute",
                  "before:h-0.5",
                  "before:-bottom-1.5",
                  "before:left-0",
                  "before:bg-[var(--accent-color)]",
                  "before:transition-all",
                  "before:duration-300",
                  "before:ease-in-out",
                  "before:invisible",
                  "before:w-0",
                  "hover:before:visible",
                  "hover:before:w-full",
                )}
              >
                {translations["menu-about"]}
              </Link>
            </li>
            <li className={clsx("nowrap px-3.5 py-4", "relative")}>
              <Link
                href="#services"
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
                  "before:content-['']",
                  "before:absolute",
                  "before:h-0.5",
                  "before:-bottom-1.5",
                  "before:left-0",
                  "before:bg-[var(--accent-color)]",
                  "before:transition-all",
                  "before:duration-300",
                  "before:ease-in-out",
                  "before:invisible",
                  "before:w-0",
                  "hover:before:visible",
                  "hover:before:w-full",
                )}
              >
                {translations["menu-services"]}
              </Link>
            </li>
            <li className={clsx("nowrap px-3.5 py-4", "relative")}>
              <Link
                href="#team"
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
                  "before:content-['']",
                  "before:absolute",
                  "before:h-0.5",
                  "before:-bottom-1.5",
                  "before:left-0",
                  "before:bg-[var(--accent-color)]",
                  "before:transition-all",
                  "before:duration-300",
                  "before:ease-in-out",
                  "before:invisible",
                  "before:w-0",
                  "hover:before:visible",
                  "hover:before:w-full",
                )}
              >
                {translations["menu-team"]}
              </Link>
            </li>
            <li className={clsx("nowrap px-3.5 py-4", "relative")}>
              <Link
                href="#contact"
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
                  "before:content-['']",
                  "before:absolute",
                  "before:h-0.5",
                  "before:-bottom-1.5",
                  "before:left-0",
                  "before:bg-[var(--accent-color)]",
                  "before:transition-all",
                  "before:duration-300",
                  "before:ease-in-out",
                  "before:invisible",
                  "before:w-0",
                  "hover:before:visible",
                  "hover:before:w-full",
                )}
              >
                {translations["menu-contact"]}
              </Link>
            </li>
            <li className={clsx("nowrap px-3.5 py-4", "relative")}>
              <LanguageSwitcher languageTranslations={languageTranslations} />
            </li>
          </ul>
        </nav>

        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`bi bi-${isMenuOpen ? "x" : "list"}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href="#hero"
                  className={clsx(
                    "text-[var(--nav-color)]",
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
                  onClick={() => setIsMenuOpen(false)}
                >
                  {translations["menu-home"]}
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className={clsx(
                    "text-[var(--nav-color)]",
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
                  onClick={() => setIsMenuOpen(false)}
                >
                  {translations["menu-about"]}
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className={clsx(
                    "text-[var(--nav-color)]",
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
                  onClick={() => setIsMenuOpen(false)}
                >
                  {translations["menu-services"]}
                </Link>
              </li>
              <li>
                <Link
                  href="#team"
                  className={clsx(
                    "text-[var(--nav-color)]",
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
                  onClick={() => setIsMenuOpen(false)}
                >
                  {translations["menu-team"]}
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className={clsx(
                    "text-[var(--nav-color)]",
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
                  onClick={() => setIsMenuOpen(false)}
                >
                  {translations["menu-contact"]}
                </Link>
              </li>
              <li>
                <LanguageSwitcher languageTranslations={languageTranslations} />
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};
