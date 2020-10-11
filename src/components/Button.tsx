/* eslint no-extra-boolean-cast: 0 */
import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  display: inline-block;
  padding: 0.5rem 0.5rem;
  border: 0.15rem solid #1ea7fd;
  margin: auto;
  border-radius: 3px;
  box-sizing: border-box;
  font-family: sans-serif;
  font-weight: 1000;
  text-align: center;
  transition: all 0.2s;

  ${({ disabled }: { disabled: boolean }) =>
    disabled
      ? css`
          border: 0.1rem solid #666666;
          color: #666666;
          background-color: #cccccc;
        `
      : css`
          color: #1ea7fd;
          background-color: #ffffff;

          &:hover {
            cursor: pointer;
            color: #ffffff;
            background-color: #1ea7fd;
          }
        `}

  &:focus {
    outline: none;
    color: #ffffff;
    background-color: #1ea7fd;
  }
`

const Span = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ iconOnly }: { iconOnly: boolean }) =>
    !iconOnly &&
    css`
      margin: 0 0.8rem 0 0.8rem;
    `}

  & svg {
    height: 1rem;
    width: 1rem;

    ${({ iconOnly }: { iconOnly: boolean }) =>
      !iconOnly &&
      css`
        padding-left: 0.5rem;
      `}
    fill: currentColor;
  }
`

type Props = {
  id?: string
  className?: string
  text?: string
  isSubmit?: boolean
  disabled?: boolean
  tabIndex?: number
  icon?: ReactNode
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
  icon,
}) => (
  <StyledButton
    id={id}
    {...(tabIndex !== undefined && { tabIndex })}
    disabled={Boolean(disabled)}
    className={className}
    type={isSubmit ? 'submit' : 'button'}
    onClick={onClick}
  >
    <Span iconOnly={!Boolean(text)}>
      {text}
      {icon}
    </Span>
  </StyledButton>
)
