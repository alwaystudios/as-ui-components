import * as throttle from './throttle'
import { requestSucceededWithData, requestFailedWithError, queueRequests } from './throttleActions'

const dispatch = jest.fn()
const throttleRequests = jest.spyOn(throttle, 'throttleRequests').mockResolvedValueOnce()

describe('throttle actions', () => {
  beforeEach(jest.resetAllMocks)

  it('action requestSucceededWithData', () => {
    requestSucceededWithData<string>(dispatch)('data')
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      type: 'requestSuccess',
      value: 'data',
    })
  })

  it('action requestFailedWithError', () => {
    const error = Error('boom')
    requestFailedWithError(dispatch)(error)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      error,
      type: 'requestFailed',
    })
  })

  it('action queueRequests', async () => {
    const request = jest.fn().mockResolvedValue('data')
    const result = queueRequests<string>(2, dispatch)([request])
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      totalRequests: 1,
      type: 'initialise',
    })

    Promise.resolve(result)
    expect(throttleRequests).toHaveBeenCalledTimes(1)
  })
})
