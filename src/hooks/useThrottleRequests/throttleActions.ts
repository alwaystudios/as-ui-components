import { throttleRequests } from './throttle'
import { ThrottleActions, Requests } from './throttleTypes'

export const requestSucceededWithData = <T>(dispatch: (value: ThrottleActions<T>) => void) => (
  value: T,
) => {
  dispatch({
    type: 'requestSuccess',
    value,
  })
}

export const requestFailedWithError = <T>(dispatch: (value: ThrottleActions<T>) => void) => (
  error: Error,
) => {
  dispatch({
    type: 'requestFailed',
    error,
  })
}

export const queueRequests = <T>(
  maxParallelRequests: number,
  dispatch: (value: ThrottleActions<T>) => void,
) => (requestsToMake: Requests) => {
  dispatch({
    type: 'initialise',
    totalRequests: requestsToMake.length,
  })

  return throttleRequests(requestsToMake, maxParallelRequests)
}
