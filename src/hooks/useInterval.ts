import { useEffect, useMemo } from 'react'

export const useInterval = (callback: () => void, delay: number): void => {
  const savedCallback = useMemo(() => callback, [callback])

  useEffect(() => {
    const id = setInterval(savedCallback, delay)
    return () => clearInterval(id)
  }, [delay])
}
