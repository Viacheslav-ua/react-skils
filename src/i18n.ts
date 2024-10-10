import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { appEn, appUk } from 'app/translate'

const resources = {
  en: {
    translation: Object.assign({
      "Welcome to React": "Welcome to React and react-i18next",
      "Well": "All Well"
    }, 
    appEn, 
    
    )
  },
  uk: {
    translation: Object.assign({
      "Welcome to React": "Ласкаво просимо до React" +
        " і i18n",
      "Well": "Все добре"
    }, 
    appUk, 
    
  )
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('rs-i18nextLng') || 'en',
    // fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;