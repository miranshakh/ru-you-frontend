import './static/styles.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import moment from 'moment'
import App from './Router'
import 'bulma/css/bulma.css'
import 'moment/locale/ru'

moment.locale('ru')

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
