import Header from '@/components/common/Header';
import Grid from '@/components/common/Grid';
import CoinService from '@/services/coin.service';
import useDataFetch from '@/hooks/useDataFetch';
import useTable from '@/hooks/useTable';
import Table from '@/components/table/Table';
import TickersColumnDef from '@/models/columndef/tickers.columdef';
import MultiRowGrid from '@/components/grid/MultiRowGrid';
import {MultiRowGridCell} from '@/models/grid/multi-row-grid.model';
import FloatingLabel from '@/components/common/element/FloatingLabel';
import {useState} from 'react';
import Input from '@/components/common/element/Input';

const TickersContainer = () => {
  
  const tickers = useDataFetch(CoinService.getAllTickers());
  
  const [value, setValue] = useState<string>('');
  
  const gridFormData: MultiRowGridCell[] = [
    {
      cell: [
        {
          header: '코드',
          body: <Input placeHolder={'코드명'} />,
          lg: 6
        },
        {
          header: '한글명',
          body: <Input placeHolder={'한글명'} />,
          lg: 3
        },
        {
          header: '영문명',
          body: <Input placeHolder={'영문명'} />,
          lg: 3
        },
      ]
    }
  ]
  
  return (
    <>
      <Header />
      <Grid
        headerText={'티커'}
        bodyNode={
          <>
            <MultiRowGrid data={gridFormData} />
            <Table
              {...useTable(
                {
                  data: tickers,
                  usePaging: false,
                  columnDef: TickersColumnDef,
                  countOption: {
                    countData: true
                  }
                })
              }
            />
          </>
        }
      />
    </>
  )
}

export default TickersContainer
