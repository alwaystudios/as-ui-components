import React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  display: inline-block;
  padding: 0.5rem 1.2rem;
  border: 0.1rem solid #cccccc;
  margin: auto;
  border-radius: 3px;
  box-sizing: border-box;
  font-family: sans-serif;
  font-weight: 1000;

  text-align: center;
  transition: all 0.5s;

  ${({ disabled }: { disabled: boolean }) =>
    disabled
      ? css`
          border: 0.1rem solid #999999;
          color: #666666;
          background-color: #cccccc;
        `
      : css`
          color: #ffffff;
          background-color: #69bff5;

          &:hover {
            cursor: pointer;
            border: 0.1rem solid #333333;
            background-color: #1ea7fd;
          }
        `}

  &:focus {
    outline: none;
    border: 0.1rem solid #333333;
    background-color: #1ea7fd;
  }

  @media all and (max-width: 30em) {
    display: block;
    margin: 0.4em auto;
  }
`

type Props = {
  id?: string
  className?: string
  text: string
  isSubmit?: boolean
  disabled?: boolean
  tabIndex?: number
  onClick: (event: React.MouseEvent) => void
}

export const Button: React.FunctionComponent<Props> = ({
  onClick,
  text,
  id,
  className,
  isSubmit,
  disabled,
  tabIndex,
}) => {
  return (
    <StyledButton
      id={id}
      {...(tabIndex !== undefined && { tabIndex })}
      disabled={Boolean(disabled)}
      className={className}
      type={isSubmit ? 'submit' : 'button'}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  )
}
