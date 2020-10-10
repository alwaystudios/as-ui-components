import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from './Button'
import { noop } from './noop'

const stories = storiesOf('Button', module)

stories.add('button', () => <Button onClick={noop} />)
