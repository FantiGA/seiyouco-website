"use client";

import { ReactNode } from "react";
import { HtmlWrapper } from "./[locale]/HtmlWrapper";
import { locales } from "@/utils/i18n";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const locale =
    locales.find((locale) => pathname.startsWith(`/${locale}`)) || "en";

  return (
    <html lang={locale}>
      <body>
        <HtmlWrapper>{children}</HtmlWrapper>
      </body>
    </html>
  );
}
