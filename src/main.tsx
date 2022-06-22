import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {RecoilRoot} from 'recoil';
import Toast from '@/components/common/Toast';
import Auth from '@/core/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from '@/components/common/Spinner';
import RecoilNexus from '@/core/RecoilNexus';
import Router from '@/core/Router';


ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <RecoilNexus />
      <Spinner />
      <Toast />
      <Auth>
        <Router />
      </Auth>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
