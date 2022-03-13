import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {useRecoilValue, useSetRecoilState} from 'recoil';
import AuthAccountModel from '@/models/auth/auth-account.model';
import AccountAtom from '@/recoil/account.atom';
import {useEffect, useState} from 'react';
import AuthStatus from '@/models/auth/auth-status.model';
import {useNavigate} from 'react-router-dom';
import Path from '@/models/path.model';
import AccountService from '@/services/account.service';
import AxiosUtil from '@/utils/axios.util';
import ToastTypeModel from '@/models/recoil/toast-type.model';
import ToastAtom from '@/recoil/toast.atom';
import ToastRequestModel from '@/models/recoil/toast-request.model';
import style from '@/styles/header.module.scss'

const Header = (): JSX.Element => {
  
  const accountModel = useRecoilValue<AuthAccountModel>(AccountAtom);
  const setAccountModel = useSetRecoilState<AuthAccountModel>(AccountAtom);
  const setToastState = useSetRecoilState<ToastRequestModel | undefined>(ToastAtom);
  
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const navigate = useNavigate();
  
  const onClickBtnLogout = async() => {
    const onSuccess = async() => {
      await AccountService.checkAndSetAuth(setAccountModel)
      setToastState({
        type: ToastTypeModel.SUCCESS,
        message: '로그아웃이 완료되었습니다.'
      })
    }

    const onFailure = async(message: string) => {
      await AccountService.checkAndSetAuth(setAccountModel)
      setToastState({
        type: ToastTypeModel.ERROR,
        message: message
      })
    }

    await AxiosUtil.responseHandler(
      AccountService.logout(),
      onSuccess,
      onFailure
    )
  }
  
  useEffect(() => {
    if (accountModel.authStatus === AuthStatus.SUCCESS) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    
  }, [accountModel])
  
  return (
    <Navbar bg="dark" variant="dark" className={style.container}>
      <Container>
        <Navbar.Brand href="#home">Finance</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>코인</Nav.Link>
          <Nav.Link>주식</Nav.Link>
        </Nav>
          {
            isAuthenticated === true
              ?
              <>
                <span style={{ color: '#fff', marginRight: '30px'}}>{accountModel.account?.name}</span>
                <Button variant="outline-light" onClick={onClickBtnLogout}>
                  로그아웃
                </Button>
              </>
              :
              <>
                <Button variant="outline-light" onClick={() => navigate(Path.Web.LOGIN)}>
                  로그인
                </Button>
              </>
          }
      </Container>
    </Navbar>
  )
}

export default Header
