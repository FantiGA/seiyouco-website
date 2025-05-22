"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      delay: 0,
      duration: 600,
      easing: "ease-in-out",
      once: false,
      mirror: false,
      startEvent: "DOMContentLoaded",
    });
  }, []);

  return null;
};
