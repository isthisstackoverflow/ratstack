import React from 'react'

import Center from './Center'
import Corner from './Corner'
import Button from './Button'
import Options from './Options'
import Statistics from './Statistics'
import ZoomButtons from './ZoomButtons'

import renderMap from './renderMap'
import emojis from './emojis'

class View extends React.Component {
  render () {
    return (
      <>
        <Corner top left>
          <ZoomButtons />
        </Corner>
        <Corner top right>
          <Button>{emojis.options}</Button>
        </Corner>
        <Center>
          <Options />
        </Center>
        <Corner bottom left>
          <Statistics />
        </Corner>
        <Corner bottom right></Corner>
      </>
    )
  }
}

export { renderMap }
export default View
