import React from 'react'
import { Provider } from 'react-redux'

import { store } from 'app/store'
import ReactDOM from 'react-dom/client'

import './app/styles/index.scss'

import App from './app/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
