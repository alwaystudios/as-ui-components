import React, { useEffect, useState } from 'react'
import { TextArea } from './TextArea'
import styled, { css } from 'styled-components'
import { debounce } from '@alwaystudios/as-utils'
import { slice } from 'ramda'
import { Menu } from './Menu'

const Container = styled.section<{ coordinates: Coordinates }>`
  ${({ coordinates: { x, y } }) =>
    css`
      left: ${x}px;
      top: ${y}px;
    `}
  position: fixed;
  z-index: 999;
  background: white;
  box-shadow: 0px 2px 10px #999999;
`

type Props = {
  value: string
  setValue: (text: string) => void
  getSuggestions: (text: string) => Promise<string[]>
} & React.HTMLProps<HTMLTextAreaElement>

export const TextAreaWithSuggestions: React.FunctionComponent<Props> = ({
  getSuggestions,
  setValue,
  value,
  ...inputProps
}) => {
  const [coordinates, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 })
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [inFlight, setInFlight] = useState(false)
  const [wasSuggestion, setWasSuggestion] = useState(false)

  const getCurrentLine = () => {
    const lines = value.split('\n')
    const lastLineIndex = lines.length - 1

    return lines[lastLineIndex]
  }

  const appendSuggestion = (suggestion: string) => {
    const lines = value.split('\n')
    const lastLineIndex = lines.length - 1
    const previousLines = slice(0, lastLineIndex, lines)
    const newLines = [...previousLines, suggestion]
    setValue(newLines.join('\n'))
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape' || event.key === 'Backspace') {
      setSuggestions([])
    }
  }

  const handleOnChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const target = event.target as HTMLTextAreaElement
    const val = target.value
    const lines = val.split('\n')
    const lastLineIndex = lines.length - 1
    const rect = target.getBoundingClientRect()
    const xOffset = lines[lastLineIndex].length * 6
    setCoordinates({ x: rect.x + xOffset, y: rect.y + (lastLineIndex + 1) * 30 })
    setValue(val)
    setWasSuggestion(false)
  }

  const manageSuggestions = debounce(() => {
    if (wasSuggestion || !getCurrentLine() || inFlight) {
      return
    }
    setWasSuggestion(false)
    setInFlight(true)
    const keywords = getCurrentLine()
    getSuggestions(keywords)
      .then((values) => setSuggestions(values))
      .finally(() => setInFlight(false))
  }, 200)

  useEffect(() => {
    manageSuggestions()
  }, [value])

  const options = suggestions.map((text) => ({ text, onClick: () => appendSuggestion(text) }))

  const handleSelection = (event: React.MouseEvent, onClick: () => void) => {
    event && event.preventDefault()
    onClick && onClick()
    setSuggestions([])
    setWasSuggestion(true)
  }

  return (
    <>
      <Container coordinates={coordinates}>
        <Menu options={options} handleSelection={handleSelection} />
      </Container>
      <TextArea onKeyDown={handleKeyDown} value={value} onChange={handleOnChange} {...inputProps} />
    </>
  )
}
