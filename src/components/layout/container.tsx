import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type LayoutContainerProps = {
  children: ReactNode
  className?: string
}

export const LayoutContainer = ({ children, className }: LayoutContainerProps) => {
  return (
    <div className={cn('px-6 max-w-7xl mx-auto', className)}>
      {children}
    </div>
  )
}