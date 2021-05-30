import React, { FunctionComponent } from 'react'
import shortid from 'shortid'
import styled from 'styled-components'

type Props = {
  selected: string
  setSelected: (title: string) => void
  title: string
  height?: string
}

const Container = styled.div<{ height: string }>`
  display: block;

  .accordion__content {
    display: block;
    padding: 0;
    height: 0;
    overflow: hidden;
    transition: height 0.5s ease, padding 0.3s linear;
  }

  input.accordion__trigger {
    display: none;
  }

  input:checked ~ .accordion__content {
    height: ${({ height }) => height};
    overflow: scroll;
  }

  .accordion__trigger {
    text-decoration: none;
  }

  .title {
    cursor: pointer;
    position: relative;
    display: block;
    margin: 0;
    padding: 10px;
    font-size: 1em;
    background: #00b3b4;
    color: white;
    border: solid 1px #379aa4;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5) inset, 0 -1px 0 rgba(255, 255, 255, 0.2) inset,
      0 4px 0 #338a94, 0 2px 2px rgba(0, 0, 0, 0.5);
  }

  .title:hover {
    background-color: #0bbfc0;
  }

  .title::after {
    position: absolute;
    content: '';
    top: calc(50%);
    right: 20px;
    width: 7px;
    height: 7px;
    border-left: 2px solid white;
    border-bottom: 2px solid white;
    transform: rotate(135deg);
    transition: all 0.5s ease;
  }

  input:checked ~ label > .title::after {
    top: calc(50% - 5px);
    transform: rotate(-45deg);
  }
`

export const AccordionItem: FunctionComponent<Props> = ({
  selected,
  setSelected,
  title,
  height = '200px',
  children,
}) => {
  const onClick = () => {
    if (selected === title) {
      setSelected('')
      return
    }
    setSelected(title)
  }

  const id = shortid()
  return (
    <Container height={height}>
      <input
        id={id}
        type="checkbox"
        checked={title === selected}
        onClick={onClick}
        className="accordion__trigger"
      />
      <label htmlFor={id}>
        <div className="title">{title}</div>
      </label>
      <div id="tab1" className="accordion__content">
        {children}
      </div>
    </Container>
  )
}
