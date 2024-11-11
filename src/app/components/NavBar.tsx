import { ROUTE_PATH } from "shared/constants/routes"
import { LinkNavBar } from "./LinkNavBar"
import { useTranslation } from 'react-i18next'
import clsx from "clsx"


export const NavBar = ({className}: {className?: string}) => {
  const { t } = useTranslation()
  
  return (
    <nav className={clsx('flex items-center gap-2 w-max', className)}>
      <LinkNavBar to={ROUTE_PATH.HOME} data-testid="link-home">{t('About')}</LinkNavBar>      
      <LinkNavBar to={ROUTE_PATH.SIMPLE_TODO} data-testid="link-simple-todo">{t('Simple')}</LinkNavBar>
      <LinkNavBar to={ROUTE_PATH.ADVANCED_TODO} data-testid="link-advanced-todo">{t('Advanced')}</LinkNavBar>
    </nav>
  )
}