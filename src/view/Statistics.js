import React from 'react'
import styled from 'styled-components'

const StyledStatistics = styled.ul`
  background: #CCC;
  color: black;

  font-size: 18px;
  line-height: 18px;
  border: 2px solid black;
  border-radius: 6px;

  padding: 8px 4px;

  &:hover {
    background: #FFF;
  }
`

const StyledData = styled.li`
  position: relative;
  list-style-type: none;
`

/** better make this a module */
const LeftPad = styled.span`
  float: right;
  padding-left: 1em;
`

const Statistics = _ => (
  <StyledStatistics>
    <StyledData>Rats <LeftPad>123</LeftPad></StyledData>
    <StyledData>Eat <LeftPad>1</LeftPad></StyledData>
    <StyledData>Think <LeftPad>12</LeftPad></StyledData>
    <StyledData>Obedience <LeftPad>1234</LeftPad></StyledData>
  </StyledStatistics>
)

Statistics.displayName = 'Statistics'
Statistics.propTypes = {}
Statistics.defaultProps = {}

export default Statistics
