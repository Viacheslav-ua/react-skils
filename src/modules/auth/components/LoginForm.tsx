import { FC, useState } from 'react'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input'

interface LoginFormProps {
  className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {

  const [ name, setName ] = useState('')

  const nameOnChange = (val: string) => setName(val)


  const { t } = useTranslation()

  return (
    <div className={clsx('flex flex-col items-center gap-5 w-80 px-5', className)}>
      <h1>{t('Login')}</h1>
      <Input 
        autofocus
        name='name'
        value={name}
        onChange={nameOnChange} 
        placeholder={t('Name')} 
        className="w-full rounded px-4 py-1 text-slate-900" 
      />
      <Input 
        type="password" 
        placeholder={t('Password')} 
        className="w-full rounded px-4 py-1 text-slate-900" 
      />
      <button className='ml-auto'>{t('Login')}</button>
    </div>
  )
}