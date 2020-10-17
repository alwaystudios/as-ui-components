import { promiseTimeout } from '@alwaystudios/as-utils'
import { cleanup, renderHook } from '@testing-library/react-hooks'
import { useApiPoller } from './useApiPoller'

describe('use api poller', () => {
  beforeEach(cleanup)

  it('executes callback with a delay and processes data', async () => {
    const callback = jest.fn().mockResolvedValue('data')
    const processData = jest.fn()
    renderHook(() => useApiPoller(callback, 'params', processData, 200))
    await promiseTimeout(900)
    expect(callback).toHaveBeenCalledTimes(4)
    expect(processData).toHaveBeenCalledTimes(4)
  })

  it('throttles the api calls for slow connections', async () => {
    const callback = async () => {
      await promiseTimeout(300)
      return 'data'
    }
    const processData = jest.fn()
    renderHook(() => useApiPoller(callback, 'params', processData, 200))
    await promiseTimeout(900)
    expect(processData).toHaveBeenCalledTimes(2)
  })
})
