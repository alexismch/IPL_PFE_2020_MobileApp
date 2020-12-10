import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    /* lng: "en", */
    load: "languageOnly",
    fallbackLng: "en",
    backend: {
      loadPath: "locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      format: function (value, format) {
        if (format === "intlDateTime") {
          return new Intl.DateTimeFormat("default", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          }).format(new Date(value));
        }
        return value;
      },
    },
  });
