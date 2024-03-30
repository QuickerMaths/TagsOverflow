import { cn } from '@/utils/cn'
import React from 'react'

interface ContainerProps {
    children: React.ReactNode
    className?: string
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn('mx-auto p-2 w-[95%] sm:max-w-[480px] md:max-w-[768px] md:w-[90%] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1440px]', className)}>
      {children}
    </div>
  )
}

export default Container