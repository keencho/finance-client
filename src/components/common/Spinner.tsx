import {Spinner as BootstrapSpinner} from "react-bootstrap";
import {useRecoilValue} from 'recoil';
import SpinnerAtom from '@/recoil/spinner.atom';
import {Background, Container, Mark} from '@/components/common/Spinner.styled';

const Spinner = (): JSX.Element => {
  
  const showSpinner = useRecoilValue<boolean>(SpinnerAtom)
  
  return (
    <Container show={showSpinner}>
      <Background />
      <Mark>
        <BootstrapSpinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </BootstrapSpinner>
      </Mark>
    </Container>
  )
}

export default Spinner
