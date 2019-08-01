import React, { PureComponent } from 'react'
import styled from 'styled-components'

import EmojiButton from './EmojiButton'

import emojis from '../emojis'

const OptionsMenu = styled.div`
  max-width: 80%;
  background: #099;
  padding: 32px;
`

export default class App extends PureComponent {
  render () {
    return (
      <OptionsMenu>
        <EmojiButton>Yes</EmojiButton>
        <EmojiButton disabled={true}>No</EmojiButton>
        <EmojiButton emoji={emojis.rat}>Rat</EmojiButton>
        <EmojiButton emoji={emojis.options} />
      </OptionsMenu>
    )
  }
}
