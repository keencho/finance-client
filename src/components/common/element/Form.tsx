import {Form as BootstrapForm} from 'react-bootstrap';

interface Props {
	children: JSX.Element | JSX.Element[]
}

const Form = (props: Props) => {
	return (
		<BootstrapForm>
			{props.children}
		</BootstrapForm>
	)
}

export default Form
