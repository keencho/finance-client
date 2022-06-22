import {useRecoilValue} from 'recoil';
import ThemeModeAtom from '@/recoil/theme-mode.atom';
import * as React from 'react';
import {ThemeProvider} from 'styled-components';
import {darkMode, lightMode} from '@/models/element/theme.model';

const CustomThemeProvider: React.FC = ({ children }): JSX.Element => {
  
  const mode = useRecoilValue(ThemeModeAtom);
  
  return (
    <ThemeProvider theme={mode === 'light' ? lightMode : darkMode}>
      {children}
    </ThemeProvider>
  )
}

export default CustomThemeProvider
