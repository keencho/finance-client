import LayoutProps from '@/models/element/layout-props.model';
import {useEffect} from 'react';
import AccountService from '@/services/account.service';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import AccountAtom from '@/recoil/account.atom';
import AuthAccountModel from '@/models/auth/auth-account.model';

const Auth = ({ children }: LayoutProps): JSX.Element => {
  const setAccount = useSetRecoilState<AuthAccountModel>(AccountAtom);
  
  const account = useRecoilValue<AuthAccountModel>(AccountAtom);
  useEffect(() => {
    console.log(account)
  }, [account])
  
  useEffect(() => {
    async function doTask() {
      await AccountService.checkAndSetAuth(setAccount);
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
