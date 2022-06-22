import {atom} from 'recoil';

const ThemeModeAtom = atom<'light' | 'dark'>({
  default: 'light',
  key: 'themeModeAtom'
});

export default ThemeModeAtom
