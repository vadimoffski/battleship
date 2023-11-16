import { Route, Routes } from 'react-router-dom';

import Layout from '@components/Layout';
import { ModalsProvider } from '@components/modals/utils/ModalProvider';
import modals from '@components/modals';

import Home from '@pages/Home';
import BoardPage from '@pages/BoardPage';
import Welcome from '@pages/Welcome';

import '@utils/styles/index.scss';

const ROUTES = {
  home: '/',
  welcome: 'welcome',
  board: ':gameId',
} as const;

const App = () => {
  return (
    <ModalsProvider initialModals={modals}>
      <Routes>
        <Route index path={ROUTES.home} element={<Home />} />
        <Route element={<Layout />}>
          <Route path={ROUTES.welcome} element={<Welcome />} />
          <Route path={ROUTES.board} element={<BoardPage />} />
        </Route>
      </Routes>
    </ModalsProvider>
  );
};

export default App;
