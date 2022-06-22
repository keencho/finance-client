import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import AuthAccountModel from '@/models/auth/auth-account.model';
import AccountAtom from '@/recoil/account.atom';
import {useEffect, useRef, useState} from 'react';
import AuthStatus from '@/models/auth/auth-status.model';
import {Link, useNavigate} from 'react-router-dom';
import AccountService from '@/services/account.service';
import AxiosUtil from '@/utils/axios.util';
import ToastTypeModel from '@/models/recoil/toast-type.model';
import ToastAtom from '@/recoil/toast.atom';
import ToastRequestModel from '@/models/recoil/toast-request.model';
import HeaderHeightAtom from '@/recoil/header-height.atom';
import {AiOutlineDollarCircle} from 'react-icons/all';
import {
  BtnToggleThemeMode,
  StyledNavbar,
  StyledNavbarBrand,
  StyledNavLink,
  ToggleThemeMoon,
  ToggleThemeMoonStar,
  ToggleThemeSun
} from '@/components/common/Header.styled';
import ThemeModeAtom from '@/recoil/theme-mode.atom';
import Path from '@/models/path.model';
import classNames from 'classnames';

const Header = (): JSX.Element => {
  
  // @ts-ignore
  const headerRef = useRef<HTMLElement>(undefined);
  const setHeaderHeight = useSetRecoilState<number>(HeaderHeightAtom);
  const accountModel = useRecoilValue<AuthAccountModel>(AccountAtom);
  const setAccountModel = useSetRecoilState<AuthAccountModel>(AccountAtom);
  const setToastState = useSetRecoilState<ToastRequestModel | undefined>(ToastAtom);
  const [themeMode, setThemeMode] = useRecoilState(ThemeModeAtom);
  
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
      {
        onSuccess,
        onFailure
      }
    )
  }
  
  const controlTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light')
  }
  
  useEffect(() => {
    if (accountModel.authStatus === AuthStatus.SUCCESS) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    
  }, [accountModel])
  
  useEffect(() => {
    setHeaderHeight(headerRef.current.offsetHeight);
  }, [headerRef])
  
  return (
    <StyledNavbar variant={'dark'} expand={'lg'} sticky={'top'} ref={headerRef}>
      <Container>
        <StyledNavbarBrand as={Link} to={'/'} >
          <AiOutlineDollarCircle size={50} textDecoration={'none'} />
        </StyledNavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <StyledNavLink as={Nav.Link}>코인</StyledNavLink>
            <StyledNavLink as={Nav.Link}>주식</StyledNavLink>
          </Nav>
          <div className={classNames('d-flex', 'align-items-center')}>
            <BtnToggleThemeMode onClick={controlTheme}>
              <ToggleThemeSun visible={themeMode === 'dark'} />
              <ToggleThemeMoon visible={themeMode === 'light'}>
                <ToggleThemeMoonStar small={false}/>
                <ToggleThemeMoonStar small={true}/>
              </ToggleThemeMoon>
            </BtnToggleThemeMode>
            <div className={'ms-2'}>
              {
                isAuthenticated && <span style={{color: '#fff', marginRight: '30px'}}>{accountModel.account?.name}</span>
              }
              {
                <Button size={'sm'} variant="outline-light" onClick={isAuthenticated ? onClickBtnLogout : () => navigate(Path.LOGIN)}>
                  {isAuthenticated ? '로그아웃' : '로그인'}
                </Button>
              }
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  )
}

export default Header
