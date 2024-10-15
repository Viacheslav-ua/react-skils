import { Logo } from "./Logo"
import { NavBar } from "./NavBar"
import { ToggleLanguage } from "./ToggleLanguage"
import { ToggleTheme } from "./ToggleTheme"

export const Header = () => {
  return (
    <header className="w-full h-14 flex items-center text-stone-800 bg-stone-200 dark:bg-stone-700 dark:text-white">
      <Logo className="ml-5" />
      <NavBar className="ml-10 text-lg gap-6" />
      <div className="ml-auto flex items-center">
        <div className="w-16 h-7 bg-rose-200">

        </div>
        <ToggleLanguage className="ml-4 min-w-[120px]" />
        <ToggleTheme className="mx-4" />
      </div>
    </header>
  )
}