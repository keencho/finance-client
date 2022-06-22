import {useNavigate} from 'react-router-dom';
import {useSetRecoilState} from 'recoil';
import ToastRequestModel from '@/models/recoil/toast-request.model';
import ToastAtom from '@/recoil/toast.atom';
import AuthAccountModel from '@/models/auth/auth-account.model';
import AccountAtom from '@/recoil/account.atom';
import AccountService from '@/services/account.service';
import Path from '@/models/path.model';
import ToastTypeModel from '@/models/recoil/toast-type.model';
import AxiosUtil from '@/utils/axios.util';
import Login from '@/components/Login';

const LoginContainer = (): JSX.Element => {
  
  const navigate = useNavigate()
  
  const setToastRequest = useSetRecoilState<ToastRequestModel | undefined>(ToastAtom);
  const setAccountModel = useSetRecoilState<AuthAccountModel>(AccountAtom)
  
  const login = async(loginId: string, password: string) => {
    
    const onSuccess = async() => {
      await AccountService.checkAndSetAuth(setAccountModel);
      navigate(Path.INDEX)
    }
    
    const onFailure = (message: any) => {
      setToastRequest({
        type: ToastTypeModel.ERROR,
        message: message
      })
    }
    
    await AxiosUtil.responseHandler(
      AccountService.login(loginId, password),
      {
        onSuccess,
        onFailure
      }
    )
  }
  
  return <Login login={login} />
}

export default LoginContainer
