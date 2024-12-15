import { FC, useCallback, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { Portal } from './Portal'

interface ModalProps {
  className?: string
  children?: React.ReactNode
  isOpen?: boolean
  onClose?: () => void
}

const ANIMATION_DELAY = 300

export const Modal: FC<ModalProps> = (props) => {

  const { className, children, isOpen, onClose } = props

  const [isClosing, setIsClosing] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const contentClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const keydownHandler = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', keydownHandler)
    }
    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', keydownHandler)
    }
  }, [isOpen, keydownHandler])

  return (
    <Portal>
      <div className={clsx(
        'fixed top-0 left-0 right-0 bottom-0',
        isOpen ? 'opacity-1 pointer-events-auto z-10' : 'z-[-1] opacity-0 pointer-events-none',
        className
      )}>
        <div className={clsx(
          'top-0 left-0 w-full h-full flex justify-center items-center bg-slate-900/60',

        )} onClick={closeHandler}>
          <div onClick={contentClickHandler}
            className={clsx(
              'p-6 rounded-xl bg-slate-200',
              isOpen && 'animate-zoomIn',
              isClosing && 'animate-zoomOut',
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>

  )
}