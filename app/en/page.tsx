"use client";

import { About, Header, Hero, Stats } from "@/components";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function EnPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={clsx(
          "[--default-color:#ffffff] [--heading-color:#ffffff]",
          isScrolled
            ? "![--background-color:#474d52] shadow-[0px_0_18px_rgba(0,0,0,0.1)]"
            : "[--background-color:rgba(0,0,0,0)]",
          "py-[15px] transition-all duration-500 z-[997]",
          "items-center",
          "flex",
          "fixed top-0 left-0 right-0",
          "text-[var(--default-color)]",
          "bg-[var(--background-color)]",
        )}
      >
        <Header />
      </header>
      <main>
        <Hero />
        <About />
        <Stats />
        {/* <Services />
      <Portfolio />
      <Team />
      <Contact /> */}
        {/* Other sections will be added here */}
      </main>
    </>
  );
}
