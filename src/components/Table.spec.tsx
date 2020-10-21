import { mount } from 'enzyme'
import React from 'react'
import { Table, TableBody, TableCell, TableHeadCell, TableHeader, TableRow } from './Table'
import 'jest-styled-components'

describe('Table', () => {
  it('renders Table defaults', () => {
    const wrapper = mount(
      <Table className="my-classname">
        <tbody>
          <tr>
            <TableCell>
              <p>content</p>
            </TableCell>
          </tr>
        </tbody>
      </Table>,
    )

    const table = wrapper.find('table')
    expect(table.prop('className')).toEqual('my-classname')
  })

  describe('TableBody', () => {
    it('renders TableBody defaults', () => {
      const wrapper = mount(
        <table>
          <TableBody className="my-classname">
            <tr>
              <TableCell>
                <p>content</p>
              </TableCell>
            </tr>
          </TableBody>
        </table>,
      )

      const tableBody = wrapper.find('tbody')
      expect(tableBody.prop('className')).toEqual('my-classname')
    })
  })

  describe('TableHeader', () => {
    it('renders with a title and children', () => {
      const wrapper = mount(
        <table>
          <TableHeader className="my-classname">
            <tr>
              <td>some content</td>
            </tr>
          </TableHeader>
        </table>,
      )
      const container = wrapper.find('thead')
      const span = container.find('td').at(0)
      expect(span.text()).toEqual('some content')

      const tableHeader = wrapper.find('thead')
      expect(tableHeader.prop('className')).toEqual('my-classname')
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
