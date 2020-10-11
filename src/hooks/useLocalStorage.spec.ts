import { useLocalStorage } from './useLocalStorage'

describe('use local storage', () => {
  it('supports server side rendering', () => {
    expect(() => {
      useLocalStorage()
    }).not.toThrow()
  })
})
