import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text } from '@storybook/addon-knobs'
import { ContentSwitcher } from './ContentSwitcher'
import { noop } from '@alwaystudios/as-utils'

const stories = storiesOf('ContentSwitcher', module)

const options = ['Content panel 1', 'Content panel 2', 'Content panel 3', 'Content panel 4']

stories.add('renders with props', () =>
  React.createElement(() => {
    const [currentOption, setOption] = useState<string>(options[0])

    const onChange = (option: string) => {
      setOption(option)
    }

    return (
      <>
        <ContentSwitcher
          options={options}
          onChange={onChange}
          disabled={boolean('disabled', false)}
          selectedOption={currentOption}
        />
        <br />
        <p>OnChange: {currentOption}</p>
      </>
    )
  }),
)

stories.add('renders with selected option', () => {
  return (
    <ContentSwitcher
      options={options}
      onChange={noop}
      disabled={boolean('disabled', false)}
      selectedOption={text('selectedOption', options[0])}
    />
  )
})
