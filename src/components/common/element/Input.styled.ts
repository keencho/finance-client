import styled, {css} from 'styled-components';
import {Form} from 'react-bootstrap';

export const Input = styled(Form.Control)`
	${props => props.theme.mode === 'dark' && css`
		color: #fff;
		background-color: #212529;
		border: 1px solid #373B3E;
		
		&::placeholder {
			color: rgba(255, 255, 255, 0.7);
		}
		
		&:focus {
			background-color: #212529;
			color: #fff;
		}
	`}
`
