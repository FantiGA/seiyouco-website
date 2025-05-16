import { generateStaticParams } from "@/utils/i18n";
import { ReactNode } from "react";

export { generateStaticParams };

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
