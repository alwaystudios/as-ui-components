import { promiseTimeout, waitUntil } from '@alwaystudios/as-utils'
import { cleanup, renderHook } from '@testing-library/react-hooks'
import { useEffectAsync } from './useEffectAsync'

describe('use effect async', () => {
  beforeEach(() => {
    jest.resetAllMocks()
    cleanup
  })

  const mock = jest.fn()

  it('executes an async function', async () => {
    const { result } = renderHook(() =>
      useEffectAsync(async () => {
        await promiseTimeout(200)
        mock()
        return 'pass'
      }),
    )

    expect(result.current.loading).toBe(true)

    await waitUntil(() => expect(mock).toHaveBeenCalledTimes(1))

    expect(result.current).toEqual({
      data: 'pass',
      loading: false,
      error: false,
      called: true,
    })
  })

  it('handles errors', async () => {
    const { result } = renderHook(() =>
      useEffectAsync(async () => {
        await promiseTimeout(200)
        mock()
        throw Error('fail')
      }),
    )

    expect(result.current.loading).toBe(true)

    await waitUntil(() => expect(mock).toHaveBeenCalledTimes(1))

    expect(result.current).toEqual({
      data: null,
      loading: false,
      error: true,
      called: true,
    })
  })
})
