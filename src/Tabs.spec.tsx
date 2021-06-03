import React from 'react'
import { Tab } from './Tab'
import { Tabs } from './Tabs'
import { mount } from 'enzyme'

describe('Tabs', () => {
  it('renders and navigates tabs', () => {
    const wrapper = mount(
      <Tabs>
        <Tab title="My first tab">
          <p>content</p>
        </Tab>
        <Tab title="Another tab">
          <h1>panel title</h1>
        </Tab>
      </Tabs>,
    )

    const lis = wrapper.find('li')
    expect(lis).toHaveLength(2)
    expect(lis.first().text()).toBe('My first tab')
    expect(lis.last().text()).toBe('Another tab')

    expect(wrapper.find('p').text()).toBe('content')
    expect(wrapper.find('h1')).toHaveLength(0)

    wrapper.find('li').last().simulate('click')

    expect(wrapper.find('p')).toHaveLength(0)
    expect(wrapper.find('h1').text()).toBe('panel title')
  })
})
