import React, { PureComponent } from 'react'
import styled from 'styled-components'

import EmojiButton from './EmojiButton'

import { rat } from '../emojis'

const OptionsMenu = styled.div`
  width: 80%;
  background: grey;
  color: white;
  margin: 0 auto;
`

const Button = styled.button`
  background: white;
  color: palevioletred;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

export default class App extends PureComponent {
  render () {
    return (
      <OptionsMenu>
        <Button>Dude</Button>
        <Button>Buttons</Button>
        <Button>LMAO</Button>
        <EmojiButton emoji={rat}>Rat</EmojiButton>
      </OptionsMenu>
    )
  }
}
