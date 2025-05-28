"use client";

import Image from "next/image";
import clsx from "clsx";
import type { TranslationSection } from "@/types";
import type { FC } from "react";

interface Props {
  translations: TranslationSection<"hero">;
}

export const Hero: FC<Props> = ({ translations }) => {
  return (
    <section
      id="hero"
      className={clsx(
        "w-full min-h-screen relative py-20 flex items-center justify-center",
        "[--background-color:#2f3942] [--default-color:#ffffff] [--heading-color:#ffffff] [--surface-color:#445360] [--contrast-color:#ffffff]",
        "text-[var(--default-color)] bg-[var(--background-color)] scroll-mt-20 overflow-clip",
        "before:content-[''] before:absolute before:inset-0 before:z-[2] before:bg-[color-mix(in_srgb,var(--background-color),transparent_50%)]",
      )}
    >
      <Image
        src="/img/hero-bg.jpg"
        alt="Hero Background"
        fill
        priority
        className={clsx(
          "opacity-100 transform-none",
          "transition-[opacity,transform]",
          "ease-in-out duration-600 pointer-events-auto",
          "object-cover absolute inset-0 block w-full h-full z-[1]",
        )}
        data-aos="fade-in"
      />

      <div
        className={clsx(
          "relative z-[3]",
          "opacity-100 transform-none",
          "transition-[opacity,transform]",
          "delay-100",
          "ease-in-out",
          "duration-600",
          "pointer-events-auto",
          "text-center",
        )}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div
          className={clsx(
            "justify-center",
            "[--bs-gutter-x:1.5rem] [--bs-gutter-y:0]",
            "flex",
            "flex-wrap",
            "-mt-[calc(var(--bs-gutter-y))]",
            "-mr-[calc(var(--bs-gutter-x)*.5)]",
            "-ml-[calc(var(--bs-gutter-x)*.5)]",
          )}
        >
          <div
            className={clsx(
              "flex-[0_0_auto]",
              "w-full",
              "px-[calc(var(--bs-gutter-x)*.5)]",
              "mt-[var(--bs-gutter-y)]",
            )}
          >
            <h2 className={clsx("m-0", "text-4xl lg:text-5xl", "font-bold")}>
              {translations.title}
            </h2>
            <p
              className={clsx(
                "mt-2.5",
                "text-base lg:text-2xl",
                "text-[var(--heading-color)]",
              )}
            >
              {translations.description}
            </p>
            {/* <a
              href="#about"
              className={clsx(
                "!text-[var(--default-color)]",
                "font-normal",
                "text-base",
                "tracking-wide",
                "inline-block",
                "px-10 py-2",
                "mt-8",
                "rounded",
                "transition-all",
                "duration-500",
                "border-2",
                "border-[color-mix(in_srgb,var(--default-color),transparent_50%)]",
              )}
            >
              {translations.button}
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};
