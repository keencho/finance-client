import {MultiRowGridCell, MultiRowGridFormModel} from '@/models/grid/multi-row-grid.model';
import {RefObject, useEffect} from 'react';

interface Props extends MultiRowGridFormModel {
	ref: RefObject<HTMLFormElement>
}

const useForm = (props: Props): [
	{
		ref: React.RefObject<HTMLFormElement>;
		data: MultiRowGridCell[];
		formEvent: (values: object) => void;
		observedKey: string[] | undefined
	},
	() => boolean | undefined,
	() => any
]  => {
	
	return [
		{
			data: props.data,
			observedKey: props.observedKey,
			formEvent: props.formEvent,
			ref: props.ref
		},
		() => props.ref?.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true })),
		() => props.ref?.current?.reset()
	]
}

export default useForm
