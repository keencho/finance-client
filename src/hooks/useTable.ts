import {TableHookModel, TableModel} from '@/models/table/table.model';
import {ColumnDef} from '@tanstack/react-table';

const useTable = (props: TableHookModel): TableModel => {
	
	const columDef: ColumnDef<any>[] = props.columnDef.map(column => {
		return {
			header: column.header,
			accessorKey: column.accessor,
			cell: info => info.getValue()
		}
	});
	
	const countOption = () => {
		if (props.countOption === undefined) {
			return {
				show: false,
				count: 0
			}
		}
		
		return {
			show: true,
			count: props.countOption.countData === true ? props.data.length : props.countOption.count!
		}
	}
	
	return {
		data: props.data,
		columnDef: columDef,
		usePaging: props.usePaging ?? false,
		size: props.size ?? 'sm',
		countOption: countOption()
	};
}

export default useTable;
