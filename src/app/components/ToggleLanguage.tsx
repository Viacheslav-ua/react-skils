
import clsx from "clsx";
import i18next, { t } from "i18next"
import { useState } from "react";
import { STORAGE } from "shared/constants/storage-keys";
import { FlagEn, FlagUk } from "shared/ui/Flags";

export const ToggleLanguage = ({className}: {className?: string}) => {
  const [lang, setLang] = useState(i18next.language)

  function handelClick(selectedLang: string): void {
    i18next.changeLanguage(selectedLang)
    localStorage.setItem(STORAGE.LANG, selectedLang)
    setLang(selectedLang)
  }
  
  return (
    <div
      className={clsx('relative group', className)}
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
              className="w-full flex items-center gap-2 px-3 py-2 text-sm
               hover:bg-gray-300 dark:text-black dark:hover:bg-gray-300 dark:bg-gray-100"
              onClick={() => handelClick('en')}
            >
              <FlagEn />
              {t('English')}
              
              </button>
          </li>
          <li>
            <button
              className="w-full flex items-center gap-2 px-3 py-2 text-sm 
              hover:bg-gray-300 dark:text-black dark:hover:bg-gray-300 dark:bg-gray-100"
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