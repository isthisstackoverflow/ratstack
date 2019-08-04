import styled from 'styled-components'

export default styled.button`
  cursor: pointer;

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
