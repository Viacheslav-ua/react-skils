import clsx from "clsx";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ToggleTheme = ({className}: {className?: string}) => {

  const [isDark, setIsDark] = useState(
    localStorage.getItem('rs-is-dark') === 'true'
  );

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
    localStorage.setItem('rs-is-dark', JSON.stringify(isDark))
  }, [isDark])

  return (
    <button
      aria-label="Toggle Dark Mode"
      className={clsx('flex items-center justify-center w-8 h-8 p-1 rounded', className)}
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? <Sun size={24} className="text-white" /> : <Moon size={24} className="text-black" />}    
    </button>
  )
}