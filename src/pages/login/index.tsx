import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {blue} from '@mui/material/colors';
import {useState} from 'react';
import style from '@/styles/login.module.scss'

const Login = (): JSX.Element => {
	
	const [loginId, setLoginId] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	
	const login = async(e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		console.log(loginId)
	}
	
	return (
		<div className={style.container}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: blue[600] }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						로그인
					</Typography>
					<Box component="form" onSubmit={login} noValidate sx={{ mt: 1 }}>
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
							sx={{ mt: 3, mb: 2 }}
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