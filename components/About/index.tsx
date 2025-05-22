"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState, useEffect } from "react";

export const About = () => {
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
        "text-[var(--default-color)] bg-[var(--background-color)] py-[60px] scroll-mt-20 overflow-clip",
      )}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="200"
    >
      <div
        className={clsx(
          "max-w-[960px]",
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
              alt="About Us"
              fill
              className={clsx(
                "aos-init aos-animate",
                "object-cover rounded-lg",
                "!flex-shrink-0",
                "max-w-full",
                "!h-auto !left-auto !right-auto !top-auto !bottom-auto !static",
              )}
            />
            {/* <a
              href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center text-white text-2xl hover:bg-primary transition-colors"
            >
              <i className="bi bi-play-fill"></i>
            </a> */}
          </div>

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
              "w-1/2",
              "max-w-full",
              "px-[calc(var(--bs-gutter-x)*.5)]",
              "mt-[var(--bs-gutter-y)]",
            )}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className={clsx("text-3xl font-bold")}>About Us</h3>
            <p>
              Dolor iure expedita id fuga asperiores qui sunt consequatur
              minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui
              magnam itaque veritatis dolores. Corrupti totam ut eius incidunt
              reiciendis veritatis asperiores placeat.
            </p>
            <ul className={clsx("list-none", "p-0")}>
              <li className={clsx("flex", "items-start", "mt-10")}>
                <i
                  className={clsx(
                    "flex-shrink-0 text-5xl text-[var(--accent-color)] mr-5 leading-none",
                  )}
                ></i>
                <div>
                  <h5 className={clsx("text-lg", "font-bold")}>
                    Ullamco laboris nisi ut aliquip consequat
                  </h5>
                  <p className={clsx("text-base")}>
                    Magni facilis facilis repellendus cum excepturi quaerat
                    praesentium libre trade
                  </p>
                </div>
              </li>
              <li className={clsx("flex", "items-start", "mt-10")}>
                <i
                  className={clsx(
                    "flex-shrink-0 text-5xl text-[var(--accent-color)] mr-5 leading-none",
                  )}
                ></i>
                <div>
                  <h5 className={clsx("text-lg", "font-bold")}>
                    Magnam soluta odio exercitationem reprehenderi
                  </h5>
                  <p className={clsx("text-base")}>
                    Quo totam dolorum at pariatur aut distinctio dolorum
                    laudantium illo direna pasata redi
                  </p>
                </div>
              </li>
              <li className={clsx("flex", "items-start", "mt-10")}>
                <i
                  className={clsx(
                    "flex-shrink-0 text-5xl text-[var(--accent-color)] mr-5 leading-none",
                  )}
                ></i>
                <div>
                  <h5 className={clsx("text-lg", "font-bold")}>
                    Voluptatem et qui exercitationem
                  </h5>
                  <p className={clsx("text-base", "mb-0")}>
                    Et velit et eos maiores est tempora et quos dolorem autem
                    tempora incidunt maxime veniam
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
