import { FC } from 'react'
import clsx from 'clsx'
import { Modal } from 'shared/ui/Modal'
import { LoginForm } from './LoginForm'

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
      <LoginForm />
    </Modal>
  )
}