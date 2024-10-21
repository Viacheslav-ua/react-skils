

export type Task = {
  id: string
  title: string
  isDone: boolean
  createdAt: number
}

export interface SimpleTodoStore {
  entities: Task[]

  addTask: (title: string) => void
  updateTask: (id: string, title: string) => void
  removeTask: (id: string) => void
  // removeAllDone: () => void
  setIsDone: (id: string) => void
}