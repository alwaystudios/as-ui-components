import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { ContextMenu } from './ContextMenu'
import { noop } from '../noop'

const stories = storiesOf('ContextMenu', module)

stories.add('renders', () => (
  <ContextMenu options={[{ text: 'click here', onClick: noop }]}>
    If you right click here, context menu will appear
  </ContextMenu>
))

stories.add('activates context menu on right click', () => {
  return React.createElement(() => {
    const [optionClicked, setOptionClicked] = useState<number>()
    const options = [...Array(5)].map((_, i) => ({
      text: `option-${i + 1}`,
      onClick: () => setOptionClicked(i + 1),
    }))

    return (
      <>
        <p>Option clicked: {optionClicked}</p>
        <br />

        <ContextMenu options={options}>
          If you right click here, context menu will appear
        </ContextMenu>
      </>
    )
  })
})
