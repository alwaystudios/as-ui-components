import React, { FC, useState } from 'react'
import styled from 'styled-components'

const Container = styled.article<{ maxLines: number; lineHeight: number }>`
  --max-lines: ${({ maxLines }) => maxLines};
  --line-height: ${({ lineHeight }) => lineHeight};

  padding: 1rem;
  border: 1px solid black;
  border-radius: 0.25rem;

  h2,
  p {
    margin: 0;
  }

  h2 {
    margin-bottom: 1rem;
  }

  p {
    overflow: hidden;
    max-height: calc(var(--max-lines) * 1rem * var(--line-height));
    line-height: var(--line-height);
    position: relative;
  }

  p:has(+ input:not(:checked))::before {
    content: '';
    position: absolute;
    height: calc(1em * var(--line-height));
    width: 100%;
    bottom: 0;
    pointer-events: none;
    background: linear-gradient(to bottom, transparent, white);
  }

  input {
    appearance: none;
    border: 1px solid black;
    border-radius: 0.25rem;
    padding: 0.5rem;
    cursor: pointer;
    margin-top: 1rem;
  }

  input:hover {
    background-color: #ccc;
  }

  input::before {
    content: 'Expand';
  }

  input:checked::before {
    content: 'Collapse';
  }

  p:has(+ input:checked) {
    max-height: none;
  }
`

type Props = {
  title: string
  text: string
  expanded?: boolean
  maxLines?: number
  lineHeight?: number
}

export const ExpandingPanel: FC<Props> = ({
  title,
  text,
  expanded = false,
  maxLines = 5,
  lineHeight = 1.4,
}) => {
  const [checked, setChecked] = useState(expanded)

  return (
    <Container maxLines={maxLines} lineHeight={lineHeight}>
      <h2>{title}</h2>
      <p>{text}</p>
      <input type="checkbox" checked={checked} onClick={() => setChecked(!checked)} />
    </Container>
  )
}
