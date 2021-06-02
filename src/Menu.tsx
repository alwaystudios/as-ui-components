import React from 'react'
import styled from 'styled-components'
import { MenuOption } from './types'

const Container = styled.ul`
  margin: 0;
  padding: 0;

  & > li {
    user-select: none;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
    padding: 0.75rem;
    border-bottom: none !important;

    &:hover,
    &:focus {
      outline: none;
      background-color: lightgray;
    }
  }
`

type Props = {
  options: MenuOption[]
  handleSelection?: (event: React.MouseEvent, onClick: () => void) => void
}

const defaultHandleSelection = (event: React.MouseEvent, optionOnClick: () => void) => {
  event.preventDefault()
  optionOnClick()
}

export const Menu: React.FunctionComponent<Props> = ({
  options,
  handleSelection = defaultHandleSelection,
}) => (
  <Container>
    {options.map(({ text, onClick }) => (
      <li key={`context-menu-${text}`} onClick={(e) => handleSelection(e, onClick)}>
        {text}
      </li>
    ))}
  </Container>
)
