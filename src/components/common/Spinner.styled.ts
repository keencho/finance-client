import styled, {css} from 'styled-components';

export const Container = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  overflow: auto;
  display: none;
  
  ${props => props.show && css`
    display: block;
  `}
`

export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1030;
  transition: opacity .15s linear;
  opacity: ${props => props.theme.mode === 'light' ? 0.4 : 0.1};
  background-color: #ffffff;
`

export const Mark = styled.div`
  position: fixed;
  width: 400px;
  height: 25px;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -200px;
  z-index: 1040;
  transition: opacity .15s linear;
  opacity: 1;
  text-align: center;
`
