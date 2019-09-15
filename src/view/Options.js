import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Button from './Button'
import emojis from './emojis'

import { optionsMenuOpenSelector } from '../store/selectors'
import { toggleOptionsMenuOpen } from '../store/actions'

const OptionsMenu = styled.div`
  position: relative;
  max-width: 80%;
  background: rgba(0,0,0,0.2);
  padding: 42px;
  border: 2px solid black;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  ${Button}:not(:last-child) {
    margin-bottom: 0.2em;
  }
`

const CloseButton = styled(Button)`
  position: absolute;
  top: 2px;
  right: 2px;
`

class Options extends React.Component {
  render () {
    const { optionsMenuOpen, toggleOptionsMenuOpen } = this.props

    if (!optionsMenuOpen) {
      return null
    }

    return (
      <OptionsMenu>
        <CloseButton onClick={toggleOptionsMenuOpen}>{emojis.no}</CloseButton>
        <Button>New Game</Button>
        <Button>Save Game</Button>
        <Button>Load Game</Button>
        <Button>Tutorial</Button>
        <Button>Crash Browser</Button>
        <Button disabled>No</Button>
        <Button>{`${emojis.rat} Rat`}</Button>
        <Button>{emojis.options}</Button>
      </OptionsMenu>
    )
  }
}

Options.propTypes = {
  optionsMenuOpen: PropTypes.bool.isRequired,
  toggleOptionsMenuOpen: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  optionsMenuOpen: optionsMenuOpenSelector(state)
})

const mapDispatchToProps = { toggleOptionsMenuOpen }

export default connect(mapStateToProps, mapDispatchToProps)(Options)
