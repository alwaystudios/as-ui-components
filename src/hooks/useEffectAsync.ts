import { useEffect } from 'react'
import { useAsync } from './useAsync'

export const useEffectAsync = <T>(
  f: () => Promise<T>,
): {
  data: T | null
  loading: boolean
  error: boolean
  called: boolean
} => {
  const { callback, state } = useAsync(f)

  useEffect(() => {
    callback()
  }, [])

  return state
}
