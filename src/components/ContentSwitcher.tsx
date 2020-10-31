import React, { SyntheticEvent } from 'react'
import styled from 'styled-components'
import './ContentSwitcher.css'

type ComponentProps = {
  options: string[]
  onChange: (options: string) => void
  disabled?: boolean
  selectedOption?: string
  className?: string
}

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: auto;
  width: fit-content;
`

const StyledButton = styled.button`
  width: auto;
`

const Label = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`

export const ContentSwitcher = ({
  options,
  onChange,
  disabled,
  selectedOption,
  className = '',
}: ComponentProps) => {
  const handleOnChange = (event: React.SyntheticEvent<HTMLButtonElement>) => (option: string) => {
    event.preventDefault()
    onChange(option)
  }

  return (
    <Container data-content-switcher className={className}>
      {options.map((options) => (
        <StyledButton
          className={`bx--content-switcher-btn ${
            options === selectedOption && 'bx--content-switcher--selected'
          }`}
          role="tab"
          key={options}
          onClick={(event: SyntheticEvent<HTMLButtonElement>) => handleOnChange(event)(options)}
          aria-selected={options === selectedOption}
          disabled={disabled}
        >
          <Label>{options}</Label>
        </StyledButton>
      ))}
    </Container>
  )
}
