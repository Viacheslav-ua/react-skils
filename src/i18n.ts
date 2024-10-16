import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { appEn, appUk } from 'app/translate'
import { STORAGE } from "shared/constants/storage-keys";
import { simpleTodoEn, simpleTodoUk } from "modules/simple-todo/translate";

const resources = {
  en: {
    translation: Object.assign({}, 
    appEn, 
    simpleTodoEn,

    )
  },
  uk: {
    translation: Object.assign({}, 
    appUk, 
    simpleTodoUk,
    
    )
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem(STORAGE.LANG) || 'en',
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;