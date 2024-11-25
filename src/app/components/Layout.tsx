import { Outlet } from "react-router-dom"
import { Header } from "modules/header"
import { PageLoader } from "modules/page-loader"
import { Suspense } from "react"

export const Layout = () => {
  return (
    <div className="dark:bg-slate-700 bg-slate-100 h-screen">
      <Header className="sticky top-0 z-10 border-b border-b-stone-400" />
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </div>
  )
}