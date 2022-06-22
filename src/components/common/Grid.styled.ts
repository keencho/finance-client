import styled from 'styled-components';

export const GridWrapper = styled.div<{ mode: 'light' | 'dark' }>`
  
  ${props => props.mode === 'light' && `
    background-color: #F0F0F0;
  `}

  ${props => props.mode === 'dark' && `
    background-color: blue;
  `}
`
