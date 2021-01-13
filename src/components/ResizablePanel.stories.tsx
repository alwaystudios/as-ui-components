import { storiesOf } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'
import { ResizablePanel } from './ResizablePanel'

const stories = storiesOf('Resizable Panel', module)

const Container = styled.div`
  display: flex;
  height: 300px;

  .other {
    display: inline-block;
    height: 100%;
    width: 100%;
    background: lightgray;
  }
`

stories.add('drag to resize', () => (
  <Container>
    <div className="other">some other content....</div>
    <ResizablePanel>resizeable...</ResizablePanel>
  </Container>
))
