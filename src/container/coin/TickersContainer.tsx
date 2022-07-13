import Header from '@/components/common/Header';
import Grid from '@/components/common/Grid';
import CoinService from '@/services/coin.service';
import useDataFetch from '@/hooks/useDataFetch';
import useTable from '@/hooks/useTable';
import Table from '@/components/table/Table';
import TickersColumnDef from '@/models/columndef/tickers.columdef';
import MultiRowGrid from '@/components/grid/MultiRowGrid';
import {MultiRowGridCell} from '@/models/grid/multi-row-grid.model';

const gridFormData: MultiRowGridCell[] = [
  {
    cell: [
      {
        header: '접수일',
        body: <span>x</span>,
        lg: 6
      },
      {
        header: '출발 터미널',
        body: <span>x</span>,
        lg: 3
      },
      {
        header: '도착 터미널',
        body: <span>x</span>,
        lg: 3
      },
    ]
  }
]

const TickersContainer = () => {
  
  const tickers = useDataFetch(CoinService.getAllTickers());
  
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
