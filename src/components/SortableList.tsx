import React, { Children } from 'react'
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
  SortableContainerProps,
} from 'react-sortable-hoc'
import arrayMove from 'array-move'
import styled from 'styled-components'
import { ResizeIcon } from './icons/ResizeIcon'

const DragIcon = styled(ResizeIcon)`
  cursor: row-resize;
`

const Li = styled.li`
  display: flex;
  align-items: center;
`

const Div = styled.div`
  width: 100%;
`

const Handle = SortableHandle(() => <DragIcon size="20px" direction="horizontal" />)

const SortableItem = SortableElement(({ element }: any) => (
  <Li>
    <Handle />
    <Div>{element}</Div>
  </Li>
))

const Container = SortableContainer(({ children, className }: any) => {
  return <ul className={className}>{children}</ul>
})

export type SortableListProps<T> = SortableContainerProps & {
  data: T[]
  setData: (data: T[]) => void
  className?: string
}

export const SortableList: React.FunctionComponent<SortableListProps<any>> = ({
  data,
  setData,
  children,
  className = '',
  ...sortableContainerProps
}) => {
  const elements = Children.toArray(children)

  const handleSortEnd = ({ oldIndex, newIndex }: any) =>
    setData(arrayMove(data, oldIndex, newIndex))

  return (
    <Container
      className={className}
      {...sortableContainerProps}
      useDragHandle={true}
      lockAxis="y"
      lockToContainerEdges={true}
      onSortEnd={handleSortEnd}
    >
      {elements.map((element, index) => (
        <SortableItem key={index} index={index} element={element} />
      ))}
    </Container>
  )
}
