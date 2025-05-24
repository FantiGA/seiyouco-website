"use client";

import Image from "next/image";
import clsx from "clsx";

export const CallToAction = () => {
  return (
    <section
      id="call-to-action"
      className={clsx(
        "[--background-color:#2f3942] [--default-color:#ffffff] [--heading-color:#ffffff] [--surface-color:#445360] [--contrast-color:#ffffff]",
        "py-30 relative box-decoration-clone",
        "text-[var(--default-color)] bg-[var(--background-color)]",
        "overflow-clip scroll-mt-20 h-[500px]",
        "before:content-[''] before:absolute before:inset-0 before:z-[2] before:bg-[color-mix(in_srgb,var(--background-color),transparent_50%)]",
      )}
    >
      <Image
        src="/img/cta-bg.jpg"
        alt=""
        width={1920}
        height={1080}
        className={clsx(
          "fixed top-0 left-0 block w-full h-full object-cover z-[1]",
        )}
      />

      <div
        className={clsx(
          "relative z-[3] max-w-[1140px] w-full mx-auto",
          "px-[calc(var(--bs-gutter-x)*.5)]",
          "[--bs-gutter-x:1.5rem] [--bs-gutter-y:0]",
          "bg-[var(--background-color)]",
        )}
      >
        <div
          className={clsx(
            "flex flex-wrap",
            "mt-[calc(-1*var(--bs-gutter-y))]",
            "mx-[calc(-.5*var(--bs-gutter-x))]",
          )}
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className={clsx("flex-[0_0_auto] w-3/4", "text-left")}>
            <h3
              className={clsx(
                "text-[var(--default-color)]",
                "text-3xl",
                "font-bold",
              )}
            >
              Call To Action
            </h3>
            <p className="text-[var(--default-color)]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className={clsx("flex-[0_0_auto] w-1/4", "text-center")}>
            <a
              className={clsx(
                "font-medium text-base tracking-tight",
                "inline-block py-3 px-10 rounded-full",
                "transition-all duration-500",
                "m-2.5",
                "border-2 border-[var(--contrast-color)]",
                "!text-[var(--contrast-color)]",
                "align-middle",
              )}
              href="#"
            >
              Call To Action
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
