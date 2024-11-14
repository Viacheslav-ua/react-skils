import { lazy } from "react";

export const AdvancedTodoPageAsync = lazy(() => import('./AdvancedTodoPage')
  .then(module => ({ default: module.AdvancedTodoPage })));