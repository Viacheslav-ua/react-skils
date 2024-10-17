import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { createId } from '@paralleldrive/cuid2'
import { SimpleTodoStore } from './types'
import { STORAGE } from 'shared/constants/storage-keys'

export const useTodoStore = create<SimpleTodoStore>()(devtools(persist((set) => ({

  entities: [
    {
      id: createId(),
      title: 'Task 1',
      isDone: false,
      createdAt: Date.now(),
    }
  ],

  filter: '',
  addTask: (title) => {
    if (!title) return
    const newTask = {
      id: createId(),
      title,
      isDone: false,
      createdAt: Date.now(),
    }
    set((state) => ({
      entities: [newTask, ...state.entities]
    }))
  },
  updateTask: (id, title) => {
    set((state) => ({
      entities: state.entities.map((task) => {
        return {
          ...task,
          title: task.id === id ? title : task.title
        }
      })
    }))
  },
  removeTask: (id) => {
    set((state) => ({ entities: state.entities.filter((task) => task.id !== id) }))
  },

  // removeAllDone: () => {
  //   set((state) => ({ tasks: state.tasks.filter((task) => !task.done) }))
  // },

  setIsDone: (id) => {
    set((state) => ({
      entities: state.entities.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isDone: !task.isDone
          }
        }
        return task
      })
    }))
  },
}), { name: STORAGE.SIMPLE_TODO })))