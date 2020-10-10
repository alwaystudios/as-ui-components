import React from 'react'
import { mount } from 'enzyme'
import { Button } from './Button'

describe('button', () => {
  it('renders', () => {
    const wrapper = mount(<Button />)
    const button = wrapper.find('button')
    expect(button.exists()).toEqual(true)
  })
})
