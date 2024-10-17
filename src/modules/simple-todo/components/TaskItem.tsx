import { Trash2, Pencil, X, Check } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTodoStore } from '../store/useTodoStore';

interface TaskItemProps {
  id: string
  title: string
  done: boolean
}

export const TaskItem: React.FC<TaskItemProps> = ({ id, title, done }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const editTitleInputRef = useRef<HTMLInputElement>(null);

  const setIsDone = useTodoStore(state => state.setIsDone)
  const updateTask = useTodoStore(state => state.updateTask)
  const removeTask = useTodoStore(state => state.removeTask)

  useEffect(() => {
    if (isEditing) {
      editTitleInputRef.current?.focus();
    }
  }, [isEditing]);


  return (
    <div className='w-full flex items-center gap-1 mb-4 bg-[#dbe2ef] hover:bg-opacity-90
    transition-all rounded-[5px]'>
      <label className='flex items-center gap-4 py-2 px-6 cursor-pointer'>
        <input type="checkbox" checked={done}
          disabled={isEditing}
          onChange={() => setIsDone(id)}
          // className='w-5 h-5'
        />
      </label>
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            ref={editTitleInputRef}
            onChange={(e) => setEditedTitle(e.target.value)}
            onKeyDown={(e) => {if (e.key === 'Enter') {
               setIsEditing(false)
               updateTask(id, editedTitle) 
              }}}
            className='grow bg-stone-200 outline-none my-2 mx-1'
          />
        ) : (
          <p className='py-2 grow'>{title}</p>
        )

        }
        {/* <p className='text-md'>{title}</p> */}
      

      {isEditing ? (
        <>
          <button aria-label='save'
            className='w-[40px] flex justify-center items-center'
            onClick={() => {
               setIsEditing(false); 
               updateTask(id, editedTitle) 
            }}>
              <Check size={22} color='green' className='hover:opacity-70 transition-opacity' />
          </button>
          <button aria-label='cancel'
            onClick={() => { setIsEditing(false); setEditedTitle(title) }}
            className='w-[40px] flex justify-center items-center'>
              <X size={22} color='red' className='hover:opacity-70 transition-opacity' />
          </button>
        </>
      ) : (
        <>
          <button aria-label='edit'
            className='w-[40px] flex justify-center items-center'
            onClick={() => setIsEditing(true)}>
            <Pencil size={22} color='blue' className='hover:opacity-70 transition-opacity' />
          </button>
          <button aria-label='remove'
            onClick={() => removeTask(id)}
            className='w-[40px] flex justify-center items-center'>
            <Trash2 size={22} color='red' className='hover:opacity-70 transition-opacity' />
          </button>
        </>
      )}



    </div>
  )
}