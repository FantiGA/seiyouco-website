"use client";

import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Services,
  Stats,
  Team,
} from "@/components";
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
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        {/* <CallToAction /> */}
        {/* <Portfolio /> */}
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
