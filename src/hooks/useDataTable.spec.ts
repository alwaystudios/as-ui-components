import { lorem } from 'faker'
import { cleanup, act, renderHook } from '@testing-library/react-hooks'
import { useDataTable, PaginationSize } from './useDataTable'
import { waitUntil } from '@alwaystudios/as-utils'

const data = [...Array(10)].map(() => ({
  content: lorem.words(),
}))

describe('useDataTable', () => {
  beforeEach(cleanup)

  describe('items', () => {
    it('returns all data items with default initial page size of ALL', () => {
      const { result } = renderHook(() => useDataTable(data))

      expect(result.current.items).toEqual(
        data.map((item, index) => ({
          ...item,
          isVisible: true,
          itemId: `${index}`,
        })),
      )
      expect(result.current.totalCurrentItems).toBe(10)
    })

    it('returns top 5 data items as visible for page size 5', () => {
      const { result } = renderHook(() => useDataTable(data, 5))

      expect(result.current.currentPage).toBe(1)

      expect(result.current.items).toEqual(
        data.map((item, index) => ({
          ...item,
          isVisible: index < 5 ? true : false,
          itemId: `${index}`,
        })),
      )
      expect(result.current.totalCurrentItems).toBe(10)
    })
  })

  describe('setFilter', () => {
    it('resets the checked rows and current page to 1 when the filter is changed', async () => {
      const pageSize = 5
      const { result } = renderHook(() => useDataTable(data, pageSize))

      act(() => result.current.setCurrentPage(2))
      expect(result.current.currentPage).toBe(2)
      act(() => result.current.onCheck('4'))

      act(() => result.current.setFilter('test'))
      await waitUntil(() => {
        expect(result.current.currentPage).toBe(1)
        expect(result.current.totalSelectedItems).toBe(0)
        expect(result.current.filter).toBe('test')
      })
    })
  })

  describe('getSelectedData', () => {
    it('gets all the data that has been selected', () => {
      const { result } = renderHook(() => useDataTable(data, 5))
      expect(result.current.getSelectedData()).toEqual([])

      act(() => result.current.onPageCheckAll())
      expect(result.current.getSelectedData()).toEqual(data.slice(0, 5))
    })
  })

  describe('setIsFiltered', () => {
    it('filters items by row id, sorted by isVisible', () => {
      const { result } = renderHook(() => useDataTable(data))

      act(() => result.current.setIsFiltered('8')(true))
      act(() => result.current.setIsFiltered('9')(true))

      expect(result.current.items).toEqual(
        data
          .map((item, index) => ({
            ...item,
            isVisible: index === 8 || index === 9 ? false : true,
            itemId: `${index}`,
          }))
          .sort((left, right) =>
            left.isVisible === right.isVisible ? 0 : left.isVisible ? -1 : 1,
          ),
      )

      expect(result.current.totalCurrentItems).toBe(8)
    })
  })

  describe('onCheck', () => {
    it('checks and unchecks a single row', () => {
      const { result } = renderHook(() => useDataTable(data, 5))

      act(() => result.current.onCheck('4'))
      expect(result.current.getSelectedData()).toEqual([data[4]])

      act(() => result.current.onCheck('4'))
      expect(result.current.getSelectedData()).toEqual([])
    })
  })

  describe('onPageCheckAll', () => {
    it('checks and unchecks all rows within a single page', () => {
      const { result } = renderHook(() => useDataTable(data, 5))

      act(() => result.current.onPageCheckAll())
      expect(result.current.getSelectedData()).toEqual(data.slice(0, 5))
      expect(result.current.totalSelectedItems).toBe(5)

      act(() => result.current.onPageCheckAll())
      expect(result.current.getSelectedData()).toEqual([])
    })

    it('checks an item and checks all items on a page', () => {
      const { result } = renderHook(() => useDataTable(data, 5))

      act(() => result.current.onCheck('0'))
      act(() => result.current.onPageCheckAll())
      expect(result.current.getSelectedData()).toEqual(data.slice(0, 5))
      expect(result.current.totalSelectedItems).toBe(5)

      act(() => result.current.onPageCheckAll())
      expect(result.current.getSelectedData()).toEqual([])
    })

    it('checks and unchecks all rows within a single page with row filters applied', () => {
      const { result } = renderHook(() => useDataTable(data, 5))

      act(() => result.current.setIsFiltered('0')(true))
      act(() => result.current.setIsFiltered('1')(true))

      act(() => result.current.onPageCheckAll())
      expect(result.current.getSelectedData()).toEqual(data.slice(2, 7))
      expect(result.current.totalSelectedItems).toBe(5)

      act(() => result.current.onPageCheckAll())
      expect(result.current.getSelectedData()).toEqual([])
    })

    it('checks and unchecks all rows within a single page maintaining existing checked rows', () => {
      const pageSize = 5
      const { result } = renderHook(() => useDataTable(data, pageSize))

      act(() => result.current.onCheck('3'))
      act(() => result.current.onCheck('4'))
      expect(result.current.totalSelectedItems).toBe(2)

      act(() => result.current.setCurrentPage(2))

      act(() => result.current.onPageCheckAll())
      expect(result.current.totalSelectedItems).toBe(7)
      expect(result.current.getSelectedData()).toEqual(data.slice(3, 10))

      expect(result.current.currentPage).toBe(2)
      act(() => result.current.onPageCheckAll())
      expect(result.current.totalSelectedItems).toBe(2)
      expect(result.current.isItemSelected('3')).toBe(true)
      expect(result.current.isItemSelected('4')).toBe(true)
    })
  })

  describe('allPageItemsSelected', () => {
    it('returns true when all page items are selected', () => {
      const { result } = renderHook(() => useDataTable(data, 5))
      expect(result.current.allPageItemsSelected()).toBe(false)

      act(() => result.current.onPageCheckAll())
      expect(result.current.allPageItemsSelected()).toBe(true)
    })

    it('returns `mixed` when some page items are selected', () => {
      const { result } = renderHook(() => useDataTable(data, 5))
      expect(result.current.allPageItemsSelected()).toBe(false)

      act(() => result.current.onCheck('2'))
      expect(result.current.allPageItemsSelected()).toBe('mixed')
    })
  })

  describe('isItemSelected', () => {
    it('returns true when item is selected', () => {
      const { result } = renderHook(() => useDataTable(data))

      expect(result.current.isItemSelected('4')).toBe(false)
      act(() => result.current.onCheck('4'))
      expect(result.current.isItemSelected('4')).toBe(true)
    })

    it('returns false after items collection changed', async () => {
      const { rerender, result } = renderHook((props) => useDataTable(props), {
        initialProps: [] as { content: string }[],
      })

      expect(result.current.isItemSelected('4')).toBe(false)
      act(() => result.current.onCheck('4'))
      expect(result.current.isItemSelected('4')).toBe(true)

      rerender([...data].splice(0, 5))

      expect(result.current.isItemSelected('4')).toBe(false)
    })
  })

  describe('setCurrentPage', () => {
    it('changes to page 2 of 4', () => {
      const pageSize = 3
      const { result } = renderHook(() => useDataTable(data, pageSize))

      expect(result.current.currentPage).toBe(1)

      act(() => result.current.setCurrentPage(2))
      expect(result.current.currentPage).toBe(2)

      expect(result.current.items).toEqual(
        data.map((item, index) => ({
          ...item,
          isVisible: index < 3 ? false : index > 5 ? false : true,
          itemId: `${index}`,
        })),
      )
    })
  })

  describe('setPageSize', () => {
    it('resets current page to 1 when changing the page size', () => {
      const pageSize = 5
      const { result } = renderHook(() => useDataTable(data, pageSize))

      expect(result.current.currentPage).toBe(1)
      act(() => result.current.setCurrentPage(2))
      expect(result.current.currentPage).toBe(2)

      act(() => result.current.setPageSize(10))
      expect(result.current.currentPage).toBe(1)
      expect(result.current.items).toEqual(
        data.map((item, index) => ({
          ...item,
          isVisible: true,
          itemId: `${index}`,
        })),
      )
    })

    it('sets page size to ALL', () => {
      const { result } = renderHook(() => useDataTable(data, 5))

      act(() => result.current.setPageSize(PaginationSize.All))
      expect(result.current.currentPage).toBe(1)
      expect(result.current.items).toEqual(
        data.map((item, index) => ({
          ...item,
          isVisible: true,
          itemId: `${index}`,
        })),
      )
    })
  })
})
