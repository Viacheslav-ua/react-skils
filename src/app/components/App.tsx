// import { useTranslation } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'
import { ROUTE_PATH } from 'shared/constants/routes'
import { Layout } from './Layout'
import { HomePage } from 'pages/HomePage'
import { SimpleTodoPage } from 'pages/SimpleTodoPage'
import { AdvancedTodoPage } from 'pages/AdvancedTodoPage'
import { NotFoundPage } from 'pages/NotFoundPage'


export const App  = () => {

  return (
    <Routes>
      <Route path={ROUTE_PATH.HOME} element={<Layout />}>
        <Route path={ROUTE_PATH.HOME} element={<HomePage />}/>
        <Route path={ROUTE_PATH.SIMPLE_TODO} element={<SimpleTodoPage />}/>
        <Route path={ROUTE_PATH.ADVANCED_TODO} element={<AdvancedTodoPage />}/>
        <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFoundPage />}/>
      </Route>
    </Routes>
  )
}
