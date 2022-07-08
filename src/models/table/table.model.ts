import {ColumnDef} from '@tanstack/react-table';

export interface TableHookModel {
	data: any[]
	columnDef: TableColumDefModel[]
	
	usePaging?: boolean
	size?: 'sm' | 'lg'
}

export interface TableColumDefModel {
	header: string
	accessor: string
}

export interface TableModel {
	data: any[]
	columnDef: ColumnDef<any>[]
	
	usePaging: boolean
	size: 'sm' | 'lg'
}
