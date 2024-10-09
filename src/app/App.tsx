import { Todo } from 'modules/todo'
import { ToggleTheme } from './components/toggle-theme/ToggleTheme'

function App() {

  return (
    <div className=" dark:bg-slate-700 transition-colors">
      <h1 className="text-3xl text-red-500 dark:text-orange-200 dark:bg-slate-700">App</h1>
      <Todo />
      <ToggleTheme />
    </div>

  )
}

export default App
