import { act, cleanup, renderHook } from '@testing-library/react-hooks'
import { useShoppingCart } from './useShoppingCart'

type TestProduct = {
  id: number
  name: string
}

const testProduct = (id: number): TestProduct => ({ id, name: `test-${id}` })

const testProducts = (size: number): TestProduct[] => [...Array(size)].map((_, i) => testProduct(i))

describe('use shopping cart', () => {
  beforeEach(() => {
    jest.resetAllMocks()
    cleanup
  })

  it('returns empty items for a new cart', () => {
    const { result } = renderHook(() => useShoppingCart())

    expect(result.current.items).toEqual({})
  })

  it('adds a new item to a cart', () => {
    const product = testProduct(77)
    const { result } = renderHook(() => useShoppingCart<TestProduct>())

    act(() => result.current.updateCart(product))

    expect(result.current.items).toEqual({ [product.id]: { product, quantity: 1 } })
  })

  it('adds a new item with quantity to the cart', () => {
    const product = testProduct(77)
    const { result } = renderHook(() => useShoppingCart<TestProduct>())

    act(() => result.current.updateCart(product, 7))

    expect(result.current.items).toEqual({ [product.id]: { product, quantity: 7 } })
  })

  it('decrements quantity from an existing item in the cart', () => {
    const product = testProduct(77)
    const { result } = renderHook(() => useShoppingCart<TestProduct>())

    act(() => result.current.updateCart(product, 7))
    act(() => result.current.updateCart(product, -1))

    expect(result.current.items).toEqual({ [product.id]: { product, quantity: 6 } })
  })

  it('removes an item when the quantity falls below 1', () => {
    const product = testProduct(77)
    const { result } = renderHook(() => useShoppingCart<TestProduct>())

    act(() => result.current.updateCart(product))
    act(() => result.current.updateCart(product, -1))

    expect(result.current.items).toEqual({})
  })

  it('ignores decrement to quantity for a cart without the item', () => {
    const product1 = testProduct(77)
    const product2 = testProduct(88)
    const { result } = renderHook(() => useShoppingCart<TestProduct>())

    act(() => result.current.updateCart(product1))
    act(() => result.current.updateCart(product2, -1))

    expect(result.current.items).toEqual({ [product1.id]: { product: product1, quantity: 1 } })
  })

  it('adds multiple new items to a cart', () => {
    const products = testProducts(3)
    const { result } = renderHook(() => useShoppingCart<TestProduct>())

    act(() => result.current.updateCart(products[0]))
    act(() => result.current.updateCart(products[1]))
    act(() => result.current.updateCart(products[2]))

    expect(result.current.items).toEqual({
      [products[0].id]: { product: products[0], quantity: 1 },
      [products[1].id]: { product: products[1], quantity: 1 },
      [products[2].id]: { product: products[2], quantity: 1 },
    })
  })

  it('updates quantity for an existing item in the cart', () => {
    const product = testProduct(77)
    const { result } = renderHook(() => useShoppingCart<TestProduct>())

    act(() => result.current.updateCart(product, 4))
    act(() => result.current.updateCart(product, 5))

    expect(result.current.items).toEqual({ [product.id]: { product, quantity: 9 } })
  })

  it('removes an item from the cart', () => {
    const products = testProducts(3)
    const { result } = renderHook(() => useShoppingCart<TestProduct>())

    act(() => result.current.updateCart(products[0]))
    act(() => result.current.updateCart(products[1]))
    act(() => result.current.updateCart(products[2]))
    act(() => result.current.removeProduct(products[1]))

    expect(result.current.items).toEqual({
      [products[0].id]: { product: products[0], quantity: 1 },
      [products[2].id]: { product: products[2], quantity: 1 },
    })
  })
})
