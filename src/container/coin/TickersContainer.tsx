import Header from '@/components/common/Header';
import Grid from '@/components/common/Grid';
import CoinService from '@/services/coin.service';
import useDataFetch from '@/hooks/useDataFetch';
import useTable from '@/hooks/useTable';
import Table from '@/components/table/Table';
import TickersColumnDef from '@/models/columndef/tickers.columdef';
import Input from '@/components/common/element/Input';
import MultiRowGridForm from '@/components/grid/MultiRowGridForm';
import {useEffect, useRef, useState} from 'react';
import useForm from '@/hooks/useForm';
import Button from '@/components/common/element/Button';
import AdminRenderElement from '@/components/common/AdminRenderElement';
import {faArrowRotateRight} from '@fortawesome/free-solid-svg-icons/faArrowRotateRight';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';

const TickersContainer = () => {
  
  const [tickers, doFetch] = useDataFetch((params) => CoinService.getAllTickers(params))
  
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
    observedKey: [],
    formEvent: doFetch,
    ref: useRef<HTMLFormElement>(null)
  })
  
  useEffect(() => {
    fireFormEvent()
  }, [])
  
  return (
    <>
      <Header />
      <Grid
        headerText={'티커'}
        headerActionNode={
        <>
          <AdminRenderElement element={<Button text={'티커 재설정'} onClick={() => CoinService.resetTickers()} className={'me-2'} />} />
          <Button text={'검색 초기화'} onClick={() => { resetForm(); fireFormEvent(); }} iconProps={{ icon: faArrowRotateRight }} />
          <Button text={'검색'} onClick={fireFormEvent} className={'ms-2'} iconProps={{ icon: faMagnifyingGlass }} />
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
