import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { ToggleSwitch2 } from './ToggleSwitch2'
import styled from 'styled-components'

const stories = storiesOf('ToggleSwitch2', module)

const Container = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  font-size: 6em;
  color: #f2395a;
  transform: skew(-5deg, -5deg) rotate(5deg);
  transform-origin: center center;
  text-shadow: 1px 1px #d10e31, 2px 2px #d10e31, 3px 3px #d10e31, 4px 4px #d10e31, 5px 5px #d10e31,
    6px 6px #d10e31, 7px 7px #d10e31, 8px 8px #890920, 9px 9px #890920, 10px 10px #890920,
    11px 11px 15px rgba(0, 0, 0, 0.7);
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
        <ToggleSwitch2 text="click me to activate" onClick={onClick} checked={toggleOn} />
      </>
    )
  }),
)
