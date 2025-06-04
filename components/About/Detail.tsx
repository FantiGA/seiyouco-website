"use client";

import type { TranslationSection } from "@/types";
import clsx from "clsx";
import { useState, useEffect, type FC } from "react";

interface Props {
  translations: TranslationSection<"detail">;
}

export const Detail: FC<Props> = ({ translations }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section
      id="about"
      className={clsx(
        "container mx-auto",
        "max-w-11/12 sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1140px] xl:max-w-[1320px]",
        "text-[var(--default-color)] bg-[var(--background-color)] py-[60px] scroll-mt-20 overflow-clip",
      )}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="200"
    >
      <div
        className={clsx("text-center", "pb-15", "relative")}
        data-aos="fade-up"
      >
        <h2 className={clsx("text-4xl font-bold mb-4 uppercase")}>
          {translations.title}
        </h2>
      </div>

      <div
        className={clsx(
          "max-w-full sm:max-w-3/4 md:max-w-2/3 xl:max-w-1/2",
          "[--bs-gutter-x:1.5rem] [--bs-gutter-y:0]",
          "w-full",
          "px-[calc(var(--bs-gutter-x)*.5)]",
          "mx-auto",
        )}
      >
        <div
          className={clsx(
            "[--bs-gutter-x:1.5rem] [--bs-gutter-y:1.5rem]",
            "flex",
            "flex-wrap",
            "-mt-[calc(var(--bs-gutter-y))]",
            "-mr-[calc(var(--bs-gutter-x)*.5)]",
            "-ml-[calc(var(--bs-gutter-x)*.5)]",
          )}
        >
          <div
            className={clsx(
              "opacity-100",
              "transform-none",
              "transition-[opacity,transform]",
              "delay-100",
              "ease-in-out",
              "duration-600",
              "pointer-events-auto",
              "flex-[0_0_auto]",
              "w-full",
              "px-[calc(var(--bs-gutter-x)*.5)]",
              "mt-[var(--bs-gutter-y)]",
            )}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <ul className={clsx("list-none", "p-0")} data-aos="fade-up">
              {[...Array(12)].map((_, index) => (
                <li
                  key={index}
                  className={clsx(
                    "flex",
                    "items-start",
                    "flex-col md:flex-row",
                    "mt-1",
                    "bg-[color-mix(in_srgb,var(--accent-color),transparent_95%)]",
                    "rounded-md",
                  )}
                >
                  <div className={clsx("h-full w-96", "px-10 py-4")}>
                    <h5
                      className={clsx(
                        "text-base",
                        "font-bold",
                        "whitespace-nowrap",
                      )}
                    >
                      {
                        translations[
                          `item-title-${index + 1}` as keyof TranslationSection<"detail">
                        ]
                      }
                    </h5>
                  </div>
                  <div
                    className={clsx(
                      "h-full w-full",
                      "px-10 py-4",
                      "bg-[color-mix(in_srgb,var(--background-color),transparent_30%)]",
                    )}
                  >
                    <p
                      className={clsx("text-base", "break-words")}
                      dangerouslySetInnerHTML={{
                        __html:
                          translations[
                            `item-description-${index + 1}` as keyof TranslationSection<"detail">
                          ],
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
