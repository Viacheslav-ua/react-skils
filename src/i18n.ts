import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { STORAGE } from "shared/constants/storage-keys";
import { simpleTodoEn, simpleTodoUk } from "modules/simple-todo";
import { pagesEn, pagesUk } from "pages/translate";
import { headerEn, headerUk } from "modules/header";

const resources = {
  en: {
    translation: Object.assign({}, 
    headerEn, 
    simpleTodoEn,
    pagesEn,

    )
  },
  uk: {
    translation: Object.assign({}, 
    headerUk, 
    simpleTodoUk,
    pagesUk,

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