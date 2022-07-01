import Header from '@/components/common/Header';
import Grid from '@/components/common/Grid';
import BullMarket from '@/components/coin/BullMarket';
import CoinService from '@/services/coin.service';
import useFetch from '@/hooks/useFetch';
import {useEffect} from 'react';

const BullMarketContainer = () => {
  
  const tickers = useFetch(CoinService.getAllTickers());
  
  useEffect(() => {
    console.log(tickers)
  }, [])
  
  return (
    <>
      <Header />
      <Grid
        headerText={'상승장'}
        bodyNode={<BullMarket />}
      />
    </>
  )
}

export default BullMarketContainer
