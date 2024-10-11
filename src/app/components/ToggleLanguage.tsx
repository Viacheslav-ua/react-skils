import i18next, { t } from "i18next"
import { useEffect, useState } from "react"
import { FlagEn, FlagUk } from "shared/ui/Flags";


export const ToggleLanguage = () => {
  const [lang, setLang] = useState(i18next.language)

  useEffect(() => {
    i18next.changeLanguage(lang)
    localStorage.setItem('rs-i18nextLng', lang)
  }, [lang])

  return (
    <div
      className="relative group "
    >
      <p className="flex items-center gap-3 p-2 ">
        {t('Language')}
        {(i18next?.language === 'en') && <FlagEn />}
        {(i18next?.language === 'uk') && <FlagUk />}
      </p>
       
      <section className="border border-t-0 absolute bg-white 
        opacity-0 hidden group-hover:block group-hover:opacity-100 transition-all duration-800">
        <ul>
          <li>
            <button
              className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-300"
              onClick={() => setLang('en')}
            >
              <FlagEn />
              {t('English')}
              </button>
          </li>
          <li>
            <button
              className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-300"
              onClick={() => setLang('uk')}
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