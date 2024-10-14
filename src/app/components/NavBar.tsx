import { NavLink } from "react-router-dom"
import { ROUTE_PATH } from "shared/constants/routes"
import { LinkNavBar } from "./LinkNavBar"
import clsx from "clsx"

export const NavBar = ({className}: {className?: string}) => {
  return (
    <nav className={clsx('flex items-center gap-2 w-max', className)}>
      <LinkNavBar to={ROUTE_PATH.HOME}>About</LinkNavBar>      
      <LinkNavBar to={ROUTE_PATH.SIMPLE_TODO}>Simple to do</LinkNavBar>
      <LinkNavBar to={ROUTE_PATH.ADVANCED_TODO}>Advanced to do</LinkNavBar>
    </nav>
  )
}