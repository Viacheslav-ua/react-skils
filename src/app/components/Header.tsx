import { Logo } from "./Logo"
import { NavBar } from "./NavBar"
import { ToggleLanguage } from "./ToggleLanguage"
import { ToggleTheme } from "./ToggleTheme"

export const Header = () => {
  return (
    <header className="w-full h-14 flex items-center bg-slate-200">
      <Logo className="ml-5" />
      <NavBar className="ml-10 text-lg gap-6" />
      <div className="ml-auto flex items-center">
        <ToggleTheme />
        <ToggleLanguage />
      </div>
    </header>
  )
}