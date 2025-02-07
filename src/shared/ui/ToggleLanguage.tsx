
import i18next, { t } from "i18next"
import { useState } from "react";
import { STORAGE } from "shared/constants/storage-keys";
import { ContextMenuHover } from "./ContextMenuHover";
import { FlagEn, FlagUk } from "./Flags";

export const ToggleLanguage = () => {
  const [lang, setLang] = useState(i18next.language)

  function handelClick(selectedLang: string): void {
    i18next.changeLanguage(selectedLang)
    localStorage.setItem(STORAGE.LANG, selectedLang)
    setLang(selectedLang)
  }

  return (
    <ContextMenuHover
      ContextMenuTrigger={
        () => <p className="flex items-center gap-3 p-2 " data-testid="block-toggle-language">
          {t('Language')}
          {(lang === 'en') && <FlagEn />}
          {(lang === 'uk') && <FlagUk />}
        </p>
      }
      ContextMenuContent={() =>
        <ul className="border border-t-0  bg-white" data-testid="content-menu-language">
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
      }
    />
  )
}