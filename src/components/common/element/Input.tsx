import {Input as StyledInput} from '@/components/common/element/Input.styled';

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
		/>
	)
}

export default Input
