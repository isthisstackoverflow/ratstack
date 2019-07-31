import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledEmojiButton = styled.button`
  background: white;
  color: palevioletred;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const EmojiButton = ({ emoji, children }) => (
  <StyledEmojiButton>
    <span>{emoji}</span>
    -oh boi-
    <span>{children}</span>
  </StyledEmojiButton>
)

EmojiButton.displayName = 'EmojiButton'
EmojiButton.propTypes = {
  emoji: PropTypes.string,
  children: PropTypes.string
}

export default EmojiButton
