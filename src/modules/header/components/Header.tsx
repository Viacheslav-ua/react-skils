import clsx from "clsx"
import { Logo } from "shared/ui/Logo"
import { NavBar } from "./NavBar"
import { ToggleLanguage } from "shared/ui/ToggleLanguage"
import { ToggleTheme } from "shared/ui/ToggleTheme"

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
        <ToggleLanguage />
        <ToggleTheme className="ml-4 mr-12" />
      </div>
    </header>
  )
}