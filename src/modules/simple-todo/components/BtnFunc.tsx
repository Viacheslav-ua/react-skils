import clsx from "clsx"
import { SquareFunction } from "lucide-react"

export const BtnFunc = ({className}: {className?: string}) => {
  
  return (
    <div className={clsx('relative group', className)}>
    <button className={clsx('border-none w-[100px] h-full flex justify-center items-center',
      ' rounded-[5px] bg-[#3f72af] hover:opacity-80 transition-opacity text-white',
      )}>
      <SquareFunction size={22} />
    </button>
    <section className="border border-t-0 absolute bg-white w-[200px]
        opacity-0 hidden group-hover:block group-hover:opacity-100 transition-all duration-800">
        <ul>
          <li>
            <button
              className="w-full flex items-center gap-2 px-3 py-2 text-sm
               hover:bg-gray-300 dark:text-black dark:hover:bg-gray-300 dark:bg-gray-100"
              onClick={()=>{}}
            >
              Delete Done
            </button>
          </li>
          <li>
            <button
              className="w-full flex items-center gap-2 px-3 py-2 text-sm 
              hover:bg-gray-300 dark:text-black dark:hover:bg-gray-300 dark:bg-gray-100"
              onClick={() => {}}
            >
              Select All
            </button>
          </li>
          <li>
            <button
              className="w-full flex items-center gap-2 px-3 py-2 text-sm 
              hover:bg-gray-300 dark:text-black dark:hover:bg-gray-300 dark:bg-gray-100"
              onClick={() => {}}
            >
              Clear All
            </button>
          </li>
          <li>
            <button
              className="w-full flex items-center gap-2 px-3 py-2 text-sm 
              hover:bg-gray-300 dark:text-black dark:hover:bg-gray-300 dark:bg-gray-100"
              onClick={() => {}}
            >
              Reset Storage
            </button>
          </li>
        </ul>
      </section>
    </div>
  )
}