import { storiesOf } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'
import { Tooltop } from './Tooltip'

const stories = storiesOf('Tooltip', module)

const Div = styled.div`
  padding: 20px;
  border: 1px solid black;
  height: 40px;
  width: 250px;
  background: #f2395a;
  text-align: center;
  line-height: 40px;
  font-size: 1.5rem;
  color: #fff;
`

stories.add('wraps any content with a tooltip', () => (
  <>
    <Tooltop value="this is the tooltip">
      <Div>this div has a tooltip</Div>
    </Tooltop>
  </>
))
