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
import Link from "next/link";
import type { FC } from "react";

const iconMap: Record<string, FC<{ className?: string }>> = {
  "globe-alt": GlobeAltIcon,
  "device-phone-mobile": DevicePhoneMobileIcon,
  "cursor-arrow-rays": CursorArrowRaysIcon,
  cloud: CloudIcon,
  "chat-bubble-bottom-center-text": ChatBubbleBottomCenterTextIcon,
  "musical-note": MusicalNoteIcon,
};

interface CardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const Card: FC<CardProps> = ({ title, description, icon, index }) => {
  const IconComponent = iconMap[icon] || GlobeAltIcon;

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
        <i
          className={clsx(
            "inline-block",
            "font-normal",
            "not-italic",
            "font-normal",
            "normal-case",
            "leading-none",
            "align-[-0.125em]",
            "antialiased",
            "subpixel-antialiased",
            "group-hover:text-[var(--accent-color)]",
          )}
        >
          <IconComponent className="size-7" />
        </i>
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
      <p className={clsx("text-sm", "leading-6", "mb-0")}>{description}</p>
      <Link
        href="#"
        className={clsx(
          "absolute",
          "inset-0",
          "z-[1]",
          "after:content-['']",
          "after:absolute",
          "after:inset-0",
          "after:z-[1]",
        )}
      />
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
          {[...Array(6)].map((_, index) => (
            <Card
              key={index}
              title={
                translations[
                  `service-${index + 1}-title` as keyof TranslationSection<"services">
                ]
              }
              description={
                translations[
                  `service-${index + 1}-description` as keyof TranslationSection<"services">
                ]
              }
              icon={
                translations[
                  `service-${index + 1}-icon` as keyof TranslationSection<"services">
                ]
              }
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
