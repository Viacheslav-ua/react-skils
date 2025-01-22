import clsx from "clsx"
import { Logo } from "shared/ui/Logo"
import { NavBar } from "./NavBar"
import { ToggleLanguage } from "shared/ui/ToggleLanguage"
import { ToggleTheme } from "shared/ui/ToggleTheme"
import { useCallback, useState } from "react"
import { LoginModal } from "modules/auth"

export const Header = ({ className }: { className?: string }) => {

  const [isAuthModal, setIsAuthModal] = useState(false)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  return (
    <header className={clsx(
      'w-full h-14 flex items-center text-stone-800 bg-stone-200 dark:bg-stone-700 dark:text-white',
      className)}>
      <Logo className="ml-5" />
      <NavBar className="ml-10 text-lg gap-6" />
      <div className="ml-auto flex items-center">
        <div className="">

        </div>
        <button
          className="border-none w-[100px] h-full flex justify-center items-center rounded-[5px] bg-[#3f72af] hover:opacity-80 transition-opacity text-white"
          onClick={onShowModal}
        >
          Login
        </button>
        <ToggleLanguage />
        <ToggleTheme className="ml-4 mr-12" />
      </div>

      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </header>
  )
}