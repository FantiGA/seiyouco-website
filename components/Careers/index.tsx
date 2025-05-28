"use client";

import type { TranslationSection } from "@/types";
import clsx from "clsx";
import type { FC } from "react";

interface CardProps {
  title: string;
  description: string;
  index: number;
}

const Card: FC<CardProps> = ({ title, description, index }) => {
  return (
    <div
      className={clsx(
        "bg-[var(--surface-color)]",
        "py-13 px-8",
        "mt-9",
        "transition-all duration-300 ease-in-out",
        "relative",
        "border border-[color-mix(in_srgb,var(--default-color),transparent_85%)]",
        "text-center",
        "hover:bg-[var(--background-color)]",
        "group",
      )}
      data-aos="fade-up"
      data-aos-delay={(index + 1) * 100}
    >
      <h3
        className={clsx(
          "text-2xl font-bold",
          "mt-2.5 mb-4",
          "transition-all duration-300 ease-in-out",
          "group-hover:!text-[var(--accent-color)]",
        )}
      >
        {title}
      </h3>
      <p className={clsx("text-sm", "leading-6", "mb-0", "text-left")}>
        {description}
      </p>
    </div>
  );
};

interface Props {
  translations: TranslationSection<"careers">;
}

export const Careers: FC<Props> = ({ translations }) => {
  return (
    <section
      id="careers"
      className={clsx(
        "container mx-auto",
        "max-w-11/12 sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1140px] xl:max-w-[1320px]",
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
          "max-w-full sm:max-w-3/4 md:max-w-11/12",
          "[--bs-gutter-x:1.5rem] [--bs-gutter-y:0]",
          "w-full px-[calc(var(--bs-gutter-x)*.5)] mx-auto",
        )}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title={translations["item-title-1"]}
            description={translations["item-description-1"]}
            index={0}
          />
          <Card
            title={translations["item-title-2"]}
            description={translations["item-description-2"]}
            index={1}
          />
        </div>
      </div>
    </section>
  );
};
