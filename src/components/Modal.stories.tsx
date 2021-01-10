import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import { Modal } from './Modal'

const stories = storiesOf('Modal', module)

stories.add('Modal', () =>
  React.createElement(() => {
    const [open, setOpen] = useState(false)

    const onClick = () => {
      setOpen(!open)
    }

    const close = () => {
      setOpen(false)
    }

    return (
      <>
        <div style={{ marginBottom: '20px' }}>Modal is open?: {JSON.stringify(open)}</div>
        <button onClick={onClick}>open modal</button>
        <Modal show={open} closeModal={close}>
          <div
            style={{
              height: '200px',
              paddingLeft: '20px',
              paddingRight: '20px',
              overflowY: 'auto',
            }}
          >
            <h4>Modal</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, expedita magni
              inventore sed eligendi aperiam ab omnis voluptates aut sint soluta fuga ipsum
              exercitationem, reiciendis debitis? Iusto ea sunt error?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, expedita magni
              inventore sed eligendi aperiam ab omnis voluptates aut sint soluta fuga ipsum
              exercitationem, reiciendis debitis? Iusto ea sunt error?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, expedita magni
              inventore sed eligendi aperiam ab omnis voluptates aut sint soluta fuga ipsum
              exercitationem, reiciendis debitis? Iusto ea sunt error?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, expedita magni
              inventore sed eligendi aperiam ab omnis voluptates aut sint soluta fuga ipsum
              exercitationem, reiciendis debitis? Iusto ea sunt error?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, expedita magni
              inventore sed eligendi aperiam ab omnis voluptates aut sint soluta fuga ipsum
              exercitationem, reiciendis debitis? Iusto ea sunt error?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, expedita magni
              inventore sed eligendi aperiam ab omnis voluptates aut sint soluta fuga ipsum
              exercitationem, reiciendis debitis? Iusto ea sunt error?
            </p>
          </div>
        </Modal>
      </>
    )
  }),
)
