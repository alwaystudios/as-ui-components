import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from './Button'
import { boolean, number, text } from '@storybook/addon-knobs'

const stories = storiesOf('Button', module)

stories.add('with react state', () =>
  React.createElement(() => {
    const [counter, setcounter] = useState(0)

    const onClick = () => {
      setcounter(counter + 1)
    }

    return (
      <div style={{ margin: '20px' }}>
        <p>Click counter: {counter}</p>
        <Button
          onClick={onClick}
          id={text('id', 'button-id')}
          text={text('text', 'Save')}
          className={text('className', 'some-custom-class')}
          isSubmit={boolean('isSubmit', false)}
          disabled={boolean('disabled', false)}
          tabIndex={number('tabIndex', 1)}
        />
      </div>
    )
  }),
)
