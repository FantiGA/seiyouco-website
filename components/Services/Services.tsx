"use client";

import type { TranslationSection } from "@/types";
import {
  GlobeAltIcon,
  MusicalNoteIcon,
  DevicePhoneMobileIcon,
  CursorArrowRaysIcon,
  CloudIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import type { FC } from "react";
import { Icon } from "@/components/common";

interface CardProps {
  title: string;
  description: string;
  icon: FC;
  index: number;
}

const Card: FC<CardProps> = ({ title, description, icon, index }) => {
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
      <div
        className={clsx(
          "bg-[var(--accent-color)]",
          "text-[var(--contrast-color)]",
          "m-0",
          "w-16 h-16",
          "rounded-full",
          "flex items-center justify-center",
          "mb-5",
          "text-3xl",
          "transition-all duration-300 ease-in-out",
          "absolute",
          "-top-8",
          "left-[calc(50%-32px)]",
          "border-6 border-[var(--background-color)]",
          "group-hover:bg-[var(--surface-color)]",
          "group-hover:border-2",
          "group-hover:border-[var(--accent-color)]",
        )}
      >
        <Icon
          icon={icon}
          className={clsx(
            "size-7",
            "transition-all duration-300 ease-in-out",
            "text-[var(--contrast-color)]",
            "group-hover:text-[var(--accent-color)]",
          )}
        />
      </div>
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
  translations: TranslationSection<"services">;
}

export const Services: FC<Props> = ({ translations }) => {
  return (
    <section
      id="services"
      className={clsx(
        "text-[var(--default-color)] bg-[var(--background-color)] py-16 scroll-mt-20 overflow-clip",
      )}
    >
      <div
        className={clsx(
          "opacity-100 transform-none",
          "transition-[opacity,transform]",
          "ease-in-out duration-600",
          "pointer-events-auto",
          "text-center pb-16 relative",
          "max-w-[1140px]",
          "[--bs-gutter-x:1.5rem] [--bs-gutter-y:0]",
          "w-full px-[calc(var(--bs-gutter-x)*.5)] mx-auto",
        )}
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-4 uppercase">
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
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title={translations["service-1-title"]}
            description={translations["service-1-description"]}
            icon={GlobeAltIcon}
            index={0}
          />
          <Card
            title={translations["service-2-title"]}
            description={translations["service-2-description"]}
            icon={DevicePhoneMobileIcon}
            index={1}
          />
          <Card
            title={translations["service-3-title"]}
            description={translations["service-3-description"]}
            icon={CursorArrowRaysIcon}
            index={2}
          />
          <Card
            title={translations["service-4-title"]}
            description={translations["service-4-description"]}
            icon={CloudIcon}
            index={3}
          />
          <Card
            title={translations["service-5-title"]}
            description={translations["service-5-description"]}
            icon={ChatBubbleBottomCenterTextIcon}
            index={4}
          />
          <Card
            title={translations["service-6-title"]}
            description={translations["service-6-description"]}
            icon={MusicalNoteIcon}
            index={5}
          />
        </div>
      </div>
    </section>
  );
};
