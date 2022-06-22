import Grid from '@/components/common/Grid';
import Header from '@/components/common/Header';

const MainContainer = (): JSX.Element => {
  return (
    <>
      <Header />
      <Grid
        headerText={'메인페이지'}
        bodyNode={<div>dma.</div>}
      />
    </>
  )
}

export default MainContainer
