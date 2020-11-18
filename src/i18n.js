import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from "./assets/locales/en.json"
import es from "./assets/locales/es.json"

const resources = {
    en,
    es
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    interpolation: {
      escapeValue: false
    }
  });


export default i18n;