import React from 'react'
import { mount } from 'enzyme'
import { CsrfToken } from './CsrfToken'

describe('CsrfToken', () => {
  it('renders with a csrfToken', () => {
    const wrapper = mount(<CsrfToken csrfToken="1234" />)
    const input = wrapper.find('input')
    expect(input.prop('type')).toEqual('hidden')
    expect(input.prop('name')).toEqual('csrfToken')
    expect(input.prop('defaultValue')).toEqual('1234')
  })
})
