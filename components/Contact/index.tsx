"use client";

import clsx from "clsx";

type ContactInfo = {
  icon: string;
  title: string;
  value: string;
};

const contactInfo: ContactInfo[] = [
  {
    icon: "",
    title: "Address",
    value: "A108 Adam Street, New York, NY 535022",
  },
  {
    icon: "",
    title: "Email Us",
    value: "info@example.com",
  },
  {
    icon: "",
    title: "Call Us",
    value: "+1 5589 55488 55",
  },
];

export const Contact = () => {
  return (
    <section
      id="contact"
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
        <h2 className={clsx("text-4xl font-bold mb-4 uppercase")}>Contact</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div
        className={clsx(
          "max-w-[1140px]",
          "[--bs-gutter-x:1.5rem] [--bs-gutter-y:0]",
          "w-full px-[calc(var(--bs-gutter-x)*.5)] mx-auto",
        )}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className={clsx("mb-6")} data-aos="fade-up" data-aos-delay="200">
          Maps
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={info.title}
              className="flex items-start gap-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <i
                className={clsx(
                  `${info.icon}`,
                  "text-[var(--contrast-color)]",
                  "bg-[var(--accent-color)]",
                  "text-xl",
                  "w-11 h-11",
                  "flex justify-center items-center",
                  "rounded",
                  "transition-all duration-300 ease-in-out",
                  "mr-4",
                  "flex-shrink-0",
                  "before:inline-block",
                  "before:font-normal",
                  "before:not-italic",
                  "before:not-font-bold",
                  "before:not-uppercase",
                  "before:leading-none",
                  "before:align-[-0.125em]",
                  "before:antialiased",
                )}
              />
              <div>
                <h3 className={clsx("p-0", "text-lg", "font-bold", "mb-1.5")}>
                  {info.title}
                </h3>
                <p className={clsx("p-0", "mb-0", "text-sm")}>{info.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
