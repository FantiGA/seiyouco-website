export type TranslationKeys = {
  header: "title" | "keywords" | "description";
  language: "zh-CN" | "en" | "ja";
  menu: "menu" | "close";
  chapter:
    | "our-mission"
    | "our-vision"
    | "our-core-value"
    | "our-faith-statment"
    | "worship-service-information"
    | "contact";
  "prayer-text":
    | "corinthians15-3"
    | "corinthians15-4"
    | "corinthians15"
    | "line1"
    | "line2"
    | "line3"
    | "line4"
    | "line5"
    | "line6"
    | "line7";
  welcome: "title" | "title2" | "line1" | "line2" | "line3" | "line4";
  "our-mission": "title" | "line1" | "line2" | "line3" | "line4";
  "our-vision":
    | "title"
    | "gathering"
    | "growing"
    | "going"
    | "line1"
    | "line2"
    | "line3";
  "our-core-value":
    | "title"
    | "faith"
    | "hope"
    | "love"
    | "line1"
    | "line2"
    | "line3"
    | "line4"
    | "line5"
    | "line6"
    | "line7"
    | "line8"
    | "line9"
    | "line10";
  "our-faith-statment":
    | "title"
    | "the-scriptures"
    | "god"
    | "jesus-christ"
    | "the-holy-spirit"
    | "the-condition-of-people"
    | "the-work-of-christ"
    | "salvation"
    | "the-church"
    | "eternal-state"
    | "line1"
    | "line2"
    | "line3"
    | "line4"
    | "line5"
    | "line6"
    | "line7"
    | "line8"
    | "line9"
    | "line10"
    | "line11"
    | "line12";
  "worship-service-information":
    | "title"
    | "ticf-ueno-name"
    | "ticf-ueno-time"
    | "ticf-ueno-address-line1"
    | "ticf-ueno-address-line2"
    | "ticf-ueno-map"
    | "ticf-ikebukuro-name"
    | "ticf-ikebukuro-time"
    | "ticf-ikebukuro-address-line1"
    | "ticf-ikebukuro-address-line2"
    | "ticf-ikebukuro-map";
  contact: "title" | "email";
  footer: "copyright.line1" | "copyright.line2";
};

export type TranslationSection<T extends keyof TranslationKeys> = {
  [K in TranslationKeys[T]]: string;
};
