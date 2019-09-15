import React from 'react'
import styled from 'styled-components'

const Styled = styled.div`
  height: 10px;
  width: 10px;
  background: red;
`

const Processing = _ => (
  <Styled>
    TOOD
  </Styled>
)

Processing.displayName = 'Processing'
Processing.propTypes = {}
Processing.defaultProps = {}

export default Processing
