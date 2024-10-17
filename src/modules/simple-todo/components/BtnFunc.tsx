import clsx from "clsx"
import { SquareFunction } from "lucide-react"

export const BtnFunc = ({className}: {className?: string}) => {
  
  return (
    <button className={clsx('border-none w-[120px] flex justify-center items-center',
      ' rounded-[5px] bg-[#3f72af] hover:opacity-80 transition-opacity text-white',
       className,
      )}>
      <SquareFunction size={22} />
    </button>
  )
}