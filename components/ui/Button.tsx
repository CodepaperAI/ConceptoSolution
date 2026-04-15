'use client'

import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  children: React.ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'border border-primary bg-primary text-white shadow-[0_18px_38px_rgba(124,38,51,0.24)] hover:bg-primary-hover hover:shadow-[0_22px_48px_rgba(124,38,51,0.3)]',
  secondary:
    'border border-border bg-white/[0.06] text-text-primary shadow-[0_12px_28px_rgba(0,0,0,0.24)] hover:border-primary/45 hover:bg-white/[0.1]',
  ghost:
    'border border-transparent bg-transparent text-text-secondary hover:border-border/70 hover:bg-white/[0.06] hover:text-text-primary',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-6 py-3 text-sm font-semibold tracking-[0.02em]',
  md: 'px-7 py-4 text-sm font-semibold tracking-[0.03em]',
  lg: 'px-9 py-[1.15rem] text-base font-semibold tracking-[0.03em]',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
        'hover:-translate-y-0.5',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      {...props}
    >
      {isLoading && <Loader2 className="mr-3 h-5 w-5 animate-spin" />}
      {children}
    </button>
  )
}
