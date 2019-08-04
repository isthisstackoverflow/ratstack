import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Button from './Button'

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
        <Button>Yes</Button>
        <Button disabled>No</Button>
        <Button>{`${emojis.rat} Rat`}</Button>
        <Button>{emojis.options}</Button>
      </OptionsMenu>
    )
  }
}
