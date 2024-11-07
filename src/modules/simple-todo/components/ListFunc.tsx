import { useTranslation } from "react-i18next";
import { useTodoStore } from "../store/useTodoStore";
import { SimpleTodoStore } from "../store/types";
import { STORAGE } from "shared/constants/storage-keys";
import clsx from "clsx";

const removeAllSelectedSelector = (state: SimpleTodoStore) => state.removeAllSelected
const selectAllSelector = (state: SimpleTodoStore) => state.selectAll
const clearAllSelector = (state: SimpleTodoStore) => state.clearAll

const handleResetStorage = () => {
  localStorage.removeItem(STORAGE.SIMPLE_TODO)
  window.location.reload()
}

export const ListFunc = ({className}: {className?: string}) => {

  const removeAllSelected = useTodoStore(removeAllSelectedSelector);
  const selectAll = useTodoStore(selectAllSelector);
  const clearAll = useTodoStore(clearAllSelector);
  const { t } = useTranslation();

  return (
    <ul className={clsx('border border-lime-700  border-t-0 bg-lime-200 w-[150px]', className)}>
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
  )
}

