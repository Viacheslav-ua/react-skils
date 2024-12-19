import { FC } from 'react'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'

interface LoginFormProps {
  className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {

  const { t } = useTranslation()

  return (
    <div className={clsx('flex flex-col items-center gap-5 w-80 px-5', className)}>
      <h1>{t('Login')}</h1>
      <input type="text" placeholder={t('Login')} className="w-full rounded px-4 py-1" />
      <input type="password" placeholder={t('Password')} className="w-full rounded px-4 py-1" />
      <button className='ml-auto'>{t('Login')}</button>
    </div>
  )
}