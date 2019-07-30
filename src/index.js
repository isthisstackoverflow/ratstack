import './styles.scss'

import React from 'react'
import ReactDOM from 'react-dom'

import View from './view'
import renderMap from './view/renderMap'

const target = 'map-boss'
const center = [10.01534, 53.57532]

renderMap(center, target)
ReactDOM.render(<View />, document.getElementById('user-interface'))
