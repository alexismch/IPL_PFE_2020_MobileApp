import i18n from "i18next";
import en from "./en/translation.json";
import fr from "./fr/translation.json";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    /* lng: "en", */
    load: "languageOnly",
    fallbackLng: "en",
    resources,
    interpolation: {
      format: function (value, format) {
        if (format === "intlDateTime") {
          return new Intl.DateTimeFormat("default", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          }).format(new Date(value));
        }
        return value;
      },
    },
  });
