import React, { FunctionComponent, useState } from 'react'
import styled from 'styled-components'
import { ErrorIcon } from './icons/ErrorIcon'
import { SuccessIcon } from './icons/SuccessIcon'
import { TextArea } from './TextArea'

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
`

const ButtonsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  z-index: 99;
  top: -1.5rem;
  width: 100%;

  & > button {
    margin: 0;
  }
`

const Button = styled.div`
  margin: 0.2rem 0.2rem;
  cursor: pointer;
`

type Props = Omit<React.HTMLProps<HTMLTextAreaElement>, 'onChange'> & {
  isInvalid?: boolean
  onConfirm: (data: string) => void
}

export const TextAreaWithConfirmation: FunctionComponent<Props> = ({
  disabled,
  value,
  onConfirm,
  ...inputProps
}) => {
  const [currentValue, setCurrentValue] = useState<string>(`${value}`)
  const handleCancel = () => {
    setCurrentValue(`${value}`)
  }
  const handleChange = () => {
    onConfirm(currentValue)
  }
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleCancel()
    }
  }
  const showButtons = `${value}` !== currentValue

  return (
    <Container>
      <TextArea
        onKeyDown={handleKeyDown}
        disabled={disabled}
        value={currentValue}
        onChange={(event: React.FormEvent<HTMLTextAreaElement>) =>
          setCurrentValue(event.currentTarget.value)
        }
        {...inputProps}
      />
      {!disabled && showButtons && (
        <ButtonsContainer>
          <Button onClick={handleChange}>
            <SuccessIcon size="20px" />
          </Button>
          <Button onClick={handleCancel}>
            <ErrorIcon size="20px" />
          </Button>
        </ButtonsContainer>
      )}
    </Container>
  )
}
