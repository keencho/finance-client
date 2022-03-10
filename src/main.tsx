import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import {Routes} from '@/routes';
import {RecoilRoot} from 'recoil';
import Toast from '@/components/common/Toast';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Toast />
        <Routes />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
