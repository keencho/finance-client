import {MultiRowGridCell, MultiRowGridFormModel} from '@/models/grid/multi-row-grid.model';
import React, {RefObject, useEffect} from 'react';

interface Props extends MultiRowGridFormModel {
	ref: RefObject<HTMLFormElement>
	fireSubmitEventOnPressEnter?: { input?: boolean, textarea?: boolean }
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
	
	const fireFormSubmitEvent = () => {
		return () => props.ref?.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
	}
	
	const formKeydownEvent = (e: KeyboardEvent) => {
		if (props.fireSubmitEventOnPressEnter) {
			if (e.key === 'Enter') {
				
				if (e.target instanceof HTMLInputElement) {
					if (props.fireSubmitEventOnPressEnter.input === true) {
						fireFormSubmitEvent()();
					}
				}
				
				if (e.target instanceof HTMLTextAreaElement) {
					if (props.fireSubmitEventOnPressEnter.textarea === true) {
						fireFormSubmitEvent()();
					}
				}
			}
		}
	}
	
	useEffect(() => {
		props.ref.current?.addEventListener('keydown', formKeydownEvent)
		
		return () => {
			props.ref.current?.removeEventListener('keydown', formKeydownEvent)
		}
	}, [])
	
	return [
		{
			data: props.data,
			observedKey: props.observedKey,
			formEvent: props.formEvent,
			ref: props.ref
		},
		fireFormSubmitEvent(),
		() => props.ref?.current?.reset()
	]
}

export default useForm
