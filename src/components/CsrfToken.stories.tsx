import { storiesOf } from '@storybook/react'
import React from 'react'
import { CsrfToken } from './CsrfToken'

const stories = storiesOf('CsrfToken', module)

stories.add('renders', () => (
  <>
    Csrf token hidden input
    <CsrfToken csrfToken="1234" />
  </>
))
