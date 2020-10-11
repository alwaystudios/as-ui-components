import { configure, addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'

const req = require.context('../src/components', true, /.stories.tsx$/)
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addParameters({ info: { inline: true } })

addDecorator(withInfo)
addDecorator(withKnobs)

configure(loadStories, module)
