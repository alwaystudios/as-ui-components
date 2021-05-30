import React from 'react'
import { mount } from 'enzyme'
import { ContextMenu } from './ContextMenu'
import { act } from 'react-dom/test-utils'
import { Menu } from './Menu'

const numberOfOptions = 5
const optionsOnClick = [...Array(numberOfOptions)].map(() => jest.fn())
const options = [...Array(numberOfOptions)].map(
  (_, i) => ({ text: `option-${i + 1}`, onClick: () => optionsOnClick[i] } as MenuOption),
)

describe('ContextMenu', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('renders as hidden by default', () => {
    const wrapper = mount(<ContextMenu options={options} />)
    expect(wrapper.find(Menu).exists()).toBe(false)
  })

  it('shows the context menu on right clicked', () => {
    const wrapper = mount(<ContextMenu options={options}>some child</ContextMenu>)
    wrapper.find('div.context-menu').simulate('contextmenu')
    expect(wrapper.find(Menu).exists()).toBe(true)
  })

  it('removes an open context menu when another element is clicked', () => {
    const listeners: any = {}
    // eslint-disable-next-line functional/immutable-data
    document.addEventListener = jest.fn((event, callback) => {
      // eslint-disable-next-line functional/immutable-data
      listeners[event] = callback
    })

    const wrapper = mount(<ContextMenu options={options} />)
    wrapper.find(ContextMenu).simulate('contextmenu')
    expect(wrapper.find(Menu).exists()).toBe(true)

    act(() => {
      listeners.click({ target: document.createElement('a') })
    })
    wrapper.update()

    expect(wrapper.find(Menu).exists()).toBe(false)
  })

  it('removes an open context menu the document is scrolled', () => {
    const listeners: any = {}
    // eslint-disable-next-line functional/immutable-data
    document.addEventListener = jest.fn((event, callback) => {
      // eslint-disable-next-line functional/immutable-data
      listeners[event] = callback
    })

    const wrapper = mount(<ContextMenu options={options} />)
    wrapper.find(ContextMenu).simulate('contextmenu')
    expect(wrapper.find(Menu).exists()).toBe(true)

    act(() => {
      listeners.scroll()
    })
    wrapper.update()

    expect(wrapper.find(Menu).exists()).toBe(false)
  })

  it('handles menu option click events', () => {
    const onClickOne = jest.fn()
    const onClickTwo = jest.fn()
    const options = [
      { text: 'option-1', onClick: onClickOne },
      { text: 'option-2', onClick: onClickTwo },
    ]
    const wrapper = mount(<ContextMenu options={options} />)
    wrapper.simulate('contextmenu')
    const secondMenuItem = wrapper.find('li').at(1)
    secondMenuItem.simulate('click')

    expect(onClickTwo).toHaveBeenCalledTimes(1)
  })

  it('renders visible with isActiveMenu prop', () => {
    const onClickOne = jest.fn()
    const onClickTwo = jest.fn()
    const options = [
      { text: 'option-1', onClick: onClickOne },
      { text: 'option-2', onClick: onClickTwo },
    ]
    const wrapper = mount(<ContextMenu options={options} isActiveMenu={true} />)
    expect(wrapper.find('.context-menu').exists()).toBeTruthy()
  })
})
