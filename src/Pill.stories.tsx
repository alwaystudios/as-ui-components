import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { Pill } from './Pill'

const stories = storiesOf('Pill', module)

stories.add('with defaults', () => (
  <Pill
    backgroundColor={text('backgroundColor', 'blue')}
    color={text('color', 'white')}
    label={text('label', 'Foo')}
  />
))
