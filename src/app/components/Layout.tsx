import { Outlet } from "react-router-dom"
import { NavBar } from "./NavBar"
import { Header } from "./Header"

export const Layout = () => {
  return (
    <div>
      <Header />
      {/* <NavBar className="gap-6 p-2 font-semibold" /> */}
      <Outlet />
    </div>
  )
}