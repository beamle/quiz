import { AppThunkDispatch } from 'app/store'
import { resetQuiz } from 'features'

const initialState: InitialStateType = {
  appStatus: false,
  isLoading: true,
}

export const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'APP/SET_APP_STATUS': {
      return { ...state, appStatus: action.payload.appStatus }
    }
    case 'APP/RESET_APP': {
      return { ...state, appStatus: false }
    }
    case 'APP/SET_LOADING': {
      return { ...state, isLoading: action.payload.isLoading }
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

export const setAppLoading = (isLoading: boolean) =>
  ({
    payload: { isLoading },
    type: 'APP/SET_LOADING',
  }) as const

export const resetApp = () => (dispatch: AppThunkDispatch) => {
  dispatch(resetAppStatus())
  dispatch(resetQuiz())
}

type InitialStateType = {
  appStatus: boolean
  isLoading: boolean
}

type ActionsType =
  | ReturnType<typeof initiateApp>
  | ReturnType<typeof resetAppStatus>
  | ReturnType<typeof setAppLoading>
