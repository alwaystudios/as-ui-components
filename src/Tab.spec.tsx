import React from 'react'
import { Tab } from './Tab'
import { mount } from 'enzyme'

describe('Tab', () => {
  it('renders', () => {
    const wrapper = mount(
      <Tab title="Test tab">
        <div>some content</div>
      </Tab>,
    )

    expect(wrapper.text()).toEqual('Test tab')
  })
})
