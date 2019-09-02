import React from 'react'

import Button from './Button'
import emojis from './emojis'

import { animateDuration as duration } from '../lib/constants'
import map from '../map'

class ZoomButtons extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.getNextState()
    map.on('moveend', () =>
      this.setState(this.getNextState())
    )
  }

  getNextState () {
    const view = map.getView()
    return {
      zoomOutDisabled: view.getZoom() === view.getMinZoom(),
      zoomInDisabled: view.getZoom() === view.getMaxZoom()
    }
  }

  getZoom (by) {
    const view = map.getView()
    return () => view.animate({
      zoom: view.getZoom() + by,
      duration
    })
  }

  render () {
    return (
      <>
        <Button
          onClick={this.getZoom(1)}
          disabled={this.state.zoomInDisabled}
        >
          {emojis.plus}
        </Button>
        <Button
          onClick={this.getZoom(-1)}
          disabled={this.state.zoomOutDisabled}
        >
          {emojis.minus}
        </Button>
      </>
    )
  }
}

export default ZoomButtons
