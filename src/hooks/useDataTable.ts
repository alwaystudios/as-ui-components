import { debounce } from '@alwaystudios/as-utils'
import { useEffect, useState } from 'react'

export enum PaginationSize {
  All = '_all',
}

export type PageSize = number | typeof PaginationSize.All

export type DataTableRow = {
  isVisible: boolean
  itemId: string
}

const getBounds = (currentPage: number, pageSize: number) => {
  const start = (currentPage - 1) * pageSize
  const end = start + pageSize
  return { start, end }
}

export const useDataTable = <T>(
  _initialItems: ReadonlyArray<T>,
  initialPageSize: PageSize = PaginationSize.All,
) => {
  const initialItems = _initialItems.map((item, index) => ({ ...item, itemId: `${index}` }))

  const [checkedRows, setCheckedRows] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState<PageSize>(initialPageSize)
  const [rowFilters, setRowFilters] = useState<Record<string, boolean>>({})
  const [filter, setFilter] = useState('')

  const getPage = (
    newCurrentPage: number,
    newPageSize: PageSize,
  ): ReadonlyArray<T & { isVisible: boolean; itemId: string }> => {
    const filteredItems = initialItems
      .map((item) => {
        return {
          ...item,
          isVisible: !rowFilters[item.itemId],
        }
      })
      .sort((left, right) => (left.isVisible === right.isVisible ? 0 : left.isVisible ? -1 : 1))
    const { start, end } = getBounds(
      newCurrentPage,
      newPageSize === PaginationSize.All ? filteredItems.length : Number(newPageSize),
    )

    return filteredItems.map((item, index) => {
      const isWithinCurrentPage = index >= start && index < end
      const isVisible = !rowFilters[item.itemId] && isWithinCurrentPage
      return { ...item, isVisible }
    })
  }

  const [items, setItems] = useState(getPage(currentPage, pageSize))

  useEffect(() => {
    setItems(getPage(currentPage, pageSize))
  }, [_initialItems, rowFilters])

  useEffect(() => {
    setCheckedRows([])
  }, [_initialItems])

  const _setCurrentPage = (page: number) => {
    setCurrentPage(page)
    setItems(getPage(page, pageSize))
  }

  const _setPageSize = (newPageSize: PageSize) => {
    setPageSize(newPageSize)
    setCurrentPage(1)
    setItems(getPage(1, newPageSize))
  }

  const onCheck = (itemId: string) => {
    setCheckedRows(
      checkedRows.some((row) => row === itemId)
        ? checkedRows.filter((row) => row !== itemId)
        : [...checkedRows, itemId],
    )
  }

  const allPageItemsSelected = () => {
    const visibleItemIds = items.filter(({ isVisible }) => isVisible).map(({ itemId }) => itemId)
    const selectedVisibleItemIds = visibleItemIds.filter((itemId) => checkedRows.includes(itemId))

    if (selectedVisibleItemIds.length === 0) {
      return false
    }

    return visibleItemIds.length === selectedVisibleItemIds.length ? true : 'mixed'
  }

  const onPageCheckAll = () => {
    const visibleItemIds = items.filter(({ isVisible }) => isVisible).map(({ itemId }) => itemId)
    const selectedVisibleItemIds = visibleItemIds.filter((itemId) => checkedRows.includes(itemId))
    if (visibleItemIds.length === selectedVisibleItemIds.length) {
      setCheckedRows(checkedRows.filter((itemId) => !visibleItemIds.includes(itemId)))
      return
    }

    setCheckedRows(Array.from(new Set([...checkedRows, ...visibleItemIds])))
  }

  const getSelectedData = () => {
    return _initialItems.reduce(
      (acc, item, index) => (checkedRows.includes(`${index}`) ? [...acc, item] : acc),
      [] as typeof _initialItems,
    )
  }

  const setIsFiltered = (itemId: string) => (isFiltered: boolean) => {
    setRowFilters((prevState) => ({
      ...prevState,
      [itemId]: isFiltered,
    }))
  }

  return {
    currentPage,
    pageSize,
    setCurrentPage: _setCurrentPage,
    setPageSize: _setPageSize,
    items,
    isItemSelected: (itemId: string) => checkedRows.includes(itemId),
    totalSelectedItems: checkedRows.length,
    totalCurrentItems: items.filter((item) => !rowFilters[item.itemId]).length,
    filter,
    setFilter: debounce((filter: string) => {
      setFilter(filter)
      setCurrentPage(1)
      setCheckedRows([])
    }),
    onPageCheckAll,
    onCheck,
    getSelectedData,
    setIsFiltered,
    allPageItemsSelected,
  }
}
