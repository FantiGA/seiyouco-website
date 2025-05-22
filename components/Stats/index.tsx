"use client";

import { useEffect, type FC, type ReactNode } from "react";
import clsx from "clsx";
import type { PureCounterOptions } from "@srexi/purecounterjs";

interface LabelProps {
  children: ReactNode;
}

const Counter: FC<PureCounterOptions> = ({ start, end, delay, currency }) => {
  return (
    <div className="text-center" data-aos-delay={delay}>
      <div className="text-primary mb-2">
        <span
          className={clsx(
            "purecounter",
            "text-5xl block text-[var(--accent-color)] font-bold",
          )}
          data-purecounter-start={start}
          data-purecounter-end={end}
          data-purecounter-currency={currency}
        >
          {start}
        </span>
      </div>
    </div>
  );
};

const Label: FC<LabelProps> = ({ children }) => {
  return (
    <p
      className={clsx(
        "text-[color-mix(in_srgb,var(--default-color),transparent_40%)]",
        "p-0 m-0",
        "font-[var(--heading-font)]",
        "text-base font-semibold",
        "text-center",
      )}
    >
      {children}
    </p>
  );
};

export const Stats = () => {
  useEffect(() => {
    const initCounter = async () => {
      const { default: PureCounter } = await import("@srexi/purecounterjs");
      new PureCounter();
    };
    initCounter();
  }, []);

  return (
    <section
      className={clsx(
        "![--background-color:#f9f9f9] ![--surface-color:#ffffff]",
        "text-[var(--default-color)] bg-[var(--background-color)] py-16 scroll-mt-20 overflow-clip",
      )}
    >
      <div
        className={clsx(
          "opacity-100 transform-none",
          "delay-100",
          "transition-[opacity,transform]",
          "ease-in-out",
          "duration-600",
          "pointer-events-auto",
          "max-w-[1140px]",
          "[--bs-gutter-x:1.5rem] [--bs-gutter-y:0]",
          "w-full px-[calc(var(--bs-gutter-x)*.5)] mx-auto",
        )}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Counter end={232} delay={100} />
            <Label>Clients</Label>
          </div>

          <div>
            <Counter end={521} delay={200} />
            <Label>Projects</Label>
          </div>

          <div>
            <Counter end={1463} delay={300} />
            <Label>Hours Of Support</Label>
          </div>

          <div>
            <Counter end={15} delay={400} />
            <Label>Workers</Label>
          </div>
        </div>
      </div>
    </section>
  );
};
