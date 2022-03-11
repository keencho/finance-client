import {atom} from 'recoil';
import ToastRequestModel from '@/models/recoil/toast-request.model';

const ToastAtom = atom<ToastRequestModel | undefined>({
	key: 'toast',
	default: undefined
})

export default ToastAtom
