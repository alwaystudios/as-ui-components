import { useOutsideClick } from './useOutsideClick'
import React, { useRef } from 'react'
import { mount } from 'enzyme'

describe('useOutsideClick', () => {
  it('handles inside and outside clicks', () => {
    const outerNode = document.createElement('div')
    document.body.appendChild(outerNode)

    const fn = jest.fn()
    const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener')

    const TestComponent: React.FunctionComponent = () => {
      const ref = useRef<HTMLDivElement>(null)
      useOutsideClick(ref, fn)
      return <div ref={ref}></div>
    }

    const wrapper = mount(<TestComponent />, {
      attachTo: outerNode,
    })

    wrapper.simulate('click')
    expect(fn).not.toBeCalled()

    outerNode.dispatchEvent(new Event('click', { bubbles: true }))
    expect(fn).toBeCalled()

    wrapper.unmount()
    expect(removeEventListenerSpy).toBeCalledWith('click', expect.any(Function))
  })
})
