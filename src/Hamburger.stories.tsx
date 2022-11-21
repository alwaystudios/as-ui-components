import React from 'react'
import { storiesOf } from '@storybook/react'
import { Hamburger1 } from './Hamburger1'

const stories = storiesOf('Hamburger', module)

stories.add('hamburger animation 1', () => {
  return <Hamburger1 size={50} />
})
