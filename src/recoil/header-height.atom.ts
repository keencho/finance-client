import { atom } from 'recoil';

const HeaderHeightAtom = atom<number>({
  key: 'headerHeightAtom',
  default: 0
});

export default HeaderHeightAtom
