export type Requests = (() => Promise<void>)[]

export type ThrottleState<T> =
  | {
      loading: boolean
      error?: undefined
      value?: undefined
    }
  | {
      loading: true
      error?: Error | undefined
      value?: T
    }
  | {
      loading: false
      error: Error
      value?: undefined
    }
  | {
      loading: false
      error?: undefined
      value: T
    }

export type ThrottleProgress<T> = {
  totalRequests: number
  errors: Error[]
  values: T[]
  percentComplete: number
  loading: boolean
}

export type ThrottleActions<T> =
  | {
      type: 'initialise'
      totalRequests: number
    }
  | {
      type: 'requestSuccess'
      value: T
    }
  | {
      type: 'requestFailed'
      error: Error
    }
