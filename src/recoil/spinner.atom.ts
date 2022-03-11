import {atom} from 'recoil';

const SpinnerAtom = atom<boolean>({
  key: 'spinner',
  default: false
});

export default SpinnerAtom
