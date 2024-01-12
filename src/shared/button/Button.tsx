import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './Button.module.scss'

export type ButtonVariants = 'clean' | 'icon' | 'link' | 'primary'

export type ButtonProps<T extends ElementType> = {
  as?: T
  children?: ReactNode | string
  className?: string
  icon?: ReactNode
  iconFirst?: boolean
  variant?: ButtonVariants
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    children,
    className,
    icon,
    iconFirst,
    variant = 'primary',
    ...rest
  } = props

  const classNames = {
    component: clsx(s.button, s[variant], className && className),
    icon: clsx(s.icon, s[variant]),
  }

  return (
    <Component className={classNames.component} {...rest}>
      {iconFirst ? (
        <>
          <div className={classNames.icon}>{icon}</div>
          {children}
        </>
      ) : (
        <>
          {children}
          <div className={classNames.icon}>{icon}</div>
        </>
      )}
    </Component>
  )
}
