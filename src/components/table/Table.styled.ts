import styled from 'styled-components';
import {Table} from 'react-bootstrap';


export const TableWrapper = styled.div`
	overflow: auto;
	height: 500px;
`

export const BootstrapTable = styled(Table)`
	//border-collapse: separate;
	//border-spacing: 0;
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
		background-color: gray;
	}
`

export const TableHead = styled.thead`
	position: sticky;
	top: 0;
`
