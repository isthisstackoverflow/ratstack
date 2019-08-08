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

import { getOptionsMenuOpen } from '../store/selectors'
import { toggleOptionsMenuOpen } from '../store/actions'

class View extends React.PureComponent {
  render () {
    return (
      <>
        <Corner top left>
          <ZoomButtons />
        </Corner>
        <Corner top right>
          <Button onClick={this.props.toggleOptionsMenuOpen}>{emojis.options}</Button>
        </Corner>
        <Center>
          <Options />
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
  optionsMenuOpen: PropTypes.bool.isRequired,
  toggleOptionsMenuOpen: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  optionsMenuOpen: getOptionsMenuOpen(state)
})

const mapDispatchToProps = { toggleOptionsMenuOpen }

export { renderMap }
export default connect(mapStateToProps, mapDispatchToProps)(View)
