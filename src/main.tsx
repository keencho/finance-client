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
import RecoilNexus from '@/components/common/RecoilNexus';


ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <RecoilNexus />
      <Spinner />
      <Toast />
      <Auth>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Auth>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
