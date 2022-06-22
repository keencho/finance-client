import styled from 'styled-components';

export const Container = styled.div<{ show: boolean }>`
  position: fixed;
  top: 10%;
  right: 10%;
  //left: 50%;
  //transform: translateX(-50%);
  min-width: 400px;
  
  opacity: ${props => props.show ? 1 : 0};
  z-index: ${props => props.show ? 9999 : -1};
`
