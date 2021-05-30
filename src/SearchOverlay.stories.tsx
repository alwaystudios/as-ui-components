import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import styled from 'styled-components'
import { SearchOverlay } from './SearchOverlay'

const stories = storiesOf('search overlay', module)

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 200px;
`

stories.add('with react state', () =>
  React.createElement(() => {
    const [label, setLabel] = useState('waiting for search')

    const onSearch = (term: string) => {
      setLabel(`search term: ${term}`)
    }

    const onCancel = () => {
      setLabel('search was cancelled')
    }

    return (
      <Container>
        <p>{label}</p>
        <SearchOverlay
          onSearch={onSearch}
          onCancel={onCancel}
          placeholder={text('placeholder', 'search...')}
          defaultValue={text('default value', '')}
        />
      </Container>
    )
  }),
)
