import { AppRootStateType } from 'app/store'
export const selectAppStatus = (state: AppRootStateType) => state.app.appStatus
export const selectAppLoading = (state: AppRootStateType) => state.app.isLoading
