import {useEffect, useState} from 'react';
import ToastRequestModel from '@/models/recoil/toast-request.model';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import ToastAtom from '@/recoil/toast.atom';
import ToastTypeModel from '@/models/recoil/toast-type.model';
import {Alert} from 'react-bootstrap';
import {FaInfoCircle} from 'react-icons/all';
import {Container} from '@/components/common/Toast.styled';
import classNames from 'classnames';

interface ToastProps {
	show: boolean,
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
				variant: toastType.severity
			})
		}
		
	}, [toastRequest])
	
	useEffect(() => {
		if (toastProps.show) {
			setTimeout(() => {
				setToastProps({
					show: false,
					message: '',
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
		<Container show={toastProps.show}>
			<Alert variant={toastProps.variant} className={classNames('d-flex', 'align-items-center')}>
				<FaInfoCircle/>
				<span className={'ms-2'}>{toastProps.message}</span>
			</Alert>
		</Container>
	)
}

export default Toast
