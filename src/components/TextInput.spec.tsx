import { mount } from 'enzyme'
import React from 'react'
import { noop } from '../noop'
import { ErrorIcon } from './icons/ErrorIcon'
import { LockIcon } from './icons/LockIcon'
import { TextInput } from './TextInput'

describe('TextInput', () => {
  it('renders text input with a custom class', () => {
    const wrapper = mount(<TextInput className="123" />)
    expect(wrapper.hasClass('123')).toBeTruthy()
  })

  it('clears the input value onClear', () => {
    const onClear = jest.fn()
    const wrapper = mount(<TextInput value="some text" onClear={onClear} onChange={noop} />)
    wrapper.find(ErrorIcon).simulate('click')

    expect(onClear).toHaveBeenCalledTimes(1)
  })

  it('renders as disabled', () => {
    const wrapper = mount(<TextInput disabled={true} />)
    expect(wrapper.find(LockIcon)).toBeTruthy()
  })
})
