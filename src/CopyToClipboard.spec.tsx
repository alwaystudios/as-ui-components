import React from 'react'
import { CopyToClipboard } from './CopyToClipboard'
import { mount } from 'enzyme'
import copy from 'copy-to-clipboard'
jest.mock('copy-to-clipboard')

describe('CopyToClipboard', () => {
  it('renders and handles onclick', () => {
    const wrapper = mount(<CopyToClipboard text={'text to copy'} />)
    wrapper.simulate('click')
    expect(copy).toHaveBeenCalledTimes(1)
    expect(copy).toHaveBeenCalledWith('text to copy')
  })
})
