"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { locales } from "@/utils/i18n";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const browserLanguage = navigator.language.toLowerCase();

    if (locales.includes(browserLanguage as (typeof locales)[number])) {
      router.push(`/${browserLanguage}`);
      return;
    }

    const languagePrefix = browserLanguage.split("-")[0];
    const matchingLocale = locales.find((locale) =>
      locale.startsWith(languagePrefix),
    );

    if (matchingLocale) {
      router.push(`/${matchingLocale}`);
    } else {
      router.push("/en");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Loading...</h1>
        <p className="text-gray-600">
          Redirecting to your preferred language...
        </p>
      </div>
    </div>
  );
}
