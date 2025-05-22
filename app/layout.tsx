import { ReactNode } from "react";
// import { HtmlWrapper } from "./[locale]/HtmlWrapper";
// import { locales } from "@/utils/i18n";
// import { usePathname } from "next/navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import { AOSInitializer } from "@/components";

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

export const metadata: Metadata = {
  title: "Seiyouco",
  description: "Seiyouco website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // const pathname = usePathname();
  // const locale =
  //   locales.find((locale) => pathname.startsWith(`/${locale}`)) || "en";

  return (
    <html lang="en">
      <head>
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        /> */}
      </head>
      <body
        className={`${roboto.variable} ${poppins.variable}`}
        data-aos-easing="ease-in-out"
        data-aos-duration="600"
        data-aos-delay="0"
      >
        <AOSInitializer />
        {children}
      </body>
    </html>
  );
}
