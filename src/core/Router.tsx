import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainContainer from '@/container/MainContainer';
import Path from '@/models/path.model';
import LoginContainer from '@/container/LoginContainer';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.INDEX} element={<MainContainer />} />
        <Route path={Path.LOGIN} element={<LoginContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
