"use client";

import type { TranslationSection } from "@/types";
import {
  FaceSmileIcon,
  LightBulbIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useState, useEffect, type FC } from "react";
import { Icon } from "@/components/common";

interface Props {
  translations: TranslationSection<"about">;
}

export const About: FC<Props> = ({ translations }) => {
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
        <p>{translations.description}</p>
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
          {/* <div
            className={clsx(
              "opacity-100",
              "transform-none",
              "transition-[opacity,transform]",
              "delay-200",
              "ease-in-out",
              "duration-600",
              "pointer-events-auto",
              "!order-6",
              "!items-center",
              "!relative",
              "!flex",
              "flex-[0_0_auto]",
              "w-1/2",
              "max-w-full",
              "px-[calc(var(--bs-gutter-x)*.5)]",
              "mt-[var(--bs-gutter-y)]",
            )}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Image
              src="/img/about.jpg"
              alt={translations.title}
              fill
              className={clsx(
                "aos-init aos-animate",
                "object-cover rounded-lg",
                "!flex-shrink-0",
                "max-w-full",
                "!h-auto !left-auto !right-auto !top-auto !bottom-auto !static",
              )}
            />
          </div> */}
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
              // "w-1/2",
              "w-full",
              // "max-w-full",
              "px-[calc(var(--bs-gutter-x)*.5)]",
              "mt-[var(--bs-gutter-y)]",
            )}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <ul className={clsx("list-none", "p-0")}>
              <li
                className={clsx("flex", "items-start", "mt-10")}
                data-aos="fade-up"
              >
                <div
                  className={clsx(
                    "flex-shrink-0 text-5xl text-[var(--accent-color)] mr-5 leading-none",
                  )}
                >
                  <Icon
                    icon={UserGroupIcon}
                    className={clsx(
                      "size-12",
                      "transition-all duration-300 ease-in-out",
                      "text-[var(--accent-color)]",
                    )}
                  />
                </div>
                <div>
                  <h5 className={clsx("text-lg", "font-bold")}>
                    {translations["item-title-1"]}
                  </h5>
                  <p className={clsx("text-base")}>
                    {translations["item-description-1"]}
                  </p>
                </div>
              </li>
              <li
                className={clsx("flex", "items-start", "mt-10")}
                data-aos="fade-up"
              >
                <div
                  className={clsx(
                    "flex-shrink-0 text-5xl text-[var(--accent-color)] mr-5 leading-none",
                  )}
                >
                  <Icon
                    icon={LightBulbIcon}
                    className={clsx(
                      "size-12",
                      "transition-all duration-300 ease-in-out",
                      "text-[var(--accent-color)]",
                    )}
                  />
                </div>
                <div>
                  <h5 className={clsx("text-lg", "font-bold")}>
                    {translations["item-title-2"]}
                  </h5>
                  <p className={clsx("text-base")}>
                    {translations["item-description-2"]}
                  </p>
                </div>
              </li>
              <li
                className={clsx("flex", "items-start", "mt-10")}
                data-aos="fade-up"
              >
                <div
                  className={clsx(
                    "flex-shrink-0 text-5xl text-[var(--accent-color)] mr-5 leading-none",
                  )}
                >
                  <Icon
                    icon={FaceSmileIcon}
                    className={clsx(
                      "size-12",
                      "transition-all duration-300 ease-in-out",
                      "text-[var(--accent-color)]",
                    )}
                  />
                </div>
                <div>
                  <h5 className={clsx("text-lg", "font-bold")}>
                    {translations["item-title-3"]}
                  </h5>
                  <p className={clsx("text-base", "mb-0")}>
                    {translations["item-description-3"]}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
