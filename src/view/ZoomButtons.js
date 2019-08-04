import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Button from './Button'
import emojis from './emojis'

import {
  getMaxZoom,
  getMinZoom
} from '../store/selectors'

class ZoomButtons extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.getNextState()
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
        duration: 200
      })
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
  view: PropTypes.object.isRequired,
  maxZoom: PropTypes.number.isRequired,
  minZoom: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  maxZoom: getMaxZoom(state),
  minZoom: getMinZoom(state)
})

export default connect(mapStateToProps)(ZoomButtons)
