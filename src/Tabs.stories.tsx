import React from 'react'
import { Tab } from './Tab'
import { Tabs } from './Tabs'
import { storiesOf } from '@storybook/react'

const stories = storiesOf('Tabs', module)

stories.add('with defaults', () => (
  <Tabs>
    <Tab title="Tab one">
      <h2>One</h2>
      <p>content one</p>
    </Tab>
    <Tab title="Tab two">
      <h2>Two</h2>
      <p>content two</p>
    </Tab>
    <Tab title="Tab three">
      <h2>Three</h2>
      <p>content three</p>
    </Tab>
  </Tabs>
))
