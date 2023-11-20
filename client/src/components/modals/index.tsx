import loadable from '@loadable/component';

const LazyConnectModal = loadable(() => import('./ConnectModal'));

export default {
  CONNECT_MODAL: LazyConnectModal,
};
