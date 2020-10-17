import { setCookie, getCookie, deleteCookie } from './useCookie'

describe('cookie', () => {
  it('sets and gets a cookie', () => {
    setCookie('cookie-name', 'some value')
    expect(getCookie('cookie-name')).toBe('some value')
  })

  it('deletes a cookie', () => {
    setCookie('cookie-name', 'some value')
    deleteCookie('cookie-name')
    expect(getCookie('cookie-name')).toBeUndefined()
  })
})
