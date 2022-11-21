import React from 'react'
import { storiesOf } from '@storybook/react'
import { Hamburger } from './Hamburger'

const stories = storiesOf('Hamburger', module)

stories.add('hamburger animation 1', () => {
  return <Hamburger size={50} />
})
