import { FC } from 'react'
import clsx from 'clsx'
import { Loader } from 'shared/ui/Loader'

interface PageLoaderProps {
  className?: string
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={clsx(
        'min-h-screen flex items-center justify-center flex-grow-1', 
        className)}>
      <Loader />
    </div>
  )
}