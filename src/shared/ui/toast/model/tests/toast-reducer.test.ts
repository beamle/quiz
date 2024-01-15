import { selectToastMessage, showToast, toastReducer } from '../..'

describe('toastReducer', () => {
  const initialState = {
    toastMessage: '',
  }

  test('should handle TOAST/SHOW_TOAST action', () => {
    const action = showToast('Test Toast Message')
    const newState = toastReducer(initialState, action)

    expect(newState.toastMessage).toBe('Test Toast Message')
  })

  test('should select the toast message from the state', () => {
    const state: any = {
      toast: {
        toastMessage: 'Test Toast Message',
      },
    }

    const selectedToastMessage = selectToastMessage(state)

    expect(selectedToastMessage).toBe('Test Toast Message')
  })
})
