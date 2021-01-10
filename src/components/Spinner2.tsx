import React, { FunctionComponent } from 'react'
import styled, { keyframes } from 'styled-components'

type Props = {
  isLoading?: boolean
}

const orbit1 = keyframes`
    0% {
      transform: translateX(-120%) rotate(180deg);
    }
    30% {
      transform: translateX(-120%) rotate(0deg);
    }
    70% {
      transform: translateX(-120%) rotate(0deg);
    }
    100% {
      transform: translateX(-120%) rotate(-180deg);
    }
`

const orbit2 = keyframes`
    0% {
      transform: translateX(120%) rotate(180deg);
    }
    30% {
      transform: translateX(120%) rotate(0deg);
    }
    70% {
      transform: translateX(120%) rotate(0deg);
    }
    100% {
      transform: translateX(120%) rotate(-180deg);
    }
`

const Spinner = styled.div`
  position: relative;
  margin: 32px;
  display: inline-block;
  vertical-align: middle;
  width: 16px;
  height: 16px;
  border-radius: 16px;
  background-color: #323b40;

  ::before,
  ::after {
    position: absolute;
    content: '';
    display: inline-block;
    veritcal-align: middle;
    height: 16px;
    width: 16px;
    border-radius: 16px;
    background-color: inherit;
  }

  ::before {
    transform: translateX(-120%);
    transform-origin: 32px 50%;
    animation: ${orbit1} 1s infinite linear;
  }

  ::after {
    transform: translateX(120%);
    transform-origin: -16px 50%;
    animation: ${orbit2} 1s infinite linear;
  }
`

export const Spinner2: FunctionComponent<Props> = ({ isLoading = true, children }) =>
  isLoading ? <Spinner /> : <>{children}</>
