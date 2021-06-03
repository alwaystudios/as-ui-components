import React from 'react'
import styled, { css } from 'styled-components'

const StyledPill = styled.div<{ color: string; backgroundColor: string }>`
  ${({ color, backgroundColor }) => css`
    display: flex;
    line-height: 1rem;
    align-items: center;
    max-width: fit-content;
    padding: 0.25rem 0.75rem;
    background-color: ${backgroundColor};
    color: ${color};
    border-radius: 15px;
  `}
`

type Props = {
  label: string
  color: string
  backgroundColor: string
}

export const Pill: React.FC<Props> = ({ label, color, backgroundColor }) => (
  <StyledPill color={color} backgroundColor={backgroundColor}>
    {label}
  </StyledPill>
)
