import { Plus } from 'lucide-react';
import { useState } from 'react';
import { useTodoStore } from '../store/useTodoStore';
import { useTranslation } from 'react-i18next'
import { SimpleTodoStore } from '../store/types';

const addTaskSelector = (state: SimpleTodoStore) => state.addTask
export const InputPlus = () => {

  const [valueTitle, setValueTitle] = useState('');
  const addTask = useTodoStore(addTaskSelector)

  const { t } = useTranslation()

  return (
    <form className='w-full flex'
      onSubmit={(event) => {
        event.preventDefault();
        addTask(valueTitle);
        setValueTitle('');
      }}
    >
      <input 
        type="text"
        data-testid="new-todo-input" 
        placeholder={t('HereAddTask')} 
        onChange={(event) => setValueTitle(event.target.value)}
        value={valueTitle}
        className='border-[1px] border-[#b1b1b1] bg-[#dbe2ef] rounded-l-[5px] px-3 py-2 w-full
        placeholder:text-lime-700 outline-none focus:border-blue-500 grow'
        />
      <button
        type="submit"
        aria-label="Add task"
        title="Add task"
        className='border-none w-[60px] flex justify-center items-center rounded-r-[5px] 
        bg-[#3f72af] hover:opacity-80 transition-opacity text-white'
        ><Plus size={28} /></button>
    </form>
  )
}