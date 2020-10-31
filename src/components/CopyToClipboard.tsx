import React from 'react'
import styled from 'styled-components'
import copy from 'copy-to-clipboard'
import { CopyIcon } from './icons/CopyIcon'

const Container = styled.span`
  cursor: pointer;
`

type ComponentProps = {
  text: string
}

export const CopyToClipboard: React.FunctionComponent<ComponentProps> = ({ text }) => {
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault()
    copy(text)
  }

  return (
    <Container onClick={handleClick}>
      <CopyIcon size="40px" />
    </Container>
  )
}
