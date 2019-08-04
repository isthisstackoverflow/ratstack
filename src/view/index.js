import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Center from './Center'
import Corner from './Corner'

import Button from './Button'
import Options from './Options'
import Statistics from './Statistics'
import ZoomButtons from './ZoomButtons'

import renderMap from './renderMap'
import emojis from './emojis'

import { getTest } from '../store/selectors'

class View extends React.Component {
  render () {
    return (
      <>
        <Corner top left>
          <ZoomButtons view={this.props.map.getView()} />
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

export { renderMap }
