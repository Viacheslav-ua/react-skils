import clsx from "clsx";
import { SquareFunction } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { SimpleTodoStore } from "../store/types";
import { useTodoStore } from "../store/useTodoStore";
import { STORAGE } from "shared/constants/storage-keys";

const removeAllSelectedSelector = (state: SimpleTodoStore) => state.removeAllSelected
const selectAllSelector = (state: SimpleTodoStore) => state.selectAll
const clearAllSelector = (state: SimpleTodoStore) => state.clearAll

const handleResetStorage = () => {
  localStorage.removeItem(STORAGE.SIMPLE_TODO)
  window.location.reload()
}

export const BtnFunc = ({className}: {className?: string}) => {
  
  const removeAllSelected = useTodoStore(removeAllSelectedSelector);
  const selectAll = useTodoStore(selectAllSelector);
  const clearAll = useTodoStore(clearAllSelector);
  const { t } = useTranslation();

  

  return (
    <div className={clsx('relative group', className)}>
    <button className={clsx('border-none w-[100px] h-full flex justify-center items-center',
      ' rounded-[5px] bg-[#3f72af] hover:opacity-80 transition-opacity text-white',
      )}>
      <SquareFunction size={22} />
    </button>
    <section className="border border-lime-700  border-t-0 absolute bg-lime-200   w-[150px]
        opacity-0 hidden group-hover:block group-hover:opacity-100 transition-all duration-800">
        <ul>
          <li>
            <button
              className="w-full flex items-center gap-2 px-3 py-2 text-sm
               hover:bg-gray-300 dark:text-black dark:hover:bg-gray-300"
              onClick={selectAll}
            >
              {t('SelectAll')}
            </button>
          </li>
          <li>
            <button
              className="w-full flex items-center gap-2 px-3 py-2 text-sm 
              hover:bg-gray-300 dark:text-black dark:hover:bg-gray-300"
              onClick={clearAll}
            >
              {t('ClearAll')}
            </button>
          </li>
          <li>
            <button
              className="w-full flex items-center gap-2 px-3 py-2 text-sm 
              hover:bg-gray-300 dark:text-black dark:hover:bg-gray-300"
              onClick={removeAllSelected}
            >
             {t('DeleteSelected')}
            </button>
          </li>
          <li>
            <button
              className="w-full flex items-center gap-2 px-3 py-2 text-sm 
              hover:bg-gray-300 dark:text-black dark:hover:bg-gray-300"
              onClick={handleResetStorage}
            >
              {t('ResetStorage')}
            </button>
          </li>
        </ul>
      </section>
    </div>
  )
}