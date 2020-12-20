import { useState, useEffect } from 'react'

type ValueOf<T> = T[keyof T]
type BaseItem = Record<string, any>

const defaultToString = <T extends BaseItem>(value: ValueOf<keyof T>) => {
  return String(value)
}

type ToStringFnOverrides<T> = {
  [F in keyof T]?: (value: T[F]) => string
}

export const useStringFilter = <T extends BaseItem, K extends Array<keyof T>>(
  dataItems: ReadonlyArray<T>,
  fields: K,
  toStringFnOverrides?: ToStringFnOverrides<T>,
) => {
  const [queryString, setQueryString] = useState('')
  const [filteredItems, setFilteredItems] = useState(dataItems)

  const matchStr = (str: string) => (item: T) =>
    fields.some((fieldName) =>
      (toStringFnOverrides && toStringFnOverrides[fieldName]
        ? toStringFnOverrides[fieldName]!(item[fieldName])
        : defaultToString(item[fieldName])
      )
        .toLowerCase()
        .includes(str),
    )

  const filterByQueryString = (queryString: string) => {
    const newFilteredItems = queryString
      ? dataItems.filter(matchStr(queryString.toLowerCase()))
      : dataItems
    setFilteredItems(newFilteredItems)
  }

  const setFilter = (filter?: string) => {
    const newFilter = filter || ''
    setQueryString(newFilter)
    filterByQueryString(newFilter)
  }

  useEffect(() => {
    filterByQueryString(queryString)
  }, [dataItems])

  return {
    queryString,
    filteredItems,
    setFilter,
  }
}
