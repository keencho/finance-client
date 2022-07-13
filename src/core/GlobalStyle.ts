import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
	  
    background-color: ${props => props.theme.color.backgroundColor};
    color: ${props => props.theme.color.text}
  }
`

export default GlobalStyle;
