import { ComponentPropsWithoutRef, ElementType } from 'react'

import clsx from 'clsx'

import s from './Typography.module.scss'

export type TypographyProps<T extends ElementType> = {
  as?: T
  title?: string
  variant?: 'body' | 'h1'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'span'>(props: TypographyProps<T>) => {
  const { as: Component = 'span', children, className, title, variant = 'body', ...rest } = props

  const classNames = {
    typography: clsx(s[variant], className && className),
  }

  return (
    <Component className={classNames.typography} title={title} {...rest}>
      {children}
    </Component>
  )
}
