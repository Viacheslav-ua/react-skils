import clsx from "clsx"
import { useTranslation } from 'react-i18next'
import { InputPlus } from "./InputPlus"
import { TaskItem } from "./TaskItem"
import { BtnFunc } from "./BtnFunc"
import { InputFilter } from "./InputFilter"
import { useState } from "react"
import { SimpleTodoStore } from "../store/types"
import { useTodoStore } from "../store/useTodoStore"

const entitiesSelector = (state: SimpleTodoStore) => state.entities

export const SimpleTodo = ({ className, ...props }: { className?: string }) => {
  const [filter, setFilter] = useState('')
  const entities = useTodoStore(entitiesSelector)
  const { t } = useTranslation()

  const filteredEntities = ( filter === '') 
    ? entities 
    : entities.filter(task => task.title.toLowerCase().includes(filter.toLowerCase()))

  return (
    <article {...props} className={clsx(
      'bg-white min-w-[600px] px-14 pt-5 pb-8 flex flex-col',
      ' items-left justify-center',
      className,
    )}>

      <div className="relative">
        <h1 className="text-[40px] mb-[0.3em] capitalize dark:text-lime-200">{t('ToDoList')}</h1>
        <p className="text-sm px-6 py-2 rounded-lg absolute top-[-10px] left-[450px]  bg-lime-200">
          {t('AboutSimpleTodo')}
        </p>
      </div>

      <section className="w-full pb-4 flex gap-4">
        <BtnFunc />
        <InputPlus />
        <InputFilter setFilter={setFilter} className="w-[400px]" />
      </section>
      <section className="w-full">
        {!filteredEntities.length && <p className="dark:text-slate-200">{t('NoOneTask')}</p>}
        {filteredEntities.map(task =>
          <TaskItem
            key={task.id}
            title={task.title}
            id={task.id}
            isSelected={task.isSelected}
          />
        )}
      </section>
    </article>
  )
}