import style from '@/styles/login.module.scss';
import {useState} from 'react';
import StringUtils from '@/utils/string.util';
import ToastTypeModel from '@/models/recoil/toast-type.model';
import ToastAtom from '@/recoil/toast.atom';
import {useSetRecoilState} from 'recoil';
import {Button, FloatingLabel, Form} from 'react-bootstrap';
import clsx from 'clsx';
import {IoLogInOutline} from 'react-icons/all';

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
		<div className={style.container}>
			<div className={style.iconLogin}>
				<IoLogInOutline size={'70'} />
			</div>
			<FloatingLabel
				controlId="floatingInput"
				label="아이디"
				className="mb-3"
			>
				<Form.Control
					type="email"
					placeholder="id"
					value={loginId}
					onChange={(e) => setLoginId(e.target.value)}
				/>
			</FloatingLabel>
			<FloatingLabel
				controlId="floatingPassword"
				label="비밀번호"
			>
				<Form.Control
					type="password"
					placeholder="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</FloatingLabel>
			<div className={clsx("d-grid gap-2", style.btnLogin)}>
				<Button variant="primary" onClick={onClick}>로그인</Button>
			</div>
		</div>
	)
}

export default Login
