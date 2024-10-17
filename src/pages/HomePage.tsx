import { useTranslation } from 'react-i18next'


export const HomePage = () => {
  const { t } = useTranslation()
  return (
    <div>
      <h1>Home</h1>
      <h2>{t('Well')}</h2>
      <p>{t('Language')}</p>
    
    </div>
  )
}