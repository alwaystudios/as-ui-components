import React, { FC, useState } from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  display: inline-block;
  cursor: pointer;
  margin: 0;
  padding: 0;

  background: transparent;
  border: 0.25rem solid black;
  border-radius: 0.25rem;

  .line {
    transition: y 300ms ease-in 300ms, rotate 300ms ease-in, opacity 0ms 300ms;
    transform-origin: center;
  }

  :has(+ input:checked) .line {
    transition: y 300ms ease-in, rotate 300ms ease-in 300ms, opacity 0ms 300ms;
    transform-origin: center;
  }

  :has(+ input:checked) :is(.top, .bottom) {
    y: 45;
  }

  :has(+ input:checked) :is(.top) {
    rotate: 45deg;
  }

  :has(+ input:checked) :is(.bottom) {
    rotate: -45deg;
  }

  :has(+ input:checked) :is(.middle) {
    opacity: 0;
  }
`

const HiddenInput = styled.input`
  appearance: none;
`

type Props = {
  size?: number
  expanded?: boolean
}

export const Hamburger1: FC<Props> = ({ expanded = false, size = 250 }) => {
  const [isExpanded, setExpanded] = useState(expanded)

  console.log(111, isExpanded)

  return (
    <>
      <Svg
        aria-controls="primary-navigation"
        aria-expanded={isExpanded}
        viewBox="0 0 100 100"
        width={size}
        onClick={() => setExpanded(!isExpanded)}
      >
        <rect className="line top" width="80" height="10" x="10" y="25" rx="5" />
        <rect className="line middle" width="80" height="10" x="10" y="45" rx="5" />
        <rect className="line bottom" width="80" height="10" x="10" y="65" rx="5" />
      </Svg>
      <HiddenInput type="checkbox" checked={isExpanded} />
    </>
  )
}
