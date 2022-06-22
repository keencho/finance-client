import AxiosUtil from '@/utils/axios.util';
import Path from '@/models/path.model';
import {SetterOrUpdater} from 'recoil';
import AuthAccountModel from '@/models/auth/auth-account.model';
import AuthStatus from '@/models/auth/auth-status.model';

export default class AccountService {
  
  static async checkAndSetAuth(setAccount: SetterOrUpdater<AuthAccountModel>): Promise<void> {
  
    const onSuccess = (data: any) => {
      setAccount({
        authStatus: AuthStatus.SUCCESS,
        account: {
          id: data.id,
          loginId: data.login_id,
          name: data.name
        }
      })
    }

    const onFailure = () => {
      setAccount({
        authStatus: AuthStatus.FAIL,
        account: undefined
      })
    }

    await AxiosUtil.responseHandler(
      AxiosUtil.request('POST', '/account/v1/check-auth'),
      {
        onSuccess,
        onFailure
      }
    )
  }
  
  static async login(loginId: string, password: string): Promise<any> {
    const params: any = {
      login_id: loginId,
      password: password
    }
    return await AxiosUtil.request('POST', '/account/v1/login', params);
  }
  
  static async logout(): Promise<any> {
    return await AxiosUtil.request('POST', '/account/v1/logout');
  }
}
