import React, { FunctionComponent } from 'react'
import styled, { keyframes } from 'styled-components'

type Props = {
  isLoading?: boolean
}

const rotate = keyframes`
    0% {
        transform: rotate(-180deg);
        box-shadow: inset -5px 0 0 5px currentColor;
    }
    50% {
        transform: rotate(0deg);
        box-shadow: inset -1px 0 0 1px currentColor;
    }
    100% {
        transform: rotate(180deg);
        box-shadow: inset -5px 0 0 5px currentColor;
    }
`

const Spinner = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 64px;
  height: 64px;
  border-radius: 64px;

  ::before {
    position: absolute;
    content: '';
    width: 64px;
    height: 64px;
    border-radius: 64px;
    color: #323b40;
    box-shadow: inset -5px 0 0 5px currentColor;
    clip: rect(0, 64px, 32px, 0);
    animation: ${rotate} 1s infinite linear;
  }
`

export const Spinner1: FunctionComponent<Props> = ({ isLoading = true, children }) =>
  isLoading ? <Spinner /> : <>{children}</>
