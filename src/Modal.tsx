import React, { FunctionComponent } from 'react'
import shortid from 'shortid'
import styled from 'styled-components'

type Props = {
  show: boolean
  closeModal: () => void
}

const Container = styled.div`
  .modal-close-button {
    text-transform: uppercase;
    display: inline-block;
    padding: 0.35em 1.2em;
    border: 0.1em solid #1ea7fd;
    margin: 0 0.3em 0.3em 0;
    border-radius: 0.12em;
    box-sizing: border-box;
    text-decoration: none;
    font-weight: 300;
    color: #1ea7fd;
    text-align: center;
    transition: all 0.2s;
  }

  .modal-close-button:hover {
    color: #fff;
    background-color: #1ea7fd;
    cursor: pointer;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background: #000;
    pointer-events: none;
    opacity: 0;
    transform: scale(0.5);
  }

  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 100;
    transform: translate(-50%, -50%) scale(0.5);
    width: 100%;
    max-width: 640px;
    pointer-events: none;
    opacity: 0;
  }

  .overlay-close-action {
    position: fixed;
    top: 5px;
    left: 10px;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
  }
`

const Cb = styled.input`
  display: none;

  :checked ~ .overlay {
    pointer-events: auto;
    opacity: 0.9;
    transform: scale(1);
    transition: transform 0.5s ease, opacity 0.5s ease;
  }

  :checked ~ .modal {
    pointer-events: auto;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    transition: transform 0.5s ease, opacity 0.5s ease;
    transition-delay: 0.1s;
    background: white;
  }
`

export const Modal: FunctionComponent<Props> = ({ show = false, children, closeModal }) => {
  const id = shortid()
  return (
    <Container>
      <Cb id={id} type="checkbox" checked={Boolean(show)} onClick={closeModal} />
      <div className="modal">
        {children}
        <label className="modal-close-button" htmlFor={id}>
          <a className="modal-close-button-theme">close</a>
        </label>
      </div>
      <div className="overlay">
        <span className="overlay-close-action" onClick={closeModal}>
          &#10006;
        </span>
      </div>
    </Container>
  )
}
