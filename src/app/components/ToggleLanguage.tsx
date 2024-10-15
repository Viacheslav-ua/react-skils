
import i18next, { t } from "i18next"
import { useState } from "react";
import { STORAGE } from "shared/constants/storage-keys";
import { FlagEn, FlagUk } from "shared/ui/Flags";

export const ToggleLanguage = () => {
  const [lang, setLang] = useState(i18next.language)

  function handelClick(selectedLang: string): void {
    i18next.changeLanguage(selectedLang)
    localStorage.setItem(STORAGE.LANG, selectedLang)
    setLang(selectedLang)
  }
  
  return (
    <div
      className="relative group "
    >
      <p className="flex items-center gap-3 p-2 ">
        {t('Language')}
        {(lang === 'en') && <FlagEn />}
        {(lang === 'uk') && <FlagUk />}
      </p>
       
      <section className="border border-t-0 absolute bg-white 
        opacity-0 hidden group-hover:block group-hover:opacity-100 transition-all duration-800">
        <ul>
          <li>
            <button
              className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-300"
              onClick={() => handelClick('en')}
            >
              <FlagEn />
              {t('English')}
              
              </button>
          </li>
          <li>
            <button
              className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-300"
              onClick={() => handelClick('uk')}
            >
              <FlagUk />
              {t('Ukrainian')}
            </button>
          </li>
        </ul>
      </section>
    </div>
  )
}