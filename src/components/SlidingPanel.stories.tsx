import { storiesOf } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'
import { SlidingPanel } from './SlidingPanel'

const stories = storiesOf('Sliding panel', module)

const Div = styled.div`
  line-height: 200px;
  text-align: center;
  height: 200px;
  width: 250px;
  background: blue;
  color: white;
`

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 180px;
  background: red;
  color: white;
`

const content = (
  <Panel>
    <h2>Panel</h2>
    <div>some content here</div>
  </Panel>
)

stories.add('hover over content to see sliding panel overlay', () => (
  <SlidingPanel content={content}>
    <Div>content that will be overlayed</Div>
  </SlidingPanel>
))
