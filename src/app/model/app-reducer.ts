import { AppThunkDispatch } from 'app/store'
import { resetQuiz } from 'features'

const initialState: InitialStateType = {
  appStatus: false,
}

export const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'APP/SET_APP_STATUS': {
      return { ...state, appStatus: action.payload.appStatus }
    }
    case 'APP/RESET_APP': {
      return { ...state, appStatus: false }
    }

    default:
      return state
  }
}

export const initiateApp = (appStatus: boolean) =>
  ({
    payload: { appStatus },
    type: 'APP/SET_APP_STATUS',
  }) as const

export const resetAppStatus = () =>
  ({
    type: 'APP/RESET_APP',
  }) as const

export const resetApp = () => (dispatch: AppThunkDispatch) => {
  dispatch(resetAppStatus())
  dispatch(resetQuiz())
  // dispatch(resetAppStatus())
}

type InitialStateType = {
  appStatus: boolean
}

type ActionsType = ReturnType<typeof initiateApp> | ReturnType<typeof resetAppStatus>
