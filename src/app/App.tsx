import { Todo } from 'modules/todo'
import { ToggleTheme } from './components/ToggleTheme'
import { useTranslation } from 'react-i18next'
import { ToggleLanguage } from './components/ToggleLanguage'

function App() {

  const {t} = useTranslation()

  return (
    <div className=" dark:bg-slate-600 dark:text-white transition-colors">
      <h1 className="text-3xl text-red-500 dark:text-red-200">App</h1>
      <h2>{t('Welcome to React')}</h2>
      <h2>{t('Well')}</h2>
      <h2>{t('W')}</h2>
      <h2>{t('Wellll')}</h2>
      <Todo />
      <ToggleTheme />
      <ToggleLanguage />
    </div>

  )
}

export default App
