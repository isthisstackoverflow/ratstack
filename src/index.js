import './styles.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import View from './view'
import store from './store'
import renderMap from './view/renderMap'

const target = 'map-boss'
const center = [10.01534, 53.57532]

const map = renderMap(center, target)
ReactDOM.render(
  <Provider store={store}>
    <View map={map} />
  </Provider>,
  document.getElementById('user-interface')
)
