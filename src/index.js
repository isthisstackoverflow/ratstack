import './styles.scss'
import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import View from './view'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <View />
  </Provider>,
  document.getElementById('user-interface')
)
