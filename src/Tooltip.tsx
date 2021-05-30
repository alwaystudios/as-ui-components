import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

type Props = {
  value: string
}

const Container = styled.div`
  position: relative;
  display: inline-block;

  :hover .tooltip::before,
  :hover .tooltip::after {
    display: inline-block;
  }

  .tooltip::before {
    display: none;
    content: attr(title);
    position: absolute;
    z-index: 2;
    padding: 10px;
    font-size: 0.8em;
    line-height: 1.4em;
    border-radis: 5px;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    border-radius: 5px;
    left: 50%;
    bottom: calc(100% + 4px);
    transform: translateX(-50%);
  }

  .tooltip::after {
    display: none;
    position: absolute;
    z-index: 1;
    content: '';
    width: 0;
    height: 0;
    border: 5px solid transparent;
    bottom: calc(100% - 6px);
    left: 50%;
    transform: translateX(-50%);
    border-top-color: rgba(0, 0, 0, 0.8);
  }
`

export const Tooltop: FunctionComponent<Props> = ({ value, children }) => {
  return (
    <Container>
      <span className="tooltip" title={value} />
      {children}
    </Container>
  )
}
