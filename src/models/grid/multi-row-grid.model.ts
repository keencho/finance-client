import {MutableRefObject} from 'react';

export interface MultiRowGridItem {
	header: string
	body: JSX.Element | string
	lg?: number
	wrapByCellText?: boolean
	condition?: boolean
}

export interface MultiRowGridCell {
	cell: MultiRowGridItem[]
}

export interface MultiRowGridModel {
	data: MultiRowGridCell[]
}

export interface MultiRowGridFormModel extends MultiRowGridModel {
	observedKey?: string[]
	formEvent: (values: Record<string, any>) => void
}
