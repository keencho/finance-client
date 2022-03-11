import {Spinner as BootstrapSpinner} from "react-bootstrap";
import style from "@/styles/spinner.module.scss"
import clsx from 'clsx';
import {useRecoilValue} from 'recoil';
import SpinnerAtom from '@/recoil/spinner.atom';

const Spinner = (): JSX.Element => {
  
  const spinnerValue = useRecoilValue<boolean>(SpinnerAtom)
  
  return (
    <div
      className={
        clsx({
          [style.container]: true,
          [style.show]: spinnerValue === true
        })
      }>
      <div className={style.background} />
      <div className={style.mark}>
        <BootstrapSpinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </BootstrapSpinner>
      </div>
    </div>
  )
}

export default Spinner
