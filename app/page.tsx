"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
// import { locales } from "@/utils/i18n";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/en");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Loading...</h1>
        <p className="text-gray-600">Redirecting to English version...</p>
      </div>
    </div>
  );
}
