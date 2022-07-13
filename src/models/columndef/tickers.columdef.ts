import {TableColumDefModel} from '@/models/table/table.model';

const TickersColumnDef: TableColumDefModel[] = [
	{
		header: '코드',
		accessor: 'code'
	},
	{
		header: '한글명',
		accessor: 'korean_name'
	},
	{
		header: '영문명',
		accessor: 'english_name'
	}
]

export default TickersColumnDef;
