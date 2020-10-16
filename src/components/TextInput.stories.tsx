import React, { useState } from 'react'
import { text, boolean, number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { TextInput } from './TextInput'

const stories = storiesOf('Text input', module)

stories.add('with interactive state - type "invalid" to show validation state', () =>
  React.createElement(() => {
    const [data, setData] = useState('something')

    return (
      <TextInput
        style={{ width: '300px' }}
        value={data}
        onChange={(event) => setData(event.currentTarget.value)}
        id={text('id', 'button-id')}
        className={text('className', '')}
        disabled={boolean('disabled', false)}
        isInvalid={data === 'invalid'}
        tabIndex={number('tabIndex', 1)}
        onClear={() => {
          setData('')
        }}
      />
    )
  }),
)

stories.add('renders with text', () => <TextInput value="some text" />)

stories.add('renders with on clear button', () => (
  <TextInput
    onClear={() => {
      console.log('clear input')
    }}
    value="some text"
  />
))

stories.add('renders as disabled', () => <TextInput disabled={true} value="some text" />)

stories.add('renders as invalid', () => <TextInput isInvalid={true} value="something is wrong" />)

stories.add('with a custom class', () => <TextInput value="custom class" className="custom" />)
