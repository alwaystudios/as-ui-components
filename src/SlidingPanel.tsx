import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  overflow: hidden;
  position: relative;
  display: inline-block;

  .content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    box-sizing: border-box;
    transition: transform 0.3s ease;
    transform: translate(0, -100%);
    opacity: 0.8;
  }

  :hover .content {
    transform: translate(0, 0);
  }
`

type Props = {
  content: React.ReactNode
}

export const SlidingPanel: FunctionComponent<Props> = ({ children, content }) => {
  return (
    <Container>
      <div className="content">{content}</div>
      {children}
    </Container>
  )
}
