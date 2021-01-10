import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  display: block;
  background-color: white;
  border: solid 1px #e0e0e0;
`

export const Accordion: FunctionComponent = ({ children }) => {
  return <Container>{children}</Container>
}
