import styled from 'styled-components';
import {Col, Row} from 'react-bootstrap';

export const GridRow = styled(Row)`
`

export const GridCol = styled(Col)`
`

export const GridCell = styled.div`
`

export const GridCellHead = styled.div`
`

interface StyledSearchFormCellTextProps {
	$ellipsis?: boolean
}

export const GridCellText = styled.div`
`

export const GridWrapper = styled.div<StyledSearchFormCellTextProps>`
  label {
      display: inline-block;
      margin-bottom: 0;
  }
  
  border-top: 1px solid ${props => props.theme.mode === 'light' ? '#444' : '#fff' };
  
  ${GridRow} {
    margin-right: 0;
    margin-left: 0;

      ${GridCol} {
        padding-right: 0;
        padding-left: 0;
        border-bottom: 1px solid  ${props => props.theme.mode === 'light' ? '#ddd' : '#373B3E'};
        display: flex;
      }

      ${GridCellHead} {
        padding: calc(0.375rem + 4px) calc(0.75rem + 4px);
        line-height: 1.5;

        background: ${props => props.theme.mode === 'light' ? '#f7f7f7' : '#212529'};
        border-right: 1px solid ${props => props.theme.mode === 'light' ? '#ddd' : '#373B3E'};

        text-align: center;
        min-width: 8rem;
        max-width: 8rem;
      }
      
      ${GridCell}{
        display: flex;
        flex-basis: 0;
        flex-grow: 1;
        align-items: center;
        padding: 4px;
        background-color: ${props => props.theme.mode === 'light' ? '#fff' : '#2C3034'};
      }
      
      ${GridCellText} {
        padding: calc(0.375rem + 4px) calc(0.75rem + 4px);
        line-height: 1.5;
        word-break: break-all;
        
        ${(props: StyledSearchFormCellTextProps) => props.$ellipsis === true && `
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          &:hover {
              text-overflow: clip;
              white-space: normal;
              word-break: break-all;
          }
        `}
      }
  }
`
