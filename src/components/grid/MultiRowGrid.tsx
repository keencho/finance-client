import {
	GridCell,
	GridCellHead,
	GridCellText,
	GridCol,
	GridRow,
	GridWrapper
} from './MultiRowGrid.styled';
import {MultiRowGridCell, MultiRowGridItem, MultiRowGridModel} from '@/models/grid/multi-row-grid.model';
import React from 'react';

const MultiRowGrid = (props: MultiRowGridModel) => {
	return (
		<GridWrapper className={'mb-2'}>
			{
				props.data.map((row: MultiRowGridCell, rowIdx: number) => {
					return (
						<GridRow key={rowIdx}>
							{
								row.cell.map((item: MultiRowGridItem, cellIdx: number) => {
									if (item.condition !== undefined && !item.condition) {
										return <React.Fragment key={cellIdx} />
									}
									
									return (
										<GridCol lg={item.lg ?? 12} key={cellIdx}>
											<GridCellHead>{item.header}</GridCellHead>
											{
												item.wrapByCellText === true
													? <GridCellText>{item.body}</GridCellText>
													: <GridCell>{item.body}</GridCell>
											}
										
										</GridCol>
									)
								})
							}
						</GridRow>
					)
				})
			}
		</GridWrapper>
	)
}

export default MultiRowGrid
