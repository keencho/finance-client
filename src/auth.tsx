import LayoutProps from '@/models/element/layout-props.model';
import {useEffect} from 'react';
import AccountService from '@/services/account.service';
import {useSetRecoilState} from 'recoil';
import AccountAtom from '@/recoil/account.atom';
import AuthAccountModel from '@/models/auth/auth-account.model';

const Auth = ({ children }: LayoutProps): JSX.Element => {
  const setAccountModel = useSetRecoilState<AuthAccountModel>(AccountAtom);
  
  useEffect(() => {
    async function doTask() {
      await AccountService.checkAndSetAuth(setAccountModel);
    }

    doTask()
  }, [])
  
  return (
    <>
      {children}
    </>
  )
  
}

export default Auth
