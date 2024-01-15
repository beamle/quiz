import { Quiz } from 'features'
import { EsLogo } from 'shared/assets/icons'

import s from './App.module.scss'

const App = () => {
  return (
    <div className={s.app}>
      <div className={s.appContainer}>
        <EsLogo className={s.logo} />
        <div className={s.appContentWrapper}>
          <Quiz />
        </div>
      </div>
    </div>
  )
}

export default App
