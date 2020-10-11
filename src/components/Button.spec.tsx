import React from 'react'
import { mount } from 'enzyme'
import { Button } from './Button'

describe('button', () => {
  const onClick = jest.fn()

  beforeEach(jest.resetAllMocks)

  it('renders button with defaults', () => {
    const wrapper = mount(<Button text="push me" onClick={onClick} />)
    const button = wrapper.find('button')
    expect(wrapper.text()).toEqual('push me')
    expect(button.prop('type')).toBe('button')
  })

  it('renders button as submit', () => {
    const wrapper = mount(<Button text="push me" isSubmit={true} onClick={onClick} />)
    const button = wrapper.find('button')
    expect(wrapper.text()).toEqual('push me')
    expect(button.prop('type')).toBe('submit')
  })

  it('renders button as disabled', () => {
    const wrapper = mount(<Button text="button" disabled={true} onClick={onClick} />)
    const button = wrapper.find('button')
    expect(button.prop('disabled')).toBe(true)

    button.simulate('click')
    expect(onClick).not.toHaveBeenCalled()
  })

  it('renders button with a custom class', () => {
    const wrapper = mount(<Button text="button" className="123" onClick={onClick} />)
    expect(wrapper.hasClass('123')).toBeTruthy()
  })

  it('handles onClick', () => {
    const wrapper = mount(<Button text="button" onClick={onClick} />)
    const button = wrapper.find('button')

    button.simulate('click')
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
