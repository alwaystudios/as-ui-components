import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import { noop } from '../noop'
import { Checkbox } from './Checkbox'

const stories = storiesOf('Checkbox', module)

stories.add('renders', () => (
  <Checkbox
    checked={boolean('checked', true)}
    label={text('label', 'my checkbox')}
    disabled={boolean('disabled', false)}
    onChange={noop}
  />
))

stories.add('with state', () =>
  React.createElement(() => {
    const [checked, setChecked] = useState<boolean>(false)
    return (
      <Checkbox
        label={`isChecked?=${checked}`}
        onChange={setChecked}
        checked={checked}
        disabled={boolean('disabled', false)}
      />
    )
  }),
)
