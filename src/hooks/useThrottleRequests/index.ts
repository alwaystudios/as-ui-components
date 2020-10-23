import { useMemo, useReducer } from 'react'
import { createThrottleProgress, throttleReducer } from './throttle'
import { queueRequests, requestSucceededWithData, requestFailedWithError } from './throttleActions'

const MAX_PARALLEL_REQUESTS = 10

export const useThrottleRequests = <T>(maxParallelRequests = MAX_PARALLEL_REQUESTS) => {
  const [throttleProgress, dispatch] = useReducer(throttleReducer, createThrottleProgress<T>(0))

  const throttleActions = useMemo(() => {
    return {
      queueRequests: queueRequests<T>(maxParallelRequests, dispatch),
      requestSucceededWithData: requestSucceededWithData<T>(dispatch),
      requestFailedWithError: requestFailedWithError<T>(dispatch),
    }
  }, [dispatch])

  return {
    throttleProgress,
    throttleActions,
  }
}
