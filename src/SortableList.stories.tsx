import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { SortableList } from './SortableList'
import styled from 'styled-components'

const stories = storiesOf('SortableList', module)

stories.add('with react state', () => {
  const [data, setData] = useState([...Array(5)].map((_, i) => `Item-${i + 1}`))

  const handleAdd = (event: React.MouseEvent) => {
    event.preventDefault()
    setData([...data, 'new item'])
  }

  const Container = styled.div`
    margin: 0.5rem;
  `

  return (
    <>
      <button onClick={handleAdd}>click to add item</button>
      <div>state: {JSON.stringify(data)}</div>
      <br />
      <SortableList data={data} setData={setData}>
        {data.map((item, index) => (
          <Container key={index}>{item}</Container>
        ))}
      </SortableList>
    </>
  )
})
