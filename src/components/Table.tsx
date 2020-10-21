import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

export const TableHeader: FunctionComponent<{ title: string }> = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    {children}
  </div>
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
