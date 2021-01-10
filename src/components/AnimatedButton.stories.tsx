import React from 'react'
import { noop } from '@alwaystudios/as-utils'
import { storiesOf } from '@storybook/react'
import { AnimatedButton } from './AnimatedButton'

const stories = storiesOf('AnimatedButton', module)

stories.add('renders', () => <AnimatedButton text="push me" onClick={noop} />)
