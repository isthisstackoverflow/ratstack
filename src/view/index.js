import React, { PureComponent } from 'react'
import styled from 'styled-components'

import EmojiButton from './EmojiButton'

import Options from './Options'
import Statistics from './Statistics'

import emojis from '../emojis'

const Center = styled.div`
  position: fixed;
  max-height: 90%;
  max-width: 90%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`

const TopRight = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0.5em;
  right: 0.5em;
`

const BottomRight = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0.5em;
  left: 0.5em;
`

export default class View extends PureComponent {
  render () {
    return (
      <>
        <TopRight>
          <EmojiButton emoji={emojis.options} />
        </TopRight>
        <Center>
          <Options />
        </Center>
        <BottomRight>
          <Statistics />
        </BottomRight>
      </>
    )
  }
}
