import React, { FunctionComponent } from 'react'
import shortId from 'shortid'
import styled from 'styled-components'

type Props = {
  id?: string
  checked?: boolean
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
    font-size: 1rem;
    line-height: 20px;
    text-transform: uppercase;
    background-color: #f2395a;
    border: solid 1px #b02c44;
    border-radius: 5px;
    color: white;
    width: 80px;
    height: 28px;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  span::before {
    position: absolute;
    top: 5px;
    left: 40px;
    content: 'off';
    display: inline-block;
    background-color: white;
    color: #f2395a;
    height: 18px;
    padding: 0 3px;
    transition: all 0.3s ease;
    border-radius: 5px;
  }

  input:checked + span {
    background-color: #00b3b4;
    border: solid 1px #0a5757;
  }

  input:checked + span::before {
    content: 'on';
    left: 5px;
    color: #00b3b4;
  }
`

export const ToggleSwitch1: FunctionComponent<Props> = ({ id, checked, onClick }) => {
  const componentId = id || shortId()
  return (
    <Container>
      <label htmlFor={componentId}>
        <input type="checkbox" checked={Boolean(checked)} onClick={onClick} id={componentId} />
        <span />
      </label>
    </Container>
  )
}
