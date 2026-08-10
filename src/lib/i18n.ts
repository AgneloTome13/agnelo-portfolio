import i18n  from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import pt from '../lang/pt/translation.json';
import en from '../lang/en/translation.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            pt: {
                translation: pt,
            },
            en: {
                translation: en,
            },
        },
        fallbackLng: 'pt',
        supportedLngs: ["pt", "en"],
        detection: {
            order: ['localStorage'],
            caches: ['localStorage'],
            lookupLocalStorage: "language",
        },
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n;