import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.li<{ selected: boolean }>`
  ${({ selected }) => css`
    cursor: pointer;
    user-select: none;
    padding: 0.25rem 2rem 0.25rem 0.25rem;
    border-bottom: ${selected ? '3px solid blue' : '3px solid grey'};
    margin: 0 0.125rem;
    font-weight: ${selected ? 'bold' : 'normal'};

    :hover {
      border-bottom: ${selected ? '3px solid blue' : '3px solid #33ccff'};
    }
  `}
`

type ComponentProps = {
  children: React.ReactNode
  title: string
  isActive?: boolean
  tabIndex?: number
  onClick?(index: number): void
}

export const Tab = ({ title, isActive = false, tabIndex = 0, onClick }: ComponentProps) => {
  return (
    <Container
      selected={isActive}
      onClick={(event) => {
        event.preventDefault()
        onClick && onClick(tabIndex)
      }}
    >
      {title}
    </Container>
  )
}
