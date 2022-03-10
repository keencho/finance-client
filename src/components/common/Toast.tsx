import {useEffect, useState} from 'react';
import ToastRequestModel from '@/models/toast-request.model';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import ToastAtom from '@/recoil/toast.atom';
import style from '@/styles/toast.module.scss'
import ToastTypeModel from '@/models/toast-type.model';
import {Alert, AlertColor, AlertTitle} from '@mui/material';

interface ToastProps {
	show: boolean,
	title: string,
	severity: AlertColor | undefined,
	message: string,
}

interface ToastType {
	title: string,
	severity: AlertColor | undefined
}

const Toast = (): JSX.Element => {
	
	const [toastProps, setToastProps] = useState<ToastProps>({
		show: false,
		title: '',
		severity: undefined,
		message: ''
	});
	
	const toastRequest: ToastRequestModel | undefined = useRecoilValue(ToastAtom);
	const setToastRequest = useSetRecoilState(ToastAtom);
	
	const getToastType = (model: ToastTypeModel) : ToastType => {
		switch (model) {
			case ToastTypeModel.SUCCESS:
				return {
					title: '성공',
					severity: 'success'
				}
			case ToastTypeModel.INFO:
				return {
					title: '정보',
					severity: 'info'
				}
			case ToastTypeModel.WARNING:
				return {
					title: '경고',
					severity: 'warning'
				}
			case ToastTypeModel.ERROR:
				return {
					title: '에러',
					severity: 'error'
				}
		}
	}
	
	useEffect(() => {
		if (toastRequest !== undefined && toastProps.show === false) {
			
			const toastType: ToastType = getToastType(toastRequest.type);
			
			setToastRequest(undefined)
			setToastProps({
				show: true,
				message: toastRequest.message,
				title: toastType.title,
				severity: toastType.severity
			})
		}
		
	}, [toastRequest])
	
	useEffect(() => {
		if (toastProps.show === true) {
			setTimeout(() => {
				setToastProps({
					show: false,
					message: '',
					title: '',
					severity: undefined
				})
			}, 2500)
		}
	}, [toastProps]);
	
	useEffect(() => {
		return () => {
			setToastProps({
				show: false,
				message: ''
			} as ToastProps);
		}
	}, []);
	
	return (
		<div
			style={{
				opacity: toastProps.show === true ? 1 : 0,
				zIndex: toastProps.show === true ? 9999 : -1
			}}
			className={style.container}
		>
			<Alert severity={toastProps.severity}>
				<AlertTitle>{toastProps.title}</AlertTitle>
				{toastProps.message}
			</Alert>
		</div>
	)
}

export default Toast
