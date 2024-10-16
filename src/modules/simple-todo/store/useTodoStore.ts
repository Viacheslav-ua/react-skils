import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { createId } from '@paralleldrive/cuid2'
import { SimpleTodoStore } from './types'
import { STORAGE } from 'shared/constants/storage-keys'

export const useTodoStore = create<SimpleTodoStore>()(devtools(persist((set) => ({
  
  entities: [
    {
      114: {
        id: createId(),
        title: 'Task 1',
        done: false,
        createdAt: Date.now(),
    }}
  ],
  addTask: (title) => {
    const newTask = {
      id: createId(),
      title,
      done: false,
      createdAt: Date.now(),
    }
    const newEntity  = {[newTask.createdAt]: newTask}
    set((state) => ({
      // ...state,
      entities : [newEntity, ...state.entities]
    }))
  },
  // updateTask: (id, title) => {
  //   set((state) => ({
  //     tasks: state.tasks.map((task) => {
  //       return {
  //         ...task,
  //         title: task.id === id ? title : task.title
  //       }
  //     })
  //   }))
  // },
  // removeTask: (id) => {
  //   set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) }))
  // },

  // removeAllDone: () => {
  //   set((state) => ({ tasks: state.tasks.filter((task) => !task.done) }))
  // }
}), { name: STORAGE.SIMPLE_TODO })))