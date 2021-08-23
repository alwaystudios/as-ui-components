import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
    0% {
        transform: rotate(-180deg);
        box-shadow: inset -1px 0 0 1px currentColor;
    }
    50% {
        transform: rotate(0deg);
        box-shadow: inset -1px 0 0 1px currentColor;
    }
    100% {
        transform: rotate(180deg);
        box-shadow: inset -1px 0 0 1px currentColor;
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
    clip: rect(0, 64px, 32px, 0);
    animation: ${rotate} 1s infinite linear;
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: auto;
  z-index: 99;
  background-color: rgba(242, 242, 242, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

const LoadingContainer = (
  <Overlay className="overlay">
    <Spinner />
  </Overlay>
)

export const withLoading =
  <P extends Record<string, unknown>>(
    Component: React.ComponentType<P>,
    setPageIsLoading: () => void,
    pageIsLoading: () => boolean,
  ): React.FC<P> =>
  ({ ...props }: P) => {
    useEffect(() => {
      setPageIsLoading()
    }, [])

    return (
      <>
        {pageIsLoading() && LoadingContainer}
        <Component {...(props as P)} />
      </>
    )
  }
