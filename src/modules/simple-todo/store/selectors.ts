import { SimpleTodoStore } from "./types";


export const getEntitiesSelector = (state: SimpleTodoStore) => state.entities
export const addTaskSelector = (state: SimpleTodoStore) => state.addTask
export const removeTaskSelector = (state: SimpleTodoStore) => state.removeTask
export const updateTaskSelector = (state: SimpleTodoStore) => state.updateTask
export const setIsSelectedSelector = (state: SimpleTodoStore) => state.setIsSelected
export const removeAllSelectedSelector = (state: SimpleTodoStore) => state.removeAllSelected
export const selectAllSelector = (state: SimpleTodoStore) => state.selectAll
export const clearAllSelector = (state: SimpleTodoStore) => state.clearAll