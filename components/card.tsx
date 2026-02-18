import { cn } from '@/lib/utils'
import React from 'react'

export const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn('p-3 sm:p-5 rounded-xl border border-white/20 bg-primary-foreground w-full', className)}>
            {children}
        </div>
    )
}
