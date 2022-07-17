import Header from '@/components/common/Header';
import Grid from '@/components/common/Grid';
import CoinService from '@/services/coin.service';
import useDataFetch from '@/hooks/useDataFetch';
import useTable from '@/hooks/useTable';
import Table from '@/components/table/Table';
import TickersColumnDef from '@/models/columndef/tickers.columdef';
import Input from '@/components/common/element/Input';
import MultiRowGridForm from '@/components/grid/MultiRowGridForm';
import {useRef} from 'react';
import useForm from '@/hooks/useForm';
import Button from '@/components/common/element/Button';
import AdminRenderElement from '@/components/common/AdminRenderElement';

const TickersContainer = () => {
  
  const tickers = useDataFetch(CoinService.getAllTickers());
  
  const [formProps, fireFormEvent, resetForm] = useForm({
    data: [
      {
        cell: [
          {
            header: '코드',
            body: <Input name={'code'} placeHolder={'코드명'} />,
            lg: 6
          },
          {
            header: '한글명',
            body: <Input name={'korean_name'} placeHolder={'한글명'} />,
            lg: 3
          },
          {
            header: '영문명',
            body: <Input name={'english_name'} placeHolder={'영문명'} />,
            lg: 3
          },
        ]
      }
    ],
    observedKey: ['code', 'korean_name'],
    formEvent: (values: object) => {
      console.log(values);
    },
    ref: useRef<HTMLFormElement>(null)
  })
  
  return (
    <>
      <Header />
      <Grid
        headerText={'티커'}
        headerActionNode={
        <>
          <AdminRenderElement element={<Button text={'티커 재설정'} onClick={() => CoinService.resetTickers()} className={'me-3'} />} />
          <Button text={'검색 초기화'} onClick={resetForm} />
          <Button text={'검색'} onClick={fireFormEvent} className={'ms-3'} />
        </>
        }
        bodyNode={
          <>
            <MultiRowGridForm {...formProps} />
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
