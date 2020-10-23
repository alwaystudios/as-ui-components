import { Requests, ThrottleActions, ThrottleProgress, ThrottleState } from './throttleTypes'

export const updateThrottleProgress = <T>(
  currentProgress: ThrottleProgress<T>,
  newData: ThrottleState<T>,
): ThrottleProgress<T> => {
  const errors = newData.error ? [...currentProgress.errors, newData.error] : currentProgress.errors
  const values = newData.value ? [...currentProgress.values, newData.value] : currentProgress.values

  const percentComplete =
    currentProgress.totalRequests === 0
      ? 0
      : Math.round(((errors.length + values.length) / currentProgress.totalRequests) * 100)

  const loading =
    currentProgress.totalRequests === 0
      ? false
      : errors.length + values.length < currentProgress.totalRequests

  return {
    totalRequests: currentProgress.totalRequests,
    loading,
    percentComplete,
    errors,
    values,
  }
}

export const createThrottleProgress = <T>(totalRequests: number): ThrottleProgress<T> => {
  return {
    totalRequests,
    percentComplete: 0,
    loading: false,
    errors: [],
    values: [],
  }
}

export const throttleRequests = async (requests: Requests, maxParallelRequests: number) => {
  const queue: Promise<void>[] = []

  for (const request of requests) {
    const promise = request().then((res) => {
      // eslint-disable-next-line functional/immutable-data
      queue.splice(queue.indexOf(promise), 1)
      return res
    })
    // eslint-disable-next-line functional/immutable-data
    queue.push(promise)

    if (queue.length >= maxParallelRequests) {
      await Promise.race(queue)
    }
  }

  await Promise.all(queue)
}

export const throttleReducer = <T>(
  throttleProgress: ThrottleProgress<T>,
  action: ThrottleActions<T>,
): ThrottleProgress<T> => {
  switch (action.type) {
    case 'initialise':
      return createThrottleProgress(action.totalRequests)

    case 'requestSuccess':
      return updateThrottleProgress(throttleProgress, {
        loading: false,
        value: action.value,
      })

    case 'requestFailed':
      return updateThrottleProgress(throttleProgress, {
        loading: false,
        error: action.error,
      })
  }
}
