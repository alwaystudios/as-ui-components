import { render } from 'enzyme'
import React from 'react'
import { Pill } from './Pill'

describe('Pill', () => {
  it('renders a pill', () => {
    const wrapper = render(<Pill label="some text" color="white" backgroundColor="blue" />)
    expect(wrapper.text()).toEqual('some text')
  })
})
