import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Spinner2 } from './Spinner2'

const stories = storiesOf('Spinner 2', module)

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  height: 100px;
  width: 300px;
`

stories.add('css only spinner', () =>
  React.createElement(() => {
    const [loading, setLoading] = useState(true)

    return (
      <div style={{ height: '200px' }}>
        <div style={{ marginBottom: '20px' }}>
          <button onClick={() => setLoading(!loading)}>toggle loading</button>
        </div>
        <Div>
          <Spinner2 isLoading={loading}>
            <div>some content that was waiting to load</div>
          </Spinner2>
        </Div>
      </div>
    )
  }),
)
