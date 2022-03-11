import {useEffect, useState} from 'react';
import ToastRequestModel from '@/models/recoil/toast-request.model';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import ToastAtom from '@/recoil/toast.atom';
import style from '@/styles/toast.module.scss'
import ToastTypeModel from '@/models/recoil/toast-type.model';
import {Alert} from 'react-bootstrap';
import {FaInfoCircle} from 'react-icons/all';

interface ToastProps {
	show: boolean,
	title: string,
	variant: string,
	message: string,
}

interface ToastType {
	title: string,
	severity: string
}

const Toast = (): JSX.Element => {
	
	const [toastProps, setToastProps] = useState<ToastProps>({
		show: false,
		title: '',
		variant: '',
		message: ''
	});
	
	const toastRequest: ToastRequestModel | undefined = useRecoilValue(ToastAtom);
	const setToastRequest = useSetRecoilState(ToastAtom);
	
	// https://react-bootstrap.github.io/components/alerts/
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
					severity: 'danger'
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
				variant: toastType.severity
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
					variant: ''
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
			<Alert variant={toastProps.variant}>
				<p>
					<FaInfoCircle/>
					<span style={{ marginLeft: '10px' }}>
						{toastProps.title}
					</span>
				</p>
				<span>{toastProps.message}</span>
			</Alert>
		</div>
	)
}

export default Toast
