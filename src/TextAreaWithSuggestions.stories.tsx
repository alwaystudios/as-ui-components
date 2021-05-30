import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { random, datatype } from 'faker'
import { TextAreaWithSuggestions } from './TextAreaWithSuggestions'

const stories = storiesOf('TextAreaWithSuggestions', module)

stories.add('with interactive state', () =>
  React.createElement(() => {
    const [value, setValue] = useState('')

    const getSuggestions = (keywords: string): Promise<string[]> => {
      return new Promise((resolve) => {
        setTimeout(
          () =>
            resolve([...Array(datatype.number(5) + 1)].map(() => `${keywords} ${random.words(3)}`)),
          100,
        )
      })
    }

    return (
      <TextAreaWithSuggestions value={value} setValue={setValue} getSuggestions={getSuggestions} />
    )
  }),
)
