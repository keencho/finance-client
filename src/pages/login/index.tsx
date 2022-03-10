import Login from '@/components/Login';

const LoginPage = (): JSX.Element => {
	
	const login = async(loginId: string, password: string) => {
		console.log(loginId, password);
	}
	
	return <Login login={login} />
}

export default LoginPage