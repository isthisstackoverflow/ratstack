import styled from 'styled-components'

export default styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: ${({ top }) => top ? '0.5em' : 'unset'};
  right: ${({ right }) => right ? '0.5em' : 'unset'};
  bottom: ${({ bottom }) => bottom ? '0.5em' : 'unset'};
  left: ${({ left }) => left ? '0.5em' : 'unset'};

  * {
    margin-bottom: 0.1em;
    &:last-child {
      margin-bottom: 0em;
    }
  }
`
