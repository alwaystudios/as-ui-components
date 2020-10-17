import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const setCookie = <T>(name: string, value?: T): void =>
  cookies.set(name, value, { path: '/' })

export const getCookie = (name: string): any => cookies.get(name)

export const deleteCookie = (name: string): void => {
  setCookie(name)
  cookies.remove(name)
}
