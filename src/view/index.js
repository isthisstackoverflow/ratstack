import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Center from './Center'
import Corner from './Corner'
import Button from './Button'
import Options from './Options'
import Statistics from './Statistics'
import Processing from './Processing'
import ZoomButtons from './ZoomButtons'

import emojis from './emojis'

import { optionsMenuOpenSelector } from '../store/selectors'
import { toggleOptionsMenuOpen } from '../store/actions'
// import { updateColors } from '../map/update'

class View extends React.PureComponent {
  render () {
    return (
      <>
        <Corner top left>
          <ZoomButtons />
        </Corner>
        <Corner top right>
          <Button title="Toggle Options Menu" onClick={this.props.toggleOptionsMenuOpen}>{emojis.options}</Button>
        </Corner>
        <Center>
          <Options />
          <Processing />
        </Center>
        <Corner bottom left>
          <Statistics />
        </Corner>
        <Corner bottom right>
          <Button round title="End turn">{emojis.turn}</Button>
        </Corner>
      </>
    )
  }
}

View.propTypes = {
  optionsMenuOpen: PropTypes.bool.isRequired,
  toggleOptionsMenuOpen: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  optionsMenuOpen: optionsMenuOpenSelector(state)
  // testTrigger: updateColors(state)
})

const mapDispatchToProps = { toggleOptionsMenuOpen }

export default connect(mapStateToProps, mapDispatchToProps)(View)
