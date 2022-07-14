import {Input as StyledInput} from '@/components/common/element/Input.styled';

interface Props {
	size?: 'sm' | 'lg'
	placeHolder?: string
}

const Input = (props: Props): JSX.Element => {
	return (
		<StyledInput
			type={'text'}
			size={props.size}
			placeHolder={props.placeHolder}
		/>
	)
}

export default Input
