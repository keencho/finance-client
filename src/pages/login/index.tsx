import Login from '@/components/Login';
import AccountService from '@/services/account.service';
import {useNavigate} from 'react-router-dom';
import Path from '@/models/path.model';
import AxiosUtil from '@/utils/axios.util';
import {useSetRecoilState} from 'recoil';
import ToastAtom from '@/recoil/toast.atom';
import ToastTypeModel from '@/models/recoil/toast-type.model';
import AccountAtom from '@/recoil/account.atom';
import AuthAccountModel from '@/models/auth/auth-account.model';
import ToastRequestModel from '@/models/recoil/toast-request.model';

const LoginPage = (): JSX.Element => {
	
	const navigate = useNavigate()
	
	const setToastRequest = useSetRecoilState<ToastRequestModel | undefined>(ToastAtom);
	const setAccount = useSetRecoilState<AuthAccountModel>(AccountAtom)
	
	const login = async(loginId: string, password: string) => {
		
		const onSuccess = async() => {
			await AccountService.checkAndSetAuth(setAccount);
			navigate(Path.Web.INDEX)
		}
		
		const onFailure = (message: any) => {
			setToastRequest({
				type: ToastTypeModel.ERROR,
				message: message
			})
		}
		
		await AxiosUtil.responseHandler(
			AccountService.login(loginId, password),
			onSuccess,
			onFailure
		)
	}
	
	return <Login login={login} />
}

export default LoginPage
