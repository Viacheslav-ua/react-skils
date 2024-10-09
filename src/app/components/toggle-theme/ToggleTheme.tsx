import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ToggleTheme = () => {

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
      className="flex items-center justify-center w-8 h-8 p-1 rounded "
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? <Moon size={24} className="text-white" /> : <Sun size={24} className="text-black" />}    
    </button>
  )
}