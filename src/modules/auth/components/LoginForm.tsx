import { FC } from 'react'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input'
import { authApi } from '../api/api'
import { useMutation } from '@tanstack/react-query'

interface LoginFormProps {
  className?: string
  onClose: () => void
}

export const LoginForm: FC<LoginFormProps> = ({ className, onClose }) => {

  const loginByUsernameMutation = useMutation({
    mutationFn: authApi.loginByUsername
  })

  // const [ name, setName ] = useState('')

  // const nameOnChange = (val: string) => setName(val)


  const { t } = useTranslation()

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const login = String(formData.get('username'))
    const password = String(formData.get('password'))
    // console.log(username, password, );

    loginByUsernameMutation.mutate({ login, password })
    
    e.currentTarget.reset()
    onClose()
  }

  return (
    <form 
      className={clsx('flex flex-col items-center gap-5 w-80 px-5', className)}
      onSubmit={handleLogin}
    >
      <h1>{t('Login')}</h1>
      <Input 
        autofocus
        name='username'
        // value={name}
        // onChange={nameOnChange} 
        placeholder={t('Name')} 
        className="w-full rounded px-4 py-1 text-slate-900" 
      />
      <Input 
        type="password"
        name='password' 
        placeholder={t('Password')} 
        className="w-full rounded px-4 py-1 text-slate-900" 
      />
      <button className='ml-auto'>{t('Login')}</button>
    </form>
  )
}