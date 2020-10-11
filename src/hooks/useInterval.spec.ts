import { promiseTimeout } from '@alwaystudios/as-utils'
import { cleanup, renderHook } from '@testing-library/react-hooks'
import { useInterval } from './useInterval'

describe('use interval', () => {
  beforeEach(cleanup)

  it('executes callback with a delay', async () => {
    const callback = jest.fn()
    renderHook(() => useInterval(callback, 200))
    await promiseTimeout(900)
    expect(callback).toHaveBeenCalledTimes(4)
  })
})
