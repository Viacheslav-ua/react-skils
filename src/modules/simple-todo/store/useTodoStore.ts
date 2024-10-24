import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { createId } from '@paralleldrive/cuid2'
import { SimpleTodoStore } from './types'
import { STORAGE } from 'shared/constants/storage-keys'
import initialEntities from './db.json'

export const useTodoStore = create<SimpleTodoStore>()(devtools(persist((set) => ({
  entities: initialEntities,

  addTask: (title) => {
    if (!title) return
    const newTask = {
      id: createId(),
      title,
      isSelected: false,
      createdAt: Date.now(),
    }
    set((state) => ({
      entities: [newTask, ...state.entities],
    }))
  },
  updateTask: (id, title) => {
    set((state) => ({
      entities: state.entities.map((task) => {
        
        if (task.id === id) {
          return {
            ...task,
            title: title,
          }
        }
        return task
      })
    }))
  },
  removeTask: (id) => {
    set((state) => ({ 
      entities: state.entities.filter((task) => task.id !== id),
    }))
  },

  setIsSelected: (id) => {
    set((state) => ({
      entities: state.entities.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isSelected: !task.isSelected,
          }
        }
        return task
      })
    }))
  },

  removeAllSelected: () => {
    set((state) => ({ 
      entities: state.entities.filter((task) => !task.isSelected),
    }))
  },
  selectAll: () => {
    set((state) => ({
      entities: state.entities.map((task) => {
        return {
          ...task,
          isSelected: true,
        }
      })
    }))
  },  
  clearAll: () => {
    set((state) => ({
      entities: state.entities.map((task) => {
        return {  
          ...task,
          isSelected: false,          
        }
      })
    }))
  }
}), { name: STORAGE.SIMPLE_TODO })))