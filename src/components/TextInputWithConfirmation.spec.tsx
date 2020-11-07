import { mount } from 'enzyme'
import React from 'react'
import { ErrorIcon } from './icons/ErrorIcon'
import { LockIcon } from './icons/LockIcon'
import { SuccessIcon } from './icons/SuccessIcon'
import { TextInputWithConfirmation } from './TextInputWithConfirmation'

const onConfirm = jest.fn()

describe('TextInputWithConfirmation', () => {
  beforeEach(jest.resetAllMocks)

  it('renders text input with a custom class', () => {
    const wrapper = mount(<TextInputWithConfirmation className="123" onConfirm={onConfirm} />)
    expect(wrapper.hasClass('123')).toBeTruthy()
  })

  it('does not change external state onChange', () => {
    const wrapper = mount(<TextInputWithConfirmation className="123" onConfirm={onConfirm} />)
    const input = wrapper.find('input')
    input.simulate('change', { target: { value: 'text change' } })
    expect(onConfirm).not.toHaveBeenCalled()
  })

  it('renders buttons on text change', () => {
    const wrapper = mount(<TextInputWithConfirmation className="123" onConfirm={onConfirm} />)
    const input = wrapper.find('input')
    input.simulate('change', { target: { value: 'text change' } })
    const successIcon = wrapper.find(SuccessIcon)
    expect(successIcon.exists).toBeTruthy()
    const errorIcon = wrapper.find(ErrorIcon)
    expect(errorIcon.exists).toBeTruthy()
  })

  it('confirms text change on enter key down', () => {
    const wrapper = mount(<TextInputWithConfirmation className="123" onConfirm={onConfirm} />)
    const input = wrapper.find('input')
    input.simulate('change', { target: { value: 'text change' } })
    input.simulate('keydown', { key: 'Enter' })
    expect(onConfirm).toHaveBeenCalledTimes(1)
  })

  it('cancels text change on escape key down', () => {
    const wrapper = mount(<TextInputWithConfirmation className="123" onConfirm={onConfirm} />)
    const input = wrapper.find('input')
    input.simulate('change', { target: { value: 'text change' } })
    input.simulate('keydown', { key: 'Escape' })
    expect(onConfirm).toHaveBeenCalledTimes(0)
  })

  it('renders as disabled', () => {
    const wrapper = mount(<TextInputWithConfirmation disabled={true} onConfirm={onConfirm} />)
    expect(wrapper.find(LockIcon)).toBeTruthy()
  })
})
