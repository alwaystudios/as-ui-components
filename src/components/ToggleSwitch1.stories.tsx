import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { ToggleSwitch1 } from './ToggleSwitch1'
import styled from 'styled-components'

const stories = storiesOf('ToggleSwitch1', module)

const Container = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  font-size: 4em;
  color: #00b3b4;
  text-shadow: 2px 2px 1px #e7eef1, 5px 5px 2px rgba(0, 0, 0, 0.1);
`

stories.add('with interactive state', () =>
  React.createElement(() => {
    const [toggleOn, setToggleOn] = useState(false)

    const onClick = () => {
      setToggleOn(!toggleOn)
    }
    return (
      <>
        <Container style={{ marginBottom: '20px' }}>
          Toggle on: {JSON.stringify(toggleOn)}
        </Container>
        <ToggleSwitch1 onClick={onClick} checked={toggleOn} />
      </>
    )
  }),
)
