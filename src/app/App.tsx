import { initiateApp, selectAppStatus } from 'app/model'
import { useAppDispatch, useAppSelector } from 'app/store'
import { Quiz } from 'features'
import { Button, Loader, Typography } from 'shared'
import { EsLogo } from 'shared/assets/icons'

import s from './App.module.scss'

import clauses from '../shared/assets/text/clauses.json'

const App = () => {
  const dispatch = useAppDispatch()
  const appStatus = useAppSelector(selectAppStatus)
  const startQuiz = () => dispatch(initiateApp(true))

  return (
    <div className={s.app}>
      <Loader delay={2000} />
      {!appStatus && (
        <div className={s.introduction}>
          <Typography as={'h2'} variant={'h2'}>
            {clauses.IntroductionText}
          </Typography>
          <Typography as={'h6'} variant={'h6'}>
            *{clauses.Hint}
          </Typography>
          <Button onClick={startQuiz}>Alusta!</Button>
          <div className={s.pattern} />
        </div>
      )}
      {appStatus && (
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
