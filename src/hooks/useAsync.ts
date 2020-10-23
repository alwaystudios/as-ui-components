import { useState, useCallback } from 'react'

export type AsyncState = {
  state: {
    data: AsyncReturnType<any> | null
    loading: boolean
    error: boolean
    called: boolean
  }
}

type AsyncReturnType<T extends (...args: any) => any> = T extends (...args: any) => Promise<infer U>
  ? U
  : T extends (...args: any) => infer U
  ? U
  : any

export const useAsync = <R extends (...args: any) => Promise<any>>(
  asyncFunction: R,
): {
  callBack: (...args: Parameters<R>) => Promise<void>
  state: {
    data: AsyncReturnType<R> | null
    loading: boolean
    error: boolean
    called: boolean
  }
} => {
  type Data = AsyncReturnType<typeof asyncFunction>

  const [data, setData] = useState<Data | null>(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [called, setCalled] = useState(false)

  type Arguments = Parameters<typeof asyncFunction>

  const callBack = useCallback(
    async (...args: Arguments) => {
      setLoading(true)
      try {
        const data = await asyncFunction(args)
        setData(data)
      } catch {
        setError(true)
      } finally {
        setCalled(true)
        setLoading(false)
      }
    },
    [asyncFunction],
  )

  return { callBack, state: { data, loading, error, called } }
}
