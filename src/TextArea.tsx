import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  & textarea {
    border: 1px solid #585858;
    border-radius: 4px;
    width: 100%;
    font-size: large;
    padding: 0.5rem;
  }
`

export const TextArea: React.FunctionComponent<React.HTMLProps<HTMLTextAreaElement>> = ({
  ...inputProps
}) => (
  <Container>
    <textarea {...inputProps} />
  </Container>
)
