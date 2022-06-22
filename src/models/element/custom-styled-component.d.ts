import 'styled-components'
import {ButtonVariant} from 'react-bootstrap/types';

declare module 'styled-components' {
  export interface DefaultTheme  {
    mode: 'light' | 'dark',
    color: {
      text: string
      headerBackgroundColor: string
      backgroundColor: string
      gridBackgroundColor: string
      btnVariantColor: ButtonVariant
    },
    class: {
      inputBackgroundClass: string
      inputTextClass: string
    }
  }
}
