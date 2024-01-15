import { ReactNode } from 'react'

import s from './TableSkeleton.module.scss'

import { TCell, THeader, TRow, Table } from '../Table'

type CellComponent = (idx?: number) => ReactNode

export const TableWithPageLoadingSkeleton = ({ numRows }: { numRows: number }) => {
  return (
    <>
      <div>
        <TableSkeleton numRows={numRows} />
      </div>
    </>
  )
}

export const TableSkeleton = ({ numRows }: { numRows: number }) => {
  const numCells = 4

  const renderRow = (cellComponent: CellComponent, rowIndex: number) => (
    <TRow key={rowIndex}>
      {Array.from({ length: numCells }, (_, idx) => cellComponent(idx))}
      {cellComponent()}
    </TRow>
  )

  const renderCell: CellComponent = idx => (
    <TCell key={idx}>
      <div className={s.line}></div>
    </TCell>
  )

  return (
    <Table className={s.tg}>
      <TRow key={'222'}>
        {Array.from({ length: 4 }, (_, idx) => (
          <THeader key={idx}>
            <div className={s.line}></div>
          </THeader>
        ))}
        <THeader />
      </TRow>
      {Array.from({ length: numRows }, (_, idx) => renderRow(renderCell, idx))}
    </Table>
  )
}
