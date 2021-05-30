import { FileUpload } from './FileUpload'
import React from 'react'
import { mount } from 'enzyme'
import { noop } from '@alwaystudios/as-utils'

describe('FileUpload', () => {
  beforeEach(jest.resetAllMocks)

  it('renders children with gif as accepted file type', () => {
    const wrapper = mount(<FileUpload onChange={noop} accept="image/gif" />)

    const input = wrapper.find('input')
    expect(input.prop('type')).toBe('file')
    expect(input.prop('multiple')).toBe(false)
    expect(input.prop('accept')).toBe('image/gif')
  })
})
