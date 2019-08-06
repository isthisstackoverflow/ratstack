import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Button from './Button'
import emojis from './emojis'

import { animateDuration as duration } from '../lib/constants'

import {
  getMaxZoom,
  getMinZoom,
  getOlMap
} from '../store/selectors'

class ZoomButtons extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.getNextState()
    this.currZoom = props.view.getZoom()
    props.olMap.on('moveend', this.updateZoom.bind(this))
  }

  getNextState () {
    const { view, minZoom, maxZoom } = this.props
    return {
      zoomOutDisabled: view.getZoom() === minZoom,
      zoomInDisabled: view.getZoom() === maxZoom
    }
  }

  getZoom (by) {
    const { view } = this.props
    return () => {
      view.animate({
        zoom: view.getZoom() + by,
        duration
      })
      this.setState(this.getNextState())
    }
  }

  updateZoom () {
    const newZoom = this.props.view.getZoom()
    if (this.currZoom !== newZoom) {
      this.currZoom = newZoom
      this.setState(this.getNextState())
    }
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

ZoomButtons.propTypes = {
  olMap: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
  maxZoom: PropTypes.number.isRequired,
  minZoom: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  olMap: getOlMap(state),
  view: getOlMap(state).getView(),
  maxZoom: getMaxZoom(state),
  minZoom: getMinZoom(state)
})

export default connect(mapStateToProps)(ZoomButtons)
