import React, { useState } from 'react'
import { text, boolean, number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { TextAreaWithConfirmation } from './TextAreaWithConfirmation'
import { noop } from '@alwaystudios/as-utils'

const stories = storiesOf('Text area with confirmation', module)

stories.add('with interactive state ', () =>
  React.createElement(() => {
    const [data, setData] = useState('something')

    return (
      <>
        Current data={data}
        <TextAreaWithConfirmation
          style={{ width: '300px' }}
          rows={10}
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
  <TextAreaWithConfirmation value="some text" onConfirm={noop} />
))
