import { storiesOf } from '@storybook/react'
import React from 'react'
import { SocialMedia } from './SocialMedia'

const stories = storiesOf('Social media', module)

stories.add('social media buttons demo', () => <SocialMedia />)
