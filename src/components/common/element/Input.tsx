import {Input as StyledInput} from '@/components/common/element/Input.styled';
import React from 'react';

interface Props {
	size?: 'sm' | 'lg'
	placeHolder?: string
	type?: 'text' | 'email' | 'password'
	name: string
	ref?: any
}

const Input = (props: Props): JSX.Element => {
	
	return (
		<StyledInput
			type={props.type ?? 'text'}
			size={props.size}
			name={props.name}
			placeholder={props.placeHolder}
		/>
	)
}

export default Input
