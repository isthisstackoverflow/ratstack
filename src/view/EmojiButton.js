import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledEmojiButton = styled.button`
  cursor: pointer;

  background: #CCC;
  color: black;

  font-size: 18px;
  line-height: 18px;
  border: 2px solid black;
  border-radius: 6px;

  margin: 2px;
  padding: 8px 4px;

  &:hover {
    background: #FFF;
  }

  &:focus {
    border: 2px solid white;
  }

  &:active {
    background: #AAA;
  }

  &:disabled {
    cursor: default;
    background: #888;
  }
`

const EmojiButton = ({ emoji, children, disabled }) => console.log(disabled) || (
  <StyledEmojiButton disabled={disabled}>
    {emoji} {children}
  </StyledEmojiButton>
)

EmojiButton.displayName = 'EmojiButton'
EmojiButton.propTypes = {
  emoji: PropTypes.string,
  children: PropTypes.string,
  disabled: PropTypes.bool
}
EmojiButton.defaultProps = {
  disabled: false
}

export default EmojiButton
