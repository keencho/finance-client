import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {RecoilRoot} from 'recoil';
import {BrowserRouter} from 'react-router-dom';
import Toast from '@/components/common/Toast';
import {Routes} from '@/routes';
import Auth from '@/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from '@/components/common/Spinner';


ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Auth>
        <BrowserRouter>
          <Spinner />
          <Toast />
          <Routes />
        </BrowserRouter>
      </Auth>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
