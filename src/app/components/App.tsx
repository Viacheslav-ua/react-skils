import { Route, Routes } from 'react-router-dom'
import { ROUTE_PATH } from 'shared/constants/routes'
import { Layout } from './Layout'
import { Suspense } from 'react'
import { AdvancedTodoPageAsync, HomePageAsync, NotFoundPageAsync, SimpleTodoPageAsync } from 'pages'


export const App = () => {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={ROUTE_PATH.HOME} element={<Layout />}>
          <Route path={ROUTE_PATH.HOME} element={<HomePageAsync />} />
          <Route path={ROUTE_PATH.SIMPLE_TODO} element={<SimpleTodoPageAsync />} />
          <Route path={ROUTE_PATH.ADVANCED_TODO} element={<AdvancedTodoPageAsync />} />
          <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFoundPageAsync />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
