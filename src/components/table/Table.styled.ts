import styled from 'styled-components';
import {Table} from 'react-bootstrap';

export const TableContainer = styled.div`
	width: 100%;
	height: 100%;
`

export const TableWrapper = styled.div`
	overflow: auto;
	height: 500px;
	border: 1px solid #ECEDEE;
	border : 1px solid ${props => props.theme.mode === 'light' ? '#DFE0E1' : '#373B3E'};
	background-color: ${props => props.theme.mode === 'light' ? '#F0F0F0' : '#212529'};
`

export const BootstrapTable = styled(Table)`
	border-collapse: separate;
	border-spacing: 0;
	table-layout: fixed;
`

export const TableResizer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 5px;
  cursor: col-resize;
  user-select: none;
  touch-action: none;
	
	&:hover {
		background-color: ${props => props.theme.color.text};
	}
`

export const TableHead = styled.thead`
	position: sticky;
	top: 0;
	border-collapse: separate;
	border-spacing: 0 5px;
	box-shadow: 0 2px 0 0 ${props => props.theme.color.text};
`

export const TableHeadTr = styled.tr`
`

export const TableHeadTh = styled.th`
	border-left: none;
	text-overflow:ellipsis;
	white-space:nowrap;
	overflow:hidden;
`

export const TableBodyTd = styled.td`
	border-left: none;
	border-right: 1px solid ${props => props.theme.mode === 'light' ? '#DFE0E1' : '#373B3E'} !important;
	border-bottom: 1px solid ${props => props.theme.mode === 'light' ? '#DFE0E1' : '#373B3E'} !important;
	text-overflow:ellipsis;
	white-space:nowrap;
	overflow:hidden;
`
