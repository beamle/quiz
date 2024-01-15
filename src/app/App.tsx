import { useEffect } from 'react'

import { initiateApp, selectAppLoading, selectAppStatus, setAppLoading } from 'app/model'
import { useAppDispatch, useAppSelector } from 'app/store'
import { Introduction } from 'entities/index'
import { Quiz } from 'features'
import { Loader } from 'shared'
import { EsLogo } from 'shared/assets/icons'

import s from './App.module.scss'

const App = () => {
  const dispatch = useAppDispatch()
  const appStatusActive = useAppSelector(selectAppStatus)
  const isLoading = useAppSelector(selectAppLoading)
  const startQuiz = () => dispatch(initiateApp(true))

  // Data fetch imitation
  useEffect(() => {
    setTimeout(() => {
      dispatch(setAppLoading(false))
    }, 2000)
  }, [dispatch])

  return (
    <div className={s.app}>
      <Loader loading={isLoading} />
      {!appStatusActive && !isLoading && <Introduction onClick={startQuiz} />}
      {appStatusActive && (
        <div className={s.appContainer}>
          <EsLogo className={s.logo} />
          <div className={s.appContentWrapper}>
            <Quiz />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
