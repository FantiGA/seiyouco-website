import type { TranslationSection } from "@/types";
import type { FC } from "react";

interface Props {
  translations: TranslationSection<"footer">;
}

export const Footer: FC<Props> = ({ translations }) => {
  return (
    <div className="flex justify-center mt-10 md:mt-24 mb-4">
      <p className="text-xs">
        {translations["copyright.line1"]}
        {`${new Date().getFullYear()} ${translations["copyright.line2"]}`}
      </p>
    </div>
  );
};
