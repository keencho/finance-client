import Table from '@/components/table/Table';
import {useEffect} from 'react';
import {TableColumDefModel} from '@/models/table/table.model';
import useTable from '@/hooks/useTable';

const columnDef: TableColumDefModel[] = [
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

interface Props {
  tickers: any[]
}

const Tickers = (props: Props): JSX.Element => {
  return <Table
    {...useTable(
      {
        data: props.tickers,
        usePaging: false,
        columnDef: columnDef,
        countOption: {
          countData: true
        }
      })
    }
  />
}

export default Tickers;
