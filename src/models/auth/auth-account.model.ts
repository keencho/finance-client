import AuthStatus from '@/models/auth/auth-status.model';
import { AccountModel } from '@/models/auth/account.model';

export default interface AuthAccountModel {
  authStatus: AuthStatus
  account: AccountModel | undefined
}
