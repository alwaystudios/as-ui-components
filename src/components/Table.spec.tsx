import { mount } from 'enzyme'
import React from 'react'
import { TableCell, TableHeadCell, TableHeader, TableRow } from './Table'
import 'jest-styled-components'

describe('Table', () => {
  describe('TableHeader', () => {
    it('renders with a title and children', () => {
      const wrapper = mount(
        <TableHeader title="some title">
          <span>some text</span>
        </TableHeader>,
      )
      const container = wrapper.find('div')
      const title = container.find('h3')
      expect(title.text()).toEqual('some title')
      const span = container.find('span')
      expect(span.text()).toEqual('some text')
    })
  })

  describe('TableHeadCell', () => {
    it('renders TableHeadCell', () => {
      const wrapper = mount(
        <table>
          <tbody>
            <tr>
              <TableHeadCell text="column title" />
            </tr>
          </tbody>
        </table>,
      )

      const th = wrapper.find('th')
      expect(th.text()).toBe('column title')
      expect(th).toHaveStyleRule('position', 'sticky !important')
    })
  })

  describe('TableCell', () => {
    it('renders TableCell defaults', () => {
      const wrapper = mount(
        <table>
          <tbody>
            <tr>
              <TableCell className="my-classname">
                <p>content</p>
              </TableCell>
            </tr>
          </tbody>
        </table>,
      )

      const para = wrapper.find('p')
      expect(para.text()).toEqual('content')

      const td = wrapper.find('td')
      expect(td.prop('className')).toEqual('my-classname')
      expect(td).not.toHaveStyleRule('white-space', 'nowrap')
    })

    it('renders TableCell defaults', () => {
      const wrapper = mount(
        <table>
          <tbody>
            <tr>
              <TableCell canWrap={false} className="my-classname">
                <p>content</p>
              </TableCell>
            </tr>
          </tbody>
        </table>,
      )

      const para = wrapper.find('p')
      expect(para.text()).toEqual('content')

      const td = wrapper.find('td')
      expect(td.prop('className')).toContain('my-classname')
      expect(td).toHaveStyleRule('white-space', 'nowrap')
    })
  })

  describe('TableRow', () => {
    it('renders with defaults', () => {
      const wrapper = mount(
        <table>
          <tbody>
            <TableRow>
              <td>content</td>
            </TableRow>
          </tbody>
        </table>,
      )

      const tr = wrapper.find('tr')
      expect(tr.text()).toBe('content')
    })

    it('renders expand with expandable content', () => {
      const ExpandableChildren = <TableCell>Expandable content</TableCell>

      const wrapper = mount(
        <table>
          <tbody>
            <TableRow expanded={true} expandableChildren={ExpandableChildren}>
              <td>content</td>
            </TableRow>
          </tbody>
        </table>,
      )

      const tr = wrapper.find('tr')
      expect(tr.at(1).text()).toBe('Expandable content')
    })
  })
})
