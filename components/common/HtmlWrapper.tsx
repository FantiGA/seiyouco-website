"use client";

import { ReactNode, useEffect, useState } from "react";
// import Script from "next/script";
import { loadMessages, locales } from "@/utils/i18n";

export function HtmlWrapper({ children }: { children: ReactNode }) {
  const browserLanguage = navigator.language.toLowerCase();
  const languagePrefix = browserLanguage.split("-")[0];
  const locale = locales.find((locale) => locale.startsWith(languagePrefix));
  const [t, setT] = useState<Awaited<ReturnType<typeof loadMessages>> | null>(
    null,
  );

  useEffect(() => {
    loadMessages(locale || "en").then(setT);
  }, [locale]);

  if (!t) {
    return <>Loading...</>;
  }

  return (
    <>
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-L21FKDK6YT"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-L21FKDK6YT');
        `}
      </Script> */}
      {children}
    </>
  );
}
