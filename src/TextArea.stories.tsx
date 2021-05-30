import React from 'react'
import { storiesOf } from '@storybook/react'
import { TextArea } from './TextArea'

const stories = storiesOf('Textarea', module)

stories.add('textarea', () => {
  return <TextArea rows={10} placeholder="Add some text" maxLength={100} />
})
