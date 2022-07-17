import {useRecoilValue} from 'recoil';
import AccountAtom from '@/recoil/account.atom';
import {AccountType} from '@/models/auth/account.model';

interface Props {
	element: JSX.Element
}

const AdminRenderElement = (props: Props): JSX.Element => {
	
	const accountModel = useRecoilValue(AccountAtom);
	
	return accountModel.account && accountModel.account.type === AccountType.ADMIN ? props.element : <></>
}

export default AdminRenderElement