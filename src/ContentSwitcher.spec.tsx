import { noop } from '@alwaystudios/as-utils'
import { shallow } from 'enzyme'
import React from 'react'
import { ContentSwitcher } from './ContentSwitcher'

const options = ['Option A', 'Option B', 'Option C']
const buttonClass = '.bx--content-switcher-btn'

describe('ContentSwitcher', () => {
  it('renders with props', () => {
    const wrapper = shallow(<ContentSwitcher options={options} onChange={noop} />)
    expect(wrapper.find(buttonClass).length).toBe(3)
    expect(wrapper.find(buttonClass).at(0).text()).toBe('Option A')
    expect(wrapper.find(buttonClass).at(1).text()).toBe('Option B')
    expect(wrapper.find(buttonClass).at(2).text()).toBe('Option C')
  })

  it('calls the onChange with selected item when clicked', () => {
    const onChange = jest.fn()

    const preventDefault = jest.fn()
    const wrapper = shallow(<ContentSwitcher options={options} onChange={onChange} />)

    wrapper.find(buttonClass).at(2).simulate('click', {
      preventDefault,
    })

    expect(onChange).toBeCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith('Option C')
    expect(preventDefault).toHaveBeenCalledTimes(1)
  })

  it('renders as disabled', () => {
    const wrapper = shallow(<ContentSwitcher options={options} onChange={noop} disabled={true} />)

    expect(wrapper.find(buttonClass).at(0).prop('disabled')).toBeTruthy()
    expect(wrapper.find(buttonClass).at(1).prop('disabled')).toBeTruthy()
    expect(wrapper.find(buttonClass).at(2).prop('disabled')).toBeTruthy()
  })

  it('selects the correct button when the selectedOption prop is provided', () => {
    const wrapper = shallow(
      <ContentSwitcher options={options} onChange={noop} selectedOption={'Option C'} />,
    )

    expect(wrapper.find(buttonClass).at(0).hasClass('bx--content-switcher--selected')).toBeFalsy()
    expect(wrapper.find(buttonClass).at(1).hasClass('bx--content-switcher--selected')).toBeFalsy()
    expect(wrapper.find(buttonClass).at(2).hasClass('bx--content-switcher--selected')).toBeTruthy()
  })
})
