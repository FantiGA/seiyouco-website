// Supported languages list
export const locales = ["en", "ja", "zh-CN", "zh-TW", "zh-HK", "ko"] as const;
export type Locale = (typeof locales)[number];

// Default language
export const defaultLocale: Locale = "en";

// Load translation files using dynamic import
export const loadMessages = async (locale: Locale) => {
  const messages = await import(`../locales/${locale}.json`);
  return messages.default;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
