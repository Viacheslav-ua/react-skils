import clsx from "clsx"
import { Logo } from "./Logo"
import { NavBar } from "./NavBar"
import { ToggleLanguage } from "./ToggleLanguage"
import { ToggleTheme } from "./ToggleTheme"

export const Header = ({className}: {className?: string}) => {
  return (
    <header className={clsx(
      'w-full h-14 flex items-center text-stone-800 bg-stone-200 dark:bg-stone-700 dark:text-white',
      className)}>
      <Logo className="ml-5" />
      <NavBar className="ml-10 text-lg gap-6" />
      <div className="ml-auto flex items-center">
        <div className="">

        </div>
        <ToggleLanguage className="ml-4 min-w-[120px]" />
        <ToggleTheme className="ml-4 mr-12" />
      </div>
    </header>
  )
}