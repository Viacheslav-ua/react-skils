

type TaskDto = {
  id: string
  title: string
  isSelected: boolean
  createdAt: number
}

export interface SimpleTodoStore {
  entities: TaskDto[]

  addTask: (title: string) => void
  updateTask: (id: string, title: string) => void
  removeTask: (id: string) => void
  selectAll: () => void
  clearAll: () => void
  removeAllSelected: () => void
  setIsSelected: (id: string) => void
}