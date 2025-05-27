"use client";

import Image from "next/image";
import type { FC } from "react";
import clsx from "clsx";
import type { TranslationSection } from "@/types";
import {
  XIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
} from "@/components/common/Icon";

const iconMap: Record<string, FC> = {
  x: XIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
};

interface SocialProps {
  name: string;
  icon: string;
  url: string;
}

const Social: FC<SocialProps> = ({ name, icon, url }) => {
  const IconComponent = iconMap[icon];

  return (
    <a
      href={url}
      title={name}
      target="_blank"
      className={clsx(
        "bg-[color-mix(in_srgb,var(--default-color),transparent_94%)]",
        "transition-all duration-300 ease-in-out",
        "flex items-center justify-center",
        "rounded-full",
        "w-9 h-9",
        "hover:bg-[var(--accent-color)]",
        "group",
      )}
    >
      <i
        className={clsx(
          "w-4 h-4",
          "transition-all duration-300 ease-in-out",
          "[&>svg]:fill-[color-mix(in_srgb,var(--default-color),transparent_20%)]",
          "group-hover:[&>svg]:fill-[var(--contrast-color)]",
        )}
      >
        <IconComponent />
      </i>
    </a>
  );
};

interface CardProps {
  index: number;
  name: string;
  position: string;
  description: string;
  image: string;
  social_x?: string;
  social_facebook?: string;
  social_instagram?: string;
  social_linkedin?: string;
}

const Card: FC<CardProps> = ({
  index,
  name,
  position,
  description,
  image,
  social_x,
  social_facebook,
  social_instagram,
  social_linkedin,
}) => {
  return (
    <div
      className={clsx(
        "bg-[var(--surface-color)]",
        "shadow-[0px_2px_15px_rgba(0,0,0,0.1)]",
        "relative",
        "rounded-md",
        "!transition-all !duration-500 !ease-in-out",
        "p-8",
        "h-full",
        "flex items-start",
        "hover:-translate-y-2.5",
      )}
      data-aos="fade-up"
      data-aos-delay={(index + 1) * 100}
    >
      <div
        className={clsx(
          "overflow-hidden",
          "w-[150px]",
          "rounded-full",
          "flex-shrink-0",
        )}
      >
        <Image
          src={image}
          alt={name}
          fill
          className={clsx(
            "transition-all duration-300 ease-in-out",
            "max-w-full h-auto",
            "!size-[150px]",
            "!h-auto !left-auto !right-auto !top-auto !bottom-auto !static",
          )}
        />
      </div>
      <div className={clsx("pl-8")}>
        <h4 className={clsx("font-bold", "mb-1", "text-xl")}>{name}</h4>
        <span
          className={clsx(
            "block text-base pb-2.5 relative font-medium",
            "after:content-[''] after:absolute after:block after:w-14 after:h-px after:bg-[color-mix(in_srgb,var(--default-color),transparent_85%)] after:bottom-0 after:left-0",
          )}
        >
          {position}
        </span>
        <p className={clsx("mt-2.5", "text-sm")}>{description}</p>
        <div
          className={clsx(
            "mt-3",
            "flex gap-4 items-center justify-start",
            "w-full",
          )}
        >
          {social_x && <Social name="X" icon="x" url={social_x} />}
          {social_facebook && (
            <Social name="Facebook" icon="facebook" url={social_facebook} />
          )}
          {social_instagram && (
            <Social name="Instagram" icon="instagram" url={social_instagram} />
          )}
          {social_linkedin && (
            <Social name="LinkedIn" icon="linkedin" url={social_linkedin} />
          )}
        </div>
      </div>
    </div>
  );
};

interface Props {
  translations: TranslationSection<"team">;
}

export const Team: FC<Props> = ({ translations }) => {
  return (
    <section
      id="team"
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
      >
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {[...Array(3)].map((_, index) => (
            <Card
              key={index}
              index={index}
              name={
                translations[
                  `team-${index + 1}-name` as keyof TranslationSection<"team">
                ]
              }
              position={
                translations[
                  `team-${index + 1}-position` as keyof TranslationSection<"team">
                ]
              }
              description={
                translations[
                  `team-${index + 1}-description` as keyof TranslationSection<"team">
                ]
              }
              image={
                translations[
                  `team-${index + 1}-image` as keyof TranslationSection<"team">
                ]
              }
              social_x={
                translations[
                  `team-${index + 1}-social-x` as keyof TranslationSection<"team">
                ]
              }
              social_facebook={
                translations[
                  `team-${index + 1}-social-facebook` as keyof TranslationSection<"team">
                ]
              }
              social_instagram={
                translations[
                  `team-${index + 1}-social-instagram` as keyof TranslationSection<"team">
                ]
              }
              social_linkedin={
                translations[
                  `team-${index + 1}-social-linkedin` as keyof TranslationSection<"team">
                ]
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};
