import { dissoc } from 'ramda'
import { useState } from 'react'

type ProductIdentifier = number | string

type Product = {
  id: ProductIdentifier
}

export const useShoppingCart = <T extends Product>() => {
  const [items, setItems] = useState<Record<ProductIdentifier, { product: T; quantity: number }>>(
    {},
  )

  const updateCart = (product: T, quantity = 1) => {
    const item = items[product.id] || { product, quantity: 0 }

    const calcQuantity = item.quantity + quantity
    setItems(
      calcQuantity > 0
        ? {
            ...items,
            [product.id]: { ...item, quantity: item.quantity + quantity },
          }
        : { ...dissoc(`${product.id}`, items) },
    )
  }

  const removeProduct = (product: T) => {
    setItems({ ...dissoc(`${product.id}`, items) })
  }

  return { items, updateCart, removeProduct }
}
