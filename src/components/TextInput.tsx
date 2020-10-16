import React, { FunctionComponent, useRef } from 'react'
import styled, { css } from 'styled-components'
import { ErrorIcon } from './icons/ErrorIcon'
import { LockIcon } from './icons/LockIcon'
import { WarningIcon } from './icons/WarningIcon'

const Container = styled.div`
  display: flex;

  & input {
    border: 1px solid #585858;

    ${({ isInvalid }: { isInvalid: boolean }) =>
      isInvalid &&
      css`
        color: #ff0000;
        border: 1px solid #ff0000;
      `}

    width: 100%;
    font-size: large;
    text-indent: 0.3rem;
    height: 1.5rem;
    padding-top: 0.3rem;
    padding-bottom: 0.2rem;
  }

  & input:focus {
    outline: none;
  }

  .clickable {
    cursor: pointer;
  }

  & span > svg {
    position: relative;
    margin-left: -1.8rem;
    top: 0.5rem;
  }
`

type Props = {
  isInvalid?: boolean
  onClear?: () => void
} & React.HTMLProps<HTMLInputElement>

export const TextInput: FunctionComponent<Props> = ({
  disabled,
  onClear,
  isInvalid,
  className,
  ...inputProps
}) => {
  const inputRef = useRef(null)
  const handleClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;(inputRef.current as any)!.focus()
    onClear && onClear()
  }
  const icon = disabled ? (
    <span>
      <LockIcon size="21px" />
    </span>
  ) : isInvalid ? (
    <span className="clickable" onClick={handleClick}>
      <WarningIcon size="21px" />
    </span>
  ) : onClear ? (
    <span className="clickable" onClick={handleClick}>
      <ErrorIcon size="21px" />
    </span>
  ) : null
  const _disabled = Boolean(disabled)
  const _invalid = Boolean(isInvalid)
  return (
    <Container isInvalid={_invalid}>
      <input
        ref={inputRef}
        type="text"
        className={className}
        disabled={_disabled}
        {...inputProps}
      />
      {icon}
    </Container>
  )
}
