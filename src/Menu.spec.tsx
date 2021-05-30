import { mount } from 'enzyme'
import { Menu } from './Menu'
import React from 'react'

const options = [...Array(5)].map((_, i) => ({
  text: `option-${i + 1}`,
  onClick: jest.fn(),
}))

describe('menu', () => {
  it('renders menu options and handles on click events', () => {
    const wrapper = mount(<Menu options={options} />)

    options.map((option, index) => {
      const li = wrapper.find('li').at(index)
      expect(li.text()).toBe(option.text)
      li.simulate('click')
      expect(option.onClick).toHaveBeenCalledTimes(1)
    })
  })
})
