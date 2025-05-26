"use client";

import type { TranslationSection } from "@/types";
import clsx from "clsx";
import type { FC } from "react";

interface CardProps {
  index: number;
  icon: string;
  title: string;
  value: string;
}

const Card: FC<CardProps> = ({ index, icon, title, value }) => {
  return (
    <div
      className="flex items-start gap-4"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <i
        className={clsx(
          `${icon}`,
          "text-[var(--contrast-color)]",
          "bg-[var(--accent-color)]",
          "text-xl",
          "w-11 h-11",
          "flex justify-center items-center",
          "rounded",
          "transition-all duration-300 ease-in-out",
          "mr-4",
          "flex-shrink-0",
          "before:inline-block",
          "before:font-normal",
          "before:not-italic",
          "before:not-font-bold",
          "before:not-uppercase",
          "before:leading-none",
          "before:align-[-0.125em]",
          "before:antialiased",
        )}
      />
      <div>
        <h3 className={clsx("p-0", "text-lg", "font-bold", "mb-1.5")}>
          {title}
        </h3>
        <p className={clsx("p-0", "mb-0", "text-sm")}>{value}</p>
      </div>
    </div>
  );
};
interface Props {
  translations: TranslationSection<"contact">;
}

export const Contact: FC<Props> = ({ translations }) => {
  return (
    <section
      id="contact"
      className={clsx(
        "text-[var(--default-color)] bg-[var(--background-color)]",
        "py-15",
        "scroll-mt-20",
        "overflow-clip",
      )}
    >
      <div
        className={clsx("text-center", "pb-15", "relative")}
        data-aos="fade-up"
      >
        <h2 className={clsx("text-4xl font-bold mb-4 uppercase")}>
          {translations.title}
        </h2>
        <p>{translations.description}</p>
      </div>
      <div
        className={clsx(
          "max-w-[1140px]",
          "[--bs-gutter-x:1.5rem] [--bs-gutter-y:0]",
          "w-full px-[calc(var(--bs-gutter-x)*.5)] mx-auto",
        )}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className={clsx("mb-6")} data-aos="fade-up" data-aos-delay="200">
          Maps
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          <Card
            index={0}
            icon=""
            title={translations["address-title"]}
            value={translations["address-value"]}
          />
          <Card
            index={1}
            icon=""
            title={translations["email-title"]}
            value={translations["email-value"]}
          />
          <Card
            index={2}
            icon=""
            title={translations["call-title"]}
            value={translations["call-value"]}
          />
        </div>
      </div>
    </section>
  );
};
