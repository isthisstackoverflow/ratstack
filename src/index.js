import './styles.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import View, { renderMap } from './view'
import store from './store'

const center = [10.01534, 53.57532]

const map = renderMap(center, 'map-boss')
ReactDOM.render(
  <Provider store={store(map)}>
    <View />
  </Provider>,
  document.getElementById('user-interface')
)
