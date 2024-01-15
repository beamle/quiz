import { ComponentPropsWithoutRef, FC, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './Table.module.scss'

export const THead = forwardRef<HTMLTableSectionElement, ComponentPropsWithoutRef<'thead'>>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      thead: clsx(className, s.thead),
    }

    return <thead className={classNames.thead} {...rest} ref={ref}></thead>
  }
)

export const TBody = forwardRef<HTMLTableSectionElement, ComponentPropsWithoutRef<'tbody'>>(
  ({ children, className, ...rest }, ref) => {
    const classNames = {
      tbody: clsx(className, s.tbody),
    }

    return (
      <tbody className={classNames.tbody} {...rest} ref={ref}>
        {children}
      </tbody>
    )
  }
)

export const TRow = forwardRef<HTMLTableRowElement, ComponentPropsWithoutRef<'tr'>>(
  ({ children, className, ...rest }, ref) => {
    const classNames = {
      tr: clsx(className, s.tr),
    }

    return (
      <tr className={classNames.tr} {...rest} ref={ref}>
        {children}
      </tr>
    )
  }
)

export const THeader = forwardRef<HTMLTableCellElement, ComponentPropsWithoutRef<'th'>>(
  ({ className, ...rest }, ref) => {
    const classNames = { th: clsx(className, s.th) }

    return <th className={classNames.th} {...rest} ref={ref}></th>
  }
)

export const TCell = forwardRef<HTMLTableCellElement, ComponentPropsWithoutRef<'td'>>(
  ({ className, ...rest }, ref) => {
    const classNames = { td: clsx(className, s.td) }

    return <td className={classNames.td} {...rest} ref={ref}></td>
  }
)

export const Table = forwardRef<HTMLTableElement, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      table: clsx(className, s.table),
    }

    return <table className={classNames['table']} {...rest} ref={ref}></table>
  }
)

export const TableHeader: FC<
  Omit<
    ComponentPropsWithoutRef<'thead'> & {
      columns: { key: string; title: string }[]
    },
    'children'
  >
> = ({ columns, ...restProps }) => {
  return (
    <THead {...restProps}>
      <TRow>
        {columns.map(({ key, title }) => (
          <THeader key={key}>
            <div className={s.titleAndSortIcon}>{title}</div>
          </THeader>
        ))}
        <THeader />
      </TRow>
    </THead>
  )
}
