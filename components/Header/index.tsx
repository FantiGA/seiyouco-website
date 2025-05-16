import { useState, type FC } from "react";
import type { TranslationKeys, TranslationSection } from "@/types";
import clsx from "clsx";

type Translations = {
  [K in keyof TranslationKeys]: TranslationSection<K>;
};

interface Props {
  translations: Translations;
}

export const Header: FC<Props> = () => {
  const [isActive] = useState(false);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0",
        "flex items-center",
        "text-[color:var(--default-color)] bg-[color:var(--background-color)]",
        "py-[15px]",
        "transition-all duration-500",
        "z-[997]",
      )}
    >
      <div
        className={clsx(
          "relative flex items-center",
          "max-w-[1140px] xl:max-w-[1320px]",
          "w-full px-3 mx-auto",
        )}
      >
        <a
          href="index.html"
          className={clsx("flex items-center", "mr-auto leading-0.5")}
        >
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="assets/img/logo.png" alt="" /> */}
          <h1 className="text-3xl m-0 font-medium text-[var(--heading-color)] tracking-[2px] uppercase">
            Regna
          </h1>
        </a>

        <nav id="navmenu" className="p-0">
          <ul>
            <li>
              <a href="#hero" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Dropdown</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Dropdown 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Dropdown</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Dropdown 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Dropdown 2</a>
                </li>
                <li>
                  <a href="#">Dropdown 3</a>
                </li>
                <li>
                  <a href="#">Dropdown 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </header>
  );
};
