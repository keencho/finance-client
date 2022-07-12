import Header from '@/components/common/Header';
import Grid from '@/components/common/Grid';
import CoinService from '@/services/coin.service';
import useDataFetch from '@/hooks/useDataFetch';
import Tickers from '@/components/coin/Tickers';

const TickersContainer = () => {
  
  const tickers = useDataFetch(CoinService.getAllTickers());
  
  return (
    <>
      <Header />
      <Grid
        headerText={'티커'}
        bodyNode={<Tickers tickers={tickers} />}
      />
    </>
  )
}

export default TickersContainer
