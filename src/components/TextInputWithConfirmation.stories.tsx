import React, { useState } from 'react'
import { text, boolean, number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { TextInputWithConfirmation } from './TextInputWithConfirmation'
import { noop } from '../noop'

const stories = storiesOf('Text input with confirmation', module)

stories.add('with interactive state ', () =>
  React.createElement(() => {
    const [data, setData] = useState('something')

    return (
      <>
        Current data={data}
        <TextInputWithConfirmation
          style={{ width: '300px' }}
          value={data}
          onConfirm={setData}
          id={text('id', 'button-id')}
          className={text('className', '')}
          disabled={boolean('disabled', false)}
          isInvalid={data === 'invalid'}
          tabIndex={number('tabIndex', 1)}
        />
      </>
    )
  }),
)

stories.add('renders with text', () => (
  <TextInputWithConfirmation value="some text" onConfirm={noop} />
))
