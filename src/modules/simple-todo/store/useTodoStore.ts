import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { createId } from '@paralleldrive/cuid2'
import { SimpleTodoStore } from './types'
import { STORAGE } from 'shared/constants/storage-keys'

export const useTodoStore = create<SimpleTodoStore>()(devtools(persist((set, get) => ({

  entities: [
    {
      id: createId(),
      title: 'Task 1',
      isDone: false,
      createdAt: Date.now(),
    }
  ],

  filter: '',

  setFilter: (filter) => {
    set((state) => ({
      filter: filter
    }))
  },
  getFilteredEntities: () => {
    if (get().filter === '') {
      return get().entities
    }
    return get().entities.filter((task) => task.title.includes(get().filter))
  },
    
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