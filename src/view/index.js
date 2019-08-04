import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Center from './Center'
import Corner from './Corner'

import Button from './Button'
import Options from './Options'
import Statistics from './Statistics'

import { getTest } from '../store/selectors'

import emojis from '../emojis'

class View extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.getNextState()
  }

  getNextState () {
    const view = this.props.map.getView()
    return {
      zoomInDisabled: view.getZoom() === view.getMaxZoom(),
      zoomOutDisabled: view.getZoom() === view.getMinZoom()
    }
  }

  getZoom (by) {
    return () => {
      const view = this.props.map.getView()
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
        <Corner top left>
          <Button
            onClick={this.getZoom(1)}
            disabled={this.state.zoomInDisabled}
          >{emojis.plus}</Button>
          <Button
            onClick={this.getZoom(-1)}
            disabled={this.state.zoomOutDisabled}
          >{emojis.minus}</Button>
        </Corner>
        <Corner top right>
          <Button>{emojis.options}</Button>
        </Corner>
        <Center>
          <Options />
          bazinga
          {this.props.test}
          <button onClick={this.props.addTest}>aaa</button>
        </Center>
        <Corner bottom left>
          <Statistics />
        </Corner>
        <Corner bottom right></Corner>
      </>
    )
  }
}

View.propTypes = {
  map: PropTypes.object.isRequired,
  test: PropTypes.string,
  addTest: PropTypes.func
}

const mapStateToProps = state => ({
  test: getTest(state)
})

const mapDispatchToProps = dispatch => ({
  addTest: () => dispatch(state => ({
    ...state,
    howDidThisWorkAgain: state.howDidThisWorkAgain + 'boing'
  }))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View)
