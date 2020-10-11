import { useEffect } from 'react'

export const useInterval = (callback: () => void, delay: number): void => {
  useEffect(() => {
    const id = setInterval(() => {
      callback()
    }, delay)
    return () => clearInterval(id)
  }, [callback, delay])
}
