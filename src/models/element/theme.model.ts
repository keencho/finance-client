import {DefaultTheme} from 'styled-components';

export const themeModeKey = 'THEME_MODE';

export const lightMode: DefaultTheme = {
  mode: 'light',
  color: {
    text: '#000',
    headerBackgroundColor: '#2d3847',
    backgroundColor: '#F0F0F0',
    gridBackgroundColor: '#fff',
    btnVariantColor: 'dark'
  },
  class: {
    inputBackgroundClass: 'bg-white',
    inputTextClass: 'text-dark'
  }
}

export const darkMode: DefaultTheme = {
  mode: 'dark',
  color: {
    text: '#fff',
    headerBackgroundColor: '#242629',
    backgroundColor: '#151519',
    gridBackgroundColor: '#242629',
    btnVariantColor: 'outline-light'
  },
  class: {
    inputBackgroundClass: 'bg-dark',
    inputTextClass: 'text-white'
  }
}
