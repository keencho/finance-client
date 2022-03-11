import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {RecoilRoot} from 'recoil';
import {BrowserRouter} from 'react-router-dom';
import Toast from '@/components/common/Toast';
import {Routes} from '@/routes';
import Auth from '@/auth';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Auth>
        <BrowserRouter>
          <Toast />
          <Routes />
        </BrowserRouter>
      </Auth>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
