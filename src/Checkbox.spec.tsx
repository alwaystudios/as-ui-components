import React from 'react'
import { Checkbox } from './Checkbox'
import { mount } from 'enzyme'
import { noop } from '@alwaystudios/as-utils'

describe('Checkbox', () => {
  it('renders with label and id, not checked by default', () => {
    const wrapper = mount(<Checkbox onChange={jest.fn()} label="checkbox" id="1" />)

    const checkbox = wrapper.find('input')
    expect(checkbox.prop('id')).toBe('1')
    expect(checkbox.prop('checked')).toBe(false)
    expect(wrapper.text()).toContain('checkbox')
  })

  it('renders with a defaulted id', () => {
    const wrapper = mount(<Checkbox onChange={noop} label="checkbox" />)

    const checkbox = wrapper.find('input')
    expect(checkbox.prop('id')).toBeTruthy()
  })

  it('handles onChange from unchecked', () => {
    const onChange = jest.fn()
    const wrapper = mount(<Checkbox onChange={onChange} label="checkbox" />)

    wrapper.find('input').simulate('change')
    expect(onChange).toHaveBeenCalledWith(true)
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('handles onChange from checked', () => {
    const onChange = jest.fn()
    const wrapper = mount(<Checkbox checked={true} onChange={onChange} label="checkbox" />)

    wrapper.find('input').simulate('change')
    expect(onChange).toHaveBeenCalledWith(false)
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('renders as disabled', () => {
    const onChange = jest.fn()
    const wrapper = mount(
      <Checkbox checked={false} label="checkbox" disabled={true} onChange={onChange} />,
    )

    const checkbox = wrapper.find('input')
    expect(checkbox.prop('disabled')).toBe(true)
    const input = wrapper.find('input')
    input.simulate('click')
    expect(onChange).not.toHaveBeenCalled()
  })
})
