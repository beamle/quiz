import { TypedUseSelectorHook, useSelector } from 'react-redux'

import quizReducer from 'app/app-reducer'
import { combineReducers, legacy_createStore as createStore } from 'redux'

const rootReducer = combineReducers({
  app: quizReducer,
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// @ts-ignore
window.store = store
