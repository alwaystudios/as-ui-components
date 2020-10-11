import { useWindow } from './useWindow'

describe('use window', () => {
  it('supports server side rendering', () => {
    expect(() => {
      useWindow()
    }).not.toThrow()
  })
})
