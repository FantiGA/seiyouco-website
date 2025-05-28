"use client";

import { ReactNode } from "react";
import { locales } from "@/utils/i18n";
import { usePathname } from "next/navigation";
import { Roboto, Poppins } from "next/font/google";
import { AOSInitializer, HtmlWrapper } from "@/components";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const locale =
    locales.find((locale) => pathname.startsWith(`/${locale}`)) || "en";

  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href={`https://seiyouco.com${pathname}`} />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://seiyouco.com/en"
        />
        {locales.map((locale) => (
          <link
            key={locale}
            rel="alternate"
            hrefLang={locale}
            href={`https://seiyouco.com/${locale}`}
          />
        ))}
      </head>
      <body
        className={`${roboto.variable} ${poppins.variable}`}
        data-aos-easing="ease-in-out"
        data-aos-duration="600"
        data-aos-delay="0"
      >
        <AOSInitializer />
        <HtmlWrapper>{children}</HtmlWrapper>
      </body>
    </html>
  );
}
