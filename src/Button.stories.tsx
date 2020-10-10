import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from './Button'

const stories = storiesOf('Button', module)

stories.add('button', () => <Button />)
