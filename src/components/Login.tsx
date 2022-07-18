import {useState} from 'react';
import StringUtils from '@/utils/string.util';
import ToastTypeModel from '@/models/recoil/toast-type.model';
import ToastAtom from '@/recoil/toast.atom';
import {useSetRecoilState} from 'recoil';
import classNames from 'classnames';
import {Container} from '@/components/Login.styled';
import {Icon} from '@/components/common/Icon';
import {faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons/faArrowRightToBracket';
import Button from '@/components/common/element/Button';
import FloatingLabel from '@/components/common/element/FloatingLabel';

interface LoginProps {
	login: (loginId: string, password: string) => Promise<void>
}

const Login = (props: LoginProps): JSX.Element => {
	
	const [loginId, setLoginId] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	
	const setToastRequest = useSetRecoilState(ToastAtom);
	
	const onClick = async() => {
		if (StringUtils.hasText(loginId) === false || StringUtils.hasText(password) === false) {
			setToastRequest({
				type: ToastTypeModel.ERROR,
				message: '모든 정보를 입력해주세요.'
			})
			return;
		}
		
		await props.login(loginId, password)
	}
	
	return (
		<Container>
			<Icon icon={faArrowRightToBracket} size={'4x'} className={'mb-4'} />
			<FloatingLabel
				type={'email'}
				value={loginId}
				setValue={setLoginId}
				placeholder={'아이디'}
				wrapperClassName={'mb-3'}
			/>
			<FloatingLabel
				type={'password'}
				value={password}
				setValue={setPassword}
				placeholder={'비밀번호'}
				wrapperClassName={'mb-5'}
				onEnter={onClick}
			/>
			<div className={classNames('d-grid', 'gap-2')}>
				<Button text={'로그인'} onClick={onClick} />
			</div>
		</Container>
	)
}

export default Login
