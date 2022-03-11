import {atom} from 'recoil';
import AuthAccountModel from '@/models/auth/auth-account.model';
import AuthStatus from '@/models/auth/auth-status.model';

const AccountAtom = atom<AuthAccountModel> ({
  key: 'account',
  default: {
    authStatus: AuthStatus.READY,
    account: undefined
  }
})

export default AccountAtom
