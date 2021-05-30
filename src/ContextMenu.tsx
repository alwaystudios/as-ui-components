import React, { useEffect, useState, useCallback } from 'react'
import styled, { css } from 'styled-components'

const MenuOption = styled.div`
  display: flex;
  background-color: transparent;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  padding: 0;
  transition: background-color 110ms cubic-bezier(0, 0, 0.38, 0.9);

  :hover {
    box-sizing: border-box;
    border: 1px solid #999999;
    cursor: pointer;
  }
`

const Button = styled.button`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.125rem;
  letter-spacing: 0.16px;
  outline: 2px solid transparent;
  outline-offset: -2px;
  font-weight: 400;
  width: 100%;
  height: 100%;
  border: none;
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  text-align: left;
  padding: 0 1rem;
  cursor: pointer;
  color: #393939;
  max-width: 11.25rem;
`

const Span = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

type Coordinates = {
  x: number
  y: number
}

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

export type ContextMenuOption = {
  text: string
  onClick: () => void
}

export type ContextMenuProps = {
  options: ContextMenuOption[]
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
  })

  useEffect(() => {
    if (isActiveMenu !== undefined) {
      setVisible(isActiveMenu)
    }
  }, [isActiveMenu])

  const handleOptionClick = (event: React.MouseEvent, optionOnClick: () => void) => {
    event.preventDefault()
    optionOnClick()
  }

  return (
    <>
      <div onContextMenu={handleRightClick}>{children}</div>
      {visible && (
        <Container coordinates={coordinates}>
          <div className="context-menu" style={{ display: 'flex', flexDirection: 'column' }}>
            {options.map(({ text, onClick }) => (
              <MenuOption
                className="context-menu-option"
                key={`context-menu-${text}`}
                onClick={(e) => handleOptionClick(e, onClick)}
              >
                <Button>
                  <Span>{text}</Span>
                </Button>
              </MenuOption>
            ))}
          </div>
        </Container>
      )}
    </>
  )
}
