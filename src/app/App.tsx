import { initiateApp } from 'app/model/app-reducer'
import { useAppDispatch, useAppSelector } from 'app/store'
import { Quiz } from 'features'
import { Button, Typography } from 'shared'
import { EsLogo } from 'shared/assets/icons'

import s from './App.module.scss'

import clauses from '../shared/assets/text/clauses.json'

const App = () => {
  const dispatch = useAppDispatch()
  const appStatus = useAppSelector(state => state.app.appStatus)
  const startQuiz = () => dispatch(initiateApp(true))

  return (
    <div className={s.app}>
      {!appStatus && (
        <div className={s.introduction}>
          <Typography as={'h2'} variant={'h4'}>
            {clauses.IntroductionText}
          </Typography>
          <Button onClick={startQuiz}>Alusta!</Button>
          <Typography as={'h6'} className={s.hint} variant={'h6'}>
            *{clauses.Hint}
          </Typography>
        </div>
      )}
      {appStatus && (
        <div className={s.appContainer}>
          <EsLogo className={s.logo} />
          <div className={s.appContentWrapper}>
            {' '}
            <Quiz />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
