import React, {useEffect} from 'react';
import AccountService from '@/services/account.service';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import AccountAtom from '@/recoil/account.atom';
import AuthAccountModel from '@/models/auth/auth-account.model';
import AuthStatus from '@/models/auth/auth-status.model';

const Auth: React.FC = ({ children }): JSX.Element => {
  const setAccountModel = useSetRecoilState<AuthAccountModel>(AccountAtom);
  const accountModel = useRecoilValue<AuthAccountModel>(AccountAtom);
  
  const getElement = (): JSX.Element => {
    if (accountModel.authStatus === AuthStatus.READY) {
      return <></>
    }
    
    return <>{children}</>
  }
  
  useEffect(() => {
    async function doTask() {
      await AccountService.checkAndSetAuth(setAccountModel);
    }

    doTask()
  }, [])
  
  return getElement()
  
}

export default Auth
