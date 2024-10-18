import { FilterX } from 'lucide-react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useTodoStore } from '../store/useTodoStore';
import { useTranslation } from 'react-i18next'
import { useDebounce } from 'shared/lib/debounce';
import { SimpleTodoStore, Task } from '../store/types';
import clsx from 'clsx';

const getFilteredEntitiesSelector = (state: SimpleTodoStore) => state.getFilteredEntities
interface InputFilterProps {
  setFilteredTasks: Dispatch<SetStateAction<Task[]>>
  className?: string
}

export const InputFilter: React.FC<InputFilterProps> = ({setFilteredTasks, className}) => {

  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 700)
  const setFilter = useTodoStore(state => state.setFilter)
  const getFilteredEntities = useTodoStore(getFilteredEntitiesSelector)

  const { t } = useTranslation()

  useEffect(() => {
    setFilter(debouncedValue)
    setFilteredTasks(getFilteredEntities)
  }, [debouncedValue])


 
  return (
    <div className={clsx('w-full flex' ,className)}>
      <input 
        type="text" 
        placeholder={t('Filter')} 
        onChange={e => setValue(e.target.value)}
        value={value}
        className='border-[1px] border-[#b1b1b1] bg-[#dbe2ef] rounded-l-[5px] px-3 py-2 w-full
        placeholder:text-lime-700 outline-none focus:border-blue-500 grow text-red-600'
        />
      <button
        onClick={() => setValue('')}
        aria-label="Clear filter"
        className='border-none w-[60px] flex justify-center items-center rounded-r-[5px] 
        bg-[#3f72af] hover:opacity-80 transition-opacity text-white'
        ><FilterX size={28} /></button>
    </div>
  )
}