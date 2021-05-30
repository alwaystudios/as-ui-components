import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 20px 40px;
  font-size: 1.5rem;
  background-color: #00b3b4;
  border: 1px solid #555;
  color: white;
  transition: all ease 0.3s;
  border-radius: 5px;
  cursor: pointer;

  ::after {
    position: absolute;
    top: calc(50% - 0.6em);
    right: 0.2em;
    content: '»';
    transition: all ease 0.3s;
    opacity: 0;
  }

  :focus {
    outline: none;
  }

  :hover {
    padding: 20px 60px 20px 20px;
  }

  :hover::after {
    right: 1.2rem;
    opacity: 1;
  }
`

type Props = {
  id?: string
  text: string
  onClick: (event: React.MouseEvent) => void
}

export const AnimatedButton: FunctionComponent<Props> = ({ text, ...props }) => {
  return <StyledButton {...props}>{text}</StyledButton>
}
