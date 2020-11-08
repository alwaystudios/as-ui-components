import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from './Button'
import { boolean, number, text } from '@storybook/addon-knobs'
import { AlarmIcon } from './icons/AlarmIcon'
import { noop } from '@alwaystudios/as-utils'

const stories = storiesOf('Button', module)

const icon = <AlarmIcon />

stories.add('text only', () => (
  <Button
    onClick={noop}
    id={text('id', 'button-id')}
    text={text('text', 'Save')}
    className={text('className', '')}
    isSubmit={boolean('isSubmit', false)}
    disabled={boolean('disabled', false)}
    tabIndex={number('tabIndex', 1)}
  />
))

stories.add('text with icon', () => (
  <Button
    icon={icon}
    onClick={noop}
    id={text('id', 'button-id')}
    text={text('text', 'Save')}
    className={text('className', '')}
    isSubmit={boolean('isSubmit', false)}
    disabled={boolean('disabled', false)}
    tabIndex={number('tabIndex', 1)}
  />
))

stories.add('icon only', () => (
  <Button
    icon={icon}
    onClick={noop}
    id={text('id', 'button-id')}
    className={text('className', '')}
    isSubmit={boolean('isSubmit', false)}
    disabled={boolean('disabled', false)}
    tabIndex={number('tabIndex', 1)}
  />
))

stories.add('with interactive state', () =>
  React.createElement(() => {
    const [counter, setCounter] = useState(0)

    const onClick = () => {
      setCounter(counter + 1)
    }

    return (
      <>
        <p>Click counter: {counter}</p>
        <Button
          onClick={onClick}
          id={text('id', 'button-id')}
          text={text('text', 'Save')}
          className={text('className', '')}
          isSubmit={boolean('isSubmit', false)}
          disabled={boolean('disabled', false)}
          tabIndex={number('tabIndex', 1)}
        />
      </>
    )
  }),
)
