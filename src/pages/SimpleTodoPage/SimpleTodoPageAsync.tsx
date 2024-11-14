import { lazy } from "react";

export const SimpleTodoPageAsync = lazy(() => import('./SimpleTodoPage')
  .then(module => ({ default: module.SimpleTodoPage })));