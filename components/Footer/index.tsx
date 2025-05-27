import type { TranslationSection } from "@/types";
import clsx from "clsx";
import type { FC } from "react";
import {
  Icon,
  XIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
} from "@/components/common/Icon";

interface SocialProps {
  name: string;
  icon: FC;
  url: string;
}

const Social: FC<SocialProps> = ({ name, icon, url }) => {
  return (
    <a
      href={url}
      title={name}
      target="_blank"
      className={clsx(
        "text-base",
        "flex items-center justify-center",
        "bg-[var(--accent-color)]",
        "text-[var(--contrast-color)]",
        "leading-none",
        "mx-1",
        "rounded-full",
        "text-center",
        "w-9 h-9",
        "transition-all duration-300",
        "group",
        "hover:bg-[color-mix(in_srgb,var(--accent-color),transparent_20%)]",
        "no-underline",
      )}
    >
      <Icon
        icon={icon}
        wrapperClassName={clsx(
          "w-4 h-4",
          "transition-all duration-300 ease-in-out",
          "[&>svg]:fill-[var(--contrast-color)]",
          "group-hover:[&>svg]:fill-[var(--contrast-color)]",
          "inline-block",
          "not-italic",
          "font-normal",
          "not-sr-only",
          "leading-none",
          "align-[-0.125em]",
          "antialiased",
        )}
      />
    </a>
  );
};

interface Props {
  translations: TranslationSection<"footer">;
}

export const Footer: FC<Props> = ({ translations }) => {
  return (
    <footer
      className={clsx(
        "[--background-color:#2f3942]",
        "[--default-color:#ffffff]",
        "[--heading-color:#ffffff]",
        "[--surface-color:#445360]",
        "[--contrast-color:#ffffff]",
        "text-[var(--default-color)]",
        "bg-[var(--background-color)]",
        "text-sm",
        "text-center",
        "py-8",
        "relative",
      )}
    >
      <div
        className={clsx(
          "max-w-[1140px]",
          "[--bs-gutter-x:1.5rem]",
          "[--bs-gutter-y:0]",
          "w-full",
          "px-[calc(var(--bs-gutter-x)*.5)]",
          "mx-auto",
        )}
      >
        <h3
          className={clsx("text-4xl", "font-bold", "relative", "p-0", "mb-4")}
        >
          {translations.title}
        </h3>
        <p className={clsx("text-base", "italic", "p-0", "mb-8")}>
          {translations.description}
        </p>
        <div className={clsx("mb-8", "flex", "justify-center")}>
          {translations["social-x"] && (
            <Social name="X" icon={XIcon} url={translations["social-x"]} />
          )}
          {translations["social-facebook"] && (
            <Social
              name="Facebook"
              icon={FacebookIcon}
              url={translations["social-facebook"]}
            />
          )}
          {translations["social-instagram"] && (
            <Social
              name="Instagram"
              icon={InstagramIcon}
              url={translations["social-instagram"]}
            />
          )}
          {translations["social-linkedin"] && (
            <Social
              name="LinkedIn"
              icon={LinkedInIcon}
              url={translations["social-linkedin"]}
            />
          )}
        </div>
        <div
          className={clsx(
            "max-w-[1140px]",
            "[--bs-gutter-x:1.5rem]",
            "[--bs-gutter-y:0]",
            "w-full",
            "px-[calc(var(--bs-gutter-x)*.5)]",
            "mx-auto",
          )}
        >
          <div
            className={clsx(
              "pt-6",
              "border-t",
              "border-[color-mix(in_srgb,var(--default-color),transparent_90%)]",
            )}
          >
            {translations["copyright.line1"]}
            {`${new Date().getFullYear()} ${translations["copyright.line2"]}`}
          </div>
        </div>
      </div>
    </footer>
  );
};
