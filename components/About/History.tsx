"use client";

import type { FC } from "react";
import clsx from "clsx";
import type { TranslationSection } from "@/types";

interface Props {
  translations: TranslationSection<"history">;
}

export const History: FC<Props> = ({ translations }) => {
  return (
    <section
      id="history"
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
          "max-w-2/3",
          "[--bs-gutter-x:1.5rem] [--bs-gutter-y:0]",
          "w-full px-[calc(var(--bs-gutter-x)*.5)] mx-auto",
        )}
      >
        <div className="grid grid-cols-1 gap-10">
          {[...Array(4)].map((_, index) => (
            <div key={index} data-aos="fade-up">
              <h3
                className={clsx(
                  "text-2xl font-bold mb-4 !text-[var(--accent-color)]",
                )}
              >
                {
                  translations[
                    `item-title-${index + 1}` as keyof TranslationSection<"history">
                  ]
                }
              </h3>
              <p className={clsx("text-lg text-[var(--default-color)]")}>
                {
                  translations[
                    `item-description-${index + 1}` as keyof TranslationSection<"history">
                  ]
                }
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
