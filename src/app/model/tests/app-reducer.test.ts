import { InitialStateType, appReducer, initiateApp, setAppLoading } from '../index'

describe('appReducer', () => {
  const startState: InitialStateType = {
    appStatus: false,
    isLoading: false,
  }

  test('app status should be changed to true', () => {
    const action = initiateApp(true)
    const endState = appReducer(startState, action)

    expect(endState.appStatus).toBe(true)
    expect(endState.isLoading).toBe(false)
  })

  test('loading status should be changed to false', () => {
    const action = setAppLoading(false)
    const endState = appReducer(startState, action)

    expect(endState.isLoading).toBe(false)
    expect(endState.appStatus).toBe(false)
  })
})
