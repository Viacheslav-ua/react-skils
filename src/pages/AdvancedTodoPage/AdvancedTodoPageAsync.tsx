import { lazy } from "react";

// export const AdvancedTodoPageAsync = lazy(() => import('./AdvancedTodoPage')
//   .then(module => ({ default: module.AdvancedTodoPage })));

  export const AdvancedTodoPageAsync = lazy(() => Promise.all([
    import('./AdvancedTodoPage'),
    new Promise(resolve => setTimeout(resolve, 2000))
  ]).then(([module]) => ({ default: module.AdvancedTodoPage })));