import React from 'react'
import { mount } from 'enzyme'
import { withLoading } from './withLoading'

const setPageIsLoading = jest.fn()
const pageIsLoading = jest.fn()

const Component: React.FC = withLoading(() => <>mock component</>, setPageIsLoading, pageIsLoading)

describe('with loading HOC', () => {
  beforeEach(jest.clearAllMocks)

  it('displays the component and the loading overlay while loading is true', () => {
    pageIsLoading.mockReturnValueOnce(true)

    const wrapper = mount(<Component />)

    expect(wrapper.text()).toEqual('mock component')
    expect(setPageIsLoading).toHaveBeenCalledTimes(1)
    expect(wrapper.find('div.overlay').length).toEqual(1)
  })

  it('only displays the component when loading is false', () => {
    pageIsLoading.mockReturnValueOnce(false)

    const wrapper = mount(<Component />)

    expect(wrapper.text()).toEqual('mock component')
    expect(setPageIsLoading).toHaveBeenCalledTimes(1)
    expect(wrapper.find('div.overlay').length).toEqual(0)
  })
})
