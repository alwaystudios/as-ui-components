import { storiesOf } from '@storybook/react'
import React from 'react'
import { CopyToClipboard } from './CopyToClipboard'

const stories = storiesOf('CopyToClipboard', module)

stories.add('renders', () => (
  <>
    <p>Click to copy this text to the clipboard</p>
    <CopyToClipboard text="Click to copy this text to the clipboard" />
  </>
))
