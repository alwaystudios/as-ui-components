import { renderHook, act, cleanup } from '@testing-library/react-hooks'
import { useStringFilter } from './useStringFilter'

describe('useStringFilter()', () => {
  const data = [
    { id: 1, name: 'one' },
    { id: 2, name: 'two' },
    { id: 13, name: 'thirteen' },
  ]

  type Keys = keyof typeof data[0]
  const ALL_KEYS: Array<Keys> = Object.keys(data[0]) as Keys[]

  beforeEach(() => {
    jest.resetAllMocks()
    cleanup()
  })

  it('can filter to matching strings', () => {
    const { result } = renderHook(() => useStringFilter(data, ALL_KEYS))

    act(() => result.current.setFilter('O'))
    expect(result.current.filteredItems).toMatchObject([data[0], data[1]])
  })

  it('can filter to matching numbers', () => {
    const { result } = renderHook(() => useStringFilter(data, ALL_KEYS))

    act(() => result.current.setFilter('1'))
    expect(result.current.filteredItems).toMatchObject([data[0], data[2]])
  })

  it('can have no matches', () => {
    const { result } = renderHook(() => useStringFilter(data, ALL_KEYS))

    act(() => result.current.setFilter('not'))
    expect(result.current.filteredItems).toMatchObject([])
  })

  it('refilters after items change', () => {
    // eslint-disable-next-line functional/no-let
    let items = data
    const { result, rerender } = renderHook(() => useStringFilter(items, ALL_KEYS))

    act(() => result.current.setFilter('not'))
    expect(result.current.filteredItems).toMatchObject([])

    items = [...data, { id: 10, name: 'a nothing' }]
    rerender()

    expect(result.current.filteredItems).toMatchObject([items[3]])
  })

  it('can provide custom string conversion functions', () => {
    const { result } = renderHook(() =>
      useStringFilter(data, ALL_KEYS, {
        name: (value) => `name:${value}`,
      }),
    )
    act(() => result.current.setFilter('name:t'))
    expect(result.current.filteredItems).toMatchObject([data[1], data[2]])
  })

  it('can clear search', () => {
    const { result } = renderHook(() => useStringFilter(data, ALL_KEYS))

    act(() => result.current.setFilter('2'))
    expect(result.current.filteredItems).toMatchObject([data[1]])

    act(() => result.current.setFilter())
    expect(result.current.filteredItems).toMatchObject(data)
  })
})
