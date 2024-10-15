import { Logo } from "app/components/Logo"
import { t } from "i18next"

export const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <h2>{t('Well')}</h2>
    </div>
  )
}