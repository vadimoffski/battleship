import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ROUTES } from '@utils/constants';

import Layout from '@components/Layout';

import Home from '@pages/Home';
import BoardPage from '@pages/BoardPage';
import Welcome from '@pages/Welcome';

const App = () => {
  return (
    <BrowserRouter basename="/battleship">
      <Routes>
        <Route index path={ROUTES.home} element={<Home />} />
        <Route element={<Layout />}>
          <Route path={ROUTES.welcome} element={<Welcome />} />
          <Route path={ROUTES.board} element={<BoardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
