import type { TranslationSection } from "@/types";
import clsx from "clsx";
import type { FC } from "react";

type Social = {
  name: string;
  icon: string;
  url: string;
};

const Social: FC<Social> = ({ name, icon, url }) => {
  return (
    <a
      href={url}
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
      )}
      title={name}
    >
      <i
        className={clsx(
          "before:inline-block",
          "before:font-normal",
          "before:not-italic",
          "before:not-font-bold",
          "before:not-uppercase",
          "before:leading-none",
          "before:align-[-0.125em]",
          "before:antialiased",
          "before:subpixel-antialiased",
        )}
      >
        {icon}
      </i>
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
          <Social
            name="X"
            icon={translations["social-x"]}
            url={translations["social-x"]}
          />
          <Social
            name="Facebook"
            icon={translations["social-facebook"]}
            url={translations["social-facebook"]}
          />
          <Social
            name="Instagram"
            icon={translations["social-instagram"]}
            url={translations["social-instagram"]}
          />
          <Social
            name="LinkedIn"
            icon={translations["social-linkedin"]}
            url={translations["social-linkedin"]}
          />
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
