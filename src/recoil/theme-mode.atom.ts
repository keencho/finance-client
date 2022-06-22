import {atom} from 'recoil';
import {themeModeKey} from '@/models/element/theme.model';

const getDefault = (): 'light' | 'dark' => {
  const savedMode: any = window.localStorage.getItem(themeModeKey);
  
  if (!savedMode) {
    window.localStorage.setItem(themeModeKey, 'light');
    return 'light';
  }
  
  return savedMode;
}

const ThemeModeAtom = atom<'light' | 'dark'>({
  default: getDefault(),
  key: 'themeModeAtom'
});

export default ThemeModeAtom
