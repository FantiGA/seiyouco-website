import clsx from "clsx";
import type { FC } from "react";

type Social = {
  name: string;
  icon: string;
  url: string;
};

const socialList: Social[] = [
  {
    name: "X",
    icon: "",
    url: "",
  },
  {
    name: "Facebook",
    icon: "",
    url: "",
  },
  {
    name: "Instagram",
    icon: "",
    url: "",
  },
  {
    name: "Skype",
    icon: "",
    url: "",
  },
  {
    name: "LinkedIn",
    icon: "",
    url: "",
  },
];

const Social: FC<Social> = ({ icon, url }) => {
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

export const Footer: FC = () => {
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
          Seiyouco
        </h3>
        <p className={clsx("text-base", "italic", "p-0", "mb-8")}>
          Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
          eligendi fuga maxime saepe commodi placeat.
        </p>
        <div className={clsx("mb-8", "flex", "justify-center")}>
          {socialList.map((social, index) => (
            <Social key={index} {...social} />
          ))}
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
            <span>Copyright</span>{" "}
            <strong className={clsx("px-1")}>Regna</strong>{" "}
            <span>All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
