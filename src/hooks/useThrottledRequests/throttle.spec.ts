import { waitUntil } from '@alwaystudios/as-utils'
import {
  createThrottleProgress,
  throttleReducer,
  throttleRequests,
  updateThrottleProgress,
} from './throttle'
import { ThrottleActions } from './throttleTypes'

describe('throttle progress', () => {
  describe('updateThrottleProgress', () => {
    it('new data with value', () => {
      const newData = {
        loading: false,
        value: 'some data',
      }
      expect(updateThrottleProgress<string>(createThrottleProgress<string>(2), newData)).toEqual({
        errors: [],
        loading: true,
        percentComplete: 50,
        totalRequests: 2,
        values: ['some data'],
      })
    })

    it('new data with error', () => {
      const newData = {
        loading: false,
        error: Error('boom'),
      }
      expect(updateThrottleProgress<string>(createThrottleProgress<string>(2), newData)).toEqual({
        errors: [Error('boom')],
        loading: true,
        percentComplete: 50,
        totalRequests: 2,
        values: [],
      })
    })

    it('new data with value completes loading', () => {
      const throttleProgress = createThrottleProgress<string>(2)
      const newData = {
        loading: false,
        value: 'some data',
      }
      const updatedProgress = updateThrottleProgress<string>(throttleProgress, newData)
      expect(updateThrottleProgress<string>(updatedProgress, newData)).toEqual({
        errors: [],
        loading: false,
        percentComplete: 100,
        totalRequests: 2,
        values: ['some data', 'some data'],
      })
    })
  })

  describe('createThrottleProgress', () => {
    it('creates throttle progress', () => {
      expect(createThrottleProgress<string>(2)).toEqual({
        errors: [],
        loading: false,
        percentComplete: 0,
        totalRequests: 2,
        values: [],
      })
    })
  })

  describe('throttleRequests', () => {
    it('throttles requests', async () => {
      const request = jest.fn().mockResolvedValue('test')
      await throttleRequests([request, request, request], 1)
      await waitUntil(() => {
        expect(request).toHaveBeenCalledTimes(3)
      })
    })
  })

  describe('throttleReducer', () => {
    it('initialise state', () => {
      const action = {
        type: 'initialise',
        totalRequests: 10,
      } as ThrottleActions<string>
      const state = throttleReducer<string>(createThrottleProgress<string>(10), action)
      expect(state).toEqual({
        errors: [],
        loading: false,
        percentComplete: 0,
        totalRequests: 10,
        values: [],
      })
    })

    it('requestSuccess state', () => {
      const action = {
        type: 'requestSuccess',
        value: 'some value',
      } as ThrottleActions<string>
      const state = throttleReducer<string>(createThrottleProgress<string>(10), action)
      expect(state).toEqual({
        errors: [],
        loading: true,
        percentComplete: 10,
        totalRequests: 10,
        values: ['some value'],
      })
    })

    it('requestFailed state', () => {
      const action = {
        type: 'requestFailed',
        error: Error('boom'),
      } as ThrottleActions<string>
      const state = throttleReducer<string>(createThrottleProgress<string>(10), action)
      expect(state).toEqual({
        errors: [Error('boom')],
        loading: true,
        percentComplete: 10,
        totalRequests: 10,
        values: [],
      })
    })
  })
})
