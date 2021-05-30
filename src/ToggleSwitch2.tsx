import React, { FunctionComponent } from 'react'
import shortId from 'shortid'
import styled from 'styled-components'

type Props = {
  id?: string
  checked?: boolean
  text: string
  onClick: (event: React.MouseEvent) => void
}

const Container = styled.div`
  display: inline-block;

  input {
    display: none;
  }

  span {
    position: relative;
    display: inline-block;
    text-transform: uppercase;
    background: white;
    color: #aaa;
    border: solid 1px #ccc;
    padding: 5px 10px 4px 30px;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  span::before {
    position: absolute;
    top: 9px;
    left: 10px;
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #ccc;
    content: '';
    transition: all 0.3s ease;
    border-radius: 100%;
  }

  input:checked + span {
    background: #00b3b4;
    border-color: #00b3b4;
    color: white;
  }

  input:checked + span::before {
    background-color: white;
  }
`

export const ToggleSwitch2: FunctionComponent<Props> = ({ id, checked, text, onClick }) => {
  const componentId = id || shortId()
  return (
    <Container>
      <label htmlFor={componentId}>
        <input type="checkbox" checked={Boolean(checked)} onClick={onClick} id={componentId} />
        <span>{text}</span>
      </label>
    </Container>
  )
}
