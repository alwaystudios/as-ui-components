import { promiseTimeout } from '@alwaystudios/as-utils'
import { act, cleanup, renderHook } from '@testing-library/react-hooks'
import { waitUntil } from '../waitUntil'
import { useAsync } from './useAsync'

describe('use async', () => {
  beforeEach(() => {
    jest.resetAllMocks()
    cleanup
  })

  const mock = jest.fn()

  it('executes an async function', async () => {
    const { result } = renderHook(() =>
      useAsync(async () => {
        await promiseTimeout(200)
        mock()
        return 'pass'
      }),
    )

    act(() => {
      result.current.callback()
    })

    expect(result.current.state.loading).toBe(true)

    await waitUntil(() => expect(mock).toHaveBeenCalledTimes(1))

    expect(result.current.state).toEqual({
      data: 'pass',
      loading: false,
      error: false,
      called: true,
    })
  })

  it('handles errors', async () => {
    const { result } = renderHook(() =>
      useAsync(async () => {
        await promiseTimeout(200)
        mock()
        throw Error('fail')
      }),
    )

    act(() => {
      result.current.callback()
    })

    expect(result.current.state.loading).toBe(true)

    await waitUntil(() => expect(mock).toHaveBeenCalledTimes(1))

    expect(result.current.state).toEqual({
      data: null,
      loading: false,
      error: true,
      called: true,
    })
  })
})
