import { useState } from 'react'
import { useInterval } from './useInterval'

const INTERVAL = 2000

export const useApiPoller = <T, S>(
  apiGetRequest: (params: S) => Promise<T>,
  requestParams: S,
  processNewData: (data: T) => Promise<void>,
  interval = INTERVAL,
): void => {
  const [requestInFlight, setRequestInFlight] = useState(false)

  useInterval(() => {
    if (!requestInFlight) {
      setRequestInFlight(true)
      apiGetRequest(requestParams).then(async (data) => {
        await processNewData(data)
        setRequestInFlight(false)
      })
    }
  }, interval)
}
