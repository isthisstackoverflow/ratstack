import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Options from './Options'

const CenterFlex = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const RedBoi = styled.div`
  background: red;
  color: cadetblue;
`

export default class View extends PureComponent {
  render () {
    return (
      <>
        <CenterFlex>
          <Options />
        </CenterFlex>
        <RedBoi>
          RATTICALISM HO!
        </RedBoi>
      </>
    )
  }
}
