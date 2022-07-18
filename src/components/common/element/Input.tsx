import {Input as StyledInput} from '@/components/common/element/Input.styled';
import React from 'react';

interface Props {
	size?: 'sm' | 'lg'
	placeHolder?: string
	type?: 'text' | 'email' | 'password'
	name: string
}

const Input = (props: Props): JSX.Element => {
	return (
		<StyledInput
			type={props.type ?? 'text'}
			size={props.size}
			name={props.name}
			placeholder={props.placeHolder}
			onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
				if (e.key === 'Enter') {
					console.log('dma.........')
				}
			}}
		/>
	)
}

export default Input
