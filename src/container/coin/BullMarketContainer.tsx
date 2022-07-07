import Header from '@/components/common/Header';
import Grid from '@/components/common/Grid';
import BullMarket from '@/components/coin/BullMarket';
import CoinService from '@/services/coin.service';
import useDataFetch from '@/hooks/useDataFetch';

const BullMarketContainer = () => {
  
  const tickers = useDataFetch(CoinService.getAllTickers());
  
  return (
    <>
      <Header />
      <Grid
        headerText={'상승장'}
        bodyNode={<BullMarket tickers={tickers} />}
      />
    </>
  )
}

export default BullMarketContainer
