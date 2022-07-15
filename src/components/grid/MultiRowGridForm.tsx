import {Form as BootstrapForm} from 'react-bootstrap';
import {MultiRowGridFormModel} from '@/models/grid/multi-row-grid.model';
import MultiRowGrid from '@/components/grid/MultiRowGrid';
import {FormEvent, forwardRef} from 'react';

const MultiRowGridForm = forwardRef<HTMLFormElement, MultiRowGridFormModel>((props, ref) => {
	
	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		
		const formData = new FormData(event.currentTarget);
		const fieldValues = Object.fromEntries(formData.entries());
		props.formEvent(fieldValues)
	}
	
	const onChange = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		
		if (!props.observedKey) {
			return;
		}
		
		const target = event.target as HTMLInputElement;
		if (props.observedKey.some(key => key === target.name)) {
			const formData = new FormData(event.currentTarget);
			const fieldValues = Object.fromEntries(formData.entries());
			props.formEvent(fieldValues)
		}
	}
	
	return (
		<BootstrapForm onChange={onChange} onSubmit={onSubmit} ref={ref}>
			<MultiRowGrid {...props} />
		</BootstrapForm>
	)
});

export default MultiRowGridForm
