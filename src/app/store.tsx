import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { quizReducer } from 'features'
import { Action, applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import { ThunkDispatch, thunk as thunkMiddleware } from 'redux-thunk'
import { toastReducer } from 'shared/ui/toast/model/toast-reducer'

const rootReducer = combineReducers({
  quiz: quizReducer,
  toast: toastReducer,
})

const middleware = applyMiddleware(thunkMiddleware)

// @ts-ignore
export const store = createStore(rootReducer, middleware)

export type AppRootStateType = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
// @ts-ignore
window.store = store

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, Action>
