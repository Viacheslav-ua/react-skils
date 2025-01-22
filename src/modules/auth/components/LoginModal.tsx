import { FC, Suspense } from 'react'
import clsx from 'clsx'
import { Modal } from 'shared/ui/Modal'
import { LoginFormAsync } from './LoginForm.async'
import { Loader } from 'shared/ui/Loader'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => {
  return (
    <Modal
      lazy 
      isOpen={isOpen} 
      onClose={onClose} 
      className={clsx('', className)}>
      <Suspense fallback={<Loader />}>  
        <LoginFormAsync onClose={onClose} />
      </Suspense>
    </Modal>
  )
}