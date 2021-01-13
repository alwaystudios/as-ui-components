import React, { FunctionComponent, useState, useEffect } from 'react'
import styled from 'styled-components'
import { DraggableCore, DraggableEventHandler } from 'react-draggable'
import { useWindow } from '../hooks/useWindow'

const Wrapper = styled.div`
  position: sticky;
  height: 100%;
  border-left: 1px solid #e0e0e0;
  flex-grow: 0;
  flex-shrink: 0;
`

const Handle = styled.div<{ isDragging: boolean }>`
  position: absolute;
  height: 100%;
  width: 6px;
  cursor: ew-resize;
  background-color: black;
  opacity: ${({ isDragging }) => (isDragging ? '0.2' : '0')};
`

export const ResizablePanel: FunctionComponent = ({ children }) => {
  const window = useWindow()
  const getMaxWidth = () => (window ? window.innerWidth - 300 : 200)
  const getDefaultWidth = () => getMaxWidth() || (window && 0.4 * window.innerWidth) || 150

  const [isDragging, setIsDragging] = useState(false)
  const [offsetX, setOffsetX] = useState(0)
  const [wrapperWidth, setWrapperWidth] = useState(getDefaultWidth())

  const onDrag: DraggableEventHandler = (_: any, data) => {
    setOffsetX(offsetX + data.deltaX)
  }

  const onStop = () => {
    const newWidth = Math.max(100, Math.min(getMaxWidth(), wrapperWidth - offsetX))
    setOffsetX(0)
    setWrapperWidth(newWidth)
    setIsDragging(false)
  }

  useEffect(() => {
    window && window.addEventListener('resize', onStop)
    return () => window && window.removeEventListener('resize', onStop)
  }, [wrapperWidth])

  return (
    <Wrapper style={{ width: wrapperWidth }}>
      <DraggableCore onStart={() => setIsDragging(true)} onStop={onStop} onDrag={onDrag}>
        <Handle isDragging={isDragging} style={{ left: offsetX }} />
      </DraggableCore>
      {children}
    </Wrapper>
  )
}
