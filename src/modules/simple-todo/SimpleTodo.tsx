import clsx from "clsx"
import { useTranslation } from 'react-i18next'
import { InputPlus } from "./components/InputPlus"
import { TaskItem } from "./components/TaskItem"
import { useTodoStore } from "./store/useTodoStore"
import { BtnFunc } from "./components/BtnFunc"


export const SimpleTodo = ({className}: {className?: string}) => {
  const entities = useTodoStore(state => state.entities)
  const { t } = useTranslation()

  return (
    <article className={clsx(
      'bg-white min-w-[600px] px-14 pt-5 pb-8 flex flex-col',
      ' items-left justify-center', 
      className,
      )}>

      <div className="relative">
        <h1 className="text-[40px] mb-[0.3em] capitalize dark:text-lime-200">{t('ToDoList')}</h1>
        <p className="text-sm px-6 py-2 rounded-lg absolute top-[-10px] left-[450px]  bg-lime-200">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi tempore incidunt odio temporibus similique fuga, deserunt, veniam corporis modi suscipit error inventore, at quod quos facere expedita unde quas amet?
        </p>
      </div>
      
      <section className="w-full pb-4 flex gap-4">
        <BtnFunc />
        <InputPlus />
        <InputPlus />
      </section>
      <section className="w-full">
        {!entities.length && <p>There is no one task yet...</p>}
        {entities.map(task => 
          <TaskItem key={task.id} title={task.title} id={task.id} done={task.isDone} />
        )}
      </section>
    </article>
  )
}