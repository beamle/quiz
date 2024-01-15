import { AppRootStateType, AppThunkDispatch } from 'app/store'
import { Dispatch } from 'redux'
import clauses from 'shared/assets/text/clauses.json'

const initialState = {
  toastMessage: '',
}

export const toastReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'TOAST/SHOW_TOAST': {
      return {
        ...state,
        toastMessage: action.payload,
      }
    }
    default:
      return state
  }
}

export const showAnswerResultToastTC = (isCorrect: boolean) => {
  return (dispatch: AppThunkDispatch) => {
    const message = isCorrect ? clauses.CorrectAnswer : clauses.WrongAnswer

    dispatch(showToast(message))
  }
}

const showToast = (message: string) => {
  return { payload: message, type: 'TOAST/SHOW_TOAST' }
}

type ActionsType = ReturnType<typeof showToast>

export const selectToastMessage = (state: AppRootStateType) => state.toast.toastMessage
