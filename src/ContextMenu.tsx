import React, { useEffect, useState, useCallback } from 'react'
import styled, { css } from 'styled-components'
import { Menu } from './Menu'

const Container = styled.div<{ coordinates: Coordinates }>`
  ${({ coordinates: { x, y } }) =>
    css`
      left: ${x}px;
      top: ${y}px;
    `}
  position: fixed;
  z-index: 999;
  background: white;
  box-shadow: 0px 2px 10px #999999;
`

export type ContextMenuProps = {
  options: MenuOption[]
  isActiveMenu?: boolean
}

export const ContextMenu: React.FunctionComponent<ContextMenuProps> = ({
  children,
  options,
  isActiveMenu,
}) => {
  const [visible, setVisible] = useState(false)
  const [coordinates, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 })
  const _window = typeof window !== 'undefined' ? window : undefined
  const _document = _window!.document!

  const handleRightClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault()
      setVisible(true)
      setCoordinates({ x: event.clientX, y: event.clientY })
    },
    [setVisible, setCoordinates],
  )

  const hideMenu = useCallback(() => {
    setVisible(false)
  }, [setVisible])

  useEffect(() => {
    _document.addEventListener('click', hideMenu)
    _document.addEventListener('scroll', hideMenu)
    return () => {
      _document.removeEventListener('click', hideMenu)
      _document.removeEventListener('scroll', hideMenu)
    }
  }, [])

  useEffect(() => {
    if (isActiveMenu !== undefined) {
      setVisible(isActiveMenu)
    }
  }, [isActiveMenu])

  return (
    <>
      <div className="context-menu" onContextMenu={handleRightClick}>
        {children}
      </div>
      {visible && (
        <Container coordinates={coordinates}>
          <Menu options={options} />
        </Container>
      )}
    </>
  )
}
