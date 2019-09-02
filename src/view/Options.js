import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Button from './Button'
import emojis from './emojis'

import { optionsMenuOpenSelector } from '../store/selectors'

const OptionsMenu = styled.div`
  max-width: 80%;
  background: #099;
  padding: 32px;
`

class Options extends React.Component {
  render () {
    if (!this.props.optionsMenuOpen) {
      return null
    }

    return (
      <OptionsMenu>
        <Button>Yes</Button>
        <Button disabled>No</Button>
        <Button>{`${emojis.rat} Rat`}</Button>
        <Button>{emojis.options}</Button>
      </OptionsMenu>
    )
  }
}

Options.propTypes = {
  optionsMenuOpen: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  optionsMenuOpen: optionsMenuOpenSelector(state)
})

export default connect(mapStateToProps)(Options)
