import style from '@/styles/login.module.scss';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import {blue} from '@mui/material/colors';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from 'react';
import StringUtils from '@/utils/string.util';
import ToastTypeModel from '@/models/toast-type.model';
import ToastAtom from '@/recoil/toast.atom';
import {useSetRecoilState} from 'recoil';

interface LoginProps {
	login: (loginId: string, password: string) => Promise<void>
}

const Login = (props: LoginProps): JSX.Element => {
	
	const [loginId, setLoginId] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	
	const setToastRequest = useSetRecoilState(ToastAtom);
	
	const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		
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
			<Container component="main" maxWidth="xs">
				<CssBaseline/>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{m: 1, bgcolor: blue[600]}}>
						<LockOutlinedIcon/>
					</Avatar>
					<Typography component="h1" variant="h5">
						로그인
					</Typography>
					<Box component="form" onSubmit={onSubmit} noValidate sx={{mt: 1}}>
						<TextField
							margin="normal"
							value={loginId}
							onChange={event => setLoginId(event.target.value)}
							required
							fullWidth
							label="로그인 ID"
							autoComplete="loginId"
							autoFocus
						/>
						<TextField
							margin="normal"
							value={password}
							onChange={event => setPassword(event.target.value)}
							required
							fullWidth
							label="비밀번호"
							type="password"
							autoComplete="current-password"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{mt: 3, mb: 2}}
						>
							로그인
						</Button>
					</Box>
				</Box>
			</Container>
		</div>
	)
}

export default Login