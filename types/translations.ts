export type TranslationKeys = {
  head: "title" | "keywords" | "description";
  language: "zh-CN" | "zh-TW" | "zh-HK" | "en" | "ja" | "ko";
  header:
    | "title"
    | "menu-home"
    | "menu-about"
    | "menu-services"
    | "menu-team"
    | "menu-contact"
    | "menu-careers";
  menu: "menu" | "close";
  hero: "title" | "description" | "button";
  about:
    | "title"
    | "description"
    | "item-title-1"
    | "item-description-1"
    | "item-title-2"
    | "item-description-2"
    | "item-title-3"
    | "item-description-3";
  stats:
    | "stat-1-title"
    | "stat-1-value"
    | "stat-2-title"
    | "stat-2-value"
    | "stat-3-title"
    | "stat-3-value"
    | "stat-4-title"
    | "stat-4-value";
  services:
    | "title"
    | "description"
    | "service-1-title"
    | "service-1-description"
    | "service-1-icon"
    | "service-2-title"
    | "service-2-description"
    | "service-2-icon"
    | "service-3-title"
    | "service-3-description"
    | "service-3-icon"
    | "service-4-title"
    | "service-4-description"
    | "service-4-icon"
    | "service-5-title"
    | "service-5-description"
    | "service-5-icon"
    | "service-6-title"
    | "service-6-description"
    | "service-6-icon";
  history:
    | "title"
    | "description"
    | "item-title-1"
    | "item-description-1"
    | "item-title-2"
    | "item-description-2"
    | "item-title-3"
    | "item-description-3"
    | "item-title-4"
    | "item-description-4"
    | "item-title-5"
    | "item-description-5";
  team:
    | "title"
    | "description"
    | "team-1-name"
    | "team-1-position"
    | "team-1-description"
    | "team-1-image"
    | "team-1-social-x"
    | "team-1-social-facebook"
    | "team-1-social-instagram"
    | "team-1-social-linkedin"
    | "team-2-name"
    | "team-2-position"
    | "team-2-description"
    | "team-2-image"
    | "team-2-social-x"
    | "team-2-social-facebook"
    | "team-2-social-instagram"
    | "team-2-social-linkedin"
    | "team-3-name"
    | "team-3-position"
    | "team-3-description"
    | "team-3-image"
    | "team-3-social-x"
    | "team-3-social-facebook"
    | "team-3-social-instagram"
    | "team-3-social-linkedin";
  contact:
    | "title"
    | "description"
    | "map-url"
    | "address-title"
    | "address-value"
    | "email-title"
    | "email-value"
    | "call-title"
    | "call-value";
  careers:
    | "title"
    | "description"
    | "item-title-1"
    | "item-description-1"
    | "item-title-2"
    | "item-description-2";
  footer:
    | "title"
    | "description"
    | "social-x"
    | "social-facebook"
    | "social-instagram"
    | "social-linkedin"
    | "copyright.line1"
    | "copyright.line2";
};

export type TranslationSection<T extends keyof TranslationKeys> = {
  [K in TranslationKeys[T]]: string;
};
