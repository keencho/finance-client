import React from 'react'
import {RecoilRoot} from 'recoil';
import Toast from '@/components/common/Toast';
import Auth from '@/core/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from '@/components/common/Spinner';
import RecoilNexus from '@/core/RecoilNexus';
import Router from '@/core/Router';
import CustomThemeProvider from '@/core/CustomThemeProvider';
import GlobalStyle from '@/core/GlobalStyle';
import {createRoot} from 'react-dom/client';
import './bootstrap.scss'

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <CustomThemeProvider>
        <GlobalStyle />
        <RecoilNexus />
        <Spinner />
        <Toast />
        <Auth>
          <Router />
        </Auth>
      </CustomThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
)
