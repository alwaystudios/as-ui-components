import React from 'react'
import { mount } from 'enzyme'
import { SortableList } from './SortableList'

describe('SortableList', () => {
  it('renders with props', () => {
    const data = [{ name: 'one', key: 1 }]
    const setData = jest.fn()
    const children = [<div key={1}>one</div>]

    const wrapper = mount(
      <SortableList data={data} setData={setData}>
        {children}
      </SortableList>,
    )
    expect(wrapper.prop('data')).toBe(data)
    expect(wrapper.prop('setData')).toBe(setData)
    expect(wrapper.prop('children')).toBe(children)
  })

  it('renders a SortableElement for each data item', () => {
    const data = [
      { name: 'one', key: 1 },
      { name: 'two', key: 2 },
      { name: 'three', key: 3 },
    ]
    const setData = jest.fn()
    const children = data.map(({ name, key }: any) => <div key={key}>{name}</div>)

    const wrapper = mount(
      <SortableList data={data} setData={setData}>
        {children}
      </SortableList>,
    )

    expect(wrapper.find('ul').find('li')).toHaveLength(3)

    expect(wrapper.find('li').at(0).text()).toBe('one')
    expect(wrapper.find('li').at(1).text()).toBe('two')
    expect(wrapper.find('li').at(2).text()).toBe('three')
  })
})
