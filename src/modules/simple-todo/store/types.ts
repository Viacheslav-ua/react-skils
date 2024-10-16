

type Task = {
  id: string
  title: string
  done: boolean
  createdAt: number
}

type TaskCreatedAt = number;

type TaskState = Record<TaskCreatedAt, Task>;

export interface SimpleTodoStore {
  entities: TaskState[]
  // filter: string
  addTask: (title: string) => void
  // updateTask: (id: string, title: string) => void
  // removeTask: (id: string) => void
  // removeAllDone: () => void
}