import { useEffect } from 'react'

export const useInterval = (callback: () => void, delay: number): void => {
  useEffect(() => {
    const tick = () => {
      callback()
    }
    const id = setInterval(tick, delay)
    return () => clearInterval(id)
  }, [delay])
}
