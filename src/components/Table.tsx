import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

export const Table: FunctionComponent<{ className?: string }> = ({ className, children }) => (
  <table className={className}>{children}</table>
)

export const TableBody: FunctionComponent<{ className?: string }> = ({ className, children }) => (
  <tbody className={className}>{children}</tbody>
)

export const TableHeader: FunctionComponent<{ className?: string }> = ({ className, children }) => (
  <thead className={className}>{children}</thead>
)

const Row = styled.tr`
  && {
    height: 3rem;
  }
`

type TableRowProps = {
  selected?: boolean // todo: highlight a selected row
  expanded?: boolean
  expandableChildren?: React.ReactNode
  children: React.ReactNode
}

export const TableRow: FunctionComponent<TableRowProps> = ({
  // selected = false,
  expanded = false,
  expandableChildren,
  children,
}) => (
  <>
    <Row>{children}</Row>
    {expanded && expandableChildren && <Row>{expandableChildren}</Row>}
  </>
)

const StickyTh = styled.th`
  position: sticky !important;
  top: 0;
  z-index: 1;
`

export const TableHeadCell = ({ text }: { text: string }): JSX.Element => (
  <StickyTh>{text}</StickyTh>
)

type TableCellProps = {
  canWrap?: boolean
  className?: string
}

const TdNoWrap = styled.td`
  white-space: nowrap;
`

export const TableCell: FunctionComponent<TableCellProps> = ({ canWrap = true, ...props }) =>
  canWrap ? <td {...props} /> : <TdNoWrap {...props} />
