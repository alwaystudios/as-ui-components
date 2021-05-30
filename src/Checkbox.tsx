import React, { FunctionComponent } from 'react'
import shortId from 'shortid'
import styled from 'styled-components'

const Container = styled.div`
  width: fit-content;
  font-family: sans-serif;
  font-weight: 1000;
  border: 1px solid #ffffff00;
  border-radius: 5px;
  padding: 0.5rem;

  :hover {
    border: 1px solid #999999;
  }

  & label {
    margin-left: 0.2rem;
  }
`

type Props = {
  id?: string
  label?: string
  className?: string
  checked?: boolean
  disabled?: boolean
  onChange: (checked: boolean) => void
}

export const Checkbox: FunctionComponent<Props> = ({
  id,
  label,
  className,
  checked,
  disabled,
  onChange,
  ...props
}) => {
  const inputId = id || shortId()
  return (
    <Container>
      <input
        {...props}
        disabled={disabled}
        checked={Boolean(checked)}
        id={inputId}
        type="checkbox"
        onChange={() => onChange(!checked)}
      />
      <label htmlFor={inputId} className={className}>
        {label}
      </label>
    </Container>
  )
}
