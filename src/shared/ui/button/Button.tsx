import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'
import { Typography } from 'shared/ui/typography/Typography'

import s from 'shared/ui/button/Button.module.scss'

export type ButtonVariants = 'clean' | 'icon' | 'link' | 'primary'

export type ButtonProps<T extends ElementType> = {
  as?: T
  btnText?: string
  children?: ReactNode | string
  className?: string
  icon?: ReactNode
  variant?: ButtonVariants
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { as: Component = 'button', btnText, children, className, variant, ...rest } = props

  const classNames = {
    component: clsx(s.button, variant && s[variant], className && className),
    text: clsx(s.button, btnText && s.btnText),
  }

  return (
    <Component className={classNames.component} {...rest}>
      {children}
    </Component>
  )
}
