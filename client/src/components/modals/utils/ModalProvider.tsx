import { useState, FunctionComponent, FC } from 'react';
import { TModals } from '@utils/types';

import { ModalsContext } from './ModalsContext';

interface ModalsProviderProps {
  children: JSX.Element | JSX.Element[];
  initialModals?: { [key: string]: FunctionComponent<any> };
}

export const ModalsProvider: FC<ModalsProviderProps> = ({
  children,
  initialModals = {},
}) => {
  const [modals, setModals] = useState<{
    [key: string]: FunctionComponent<any>;
  }>(initialModals);
  const [modal, setModal] = useState<
    {
      key: string;
      Component: FunctionComponent<any>;
      props: { [key: string]: any };
    }[]
  >([]);

  const addModal: TModals['addModal'] = (key, ModalComponent) => {
    setModals((state) => ({ ...state, [key]: ModalComponent }));
  };

  const openModal: TModals['openModal'] = (key, props = {}) => {
    if (modal.find((el) => el.key === key)) return;
    setModal((state) => [
      ...state,
      {
        key,
        Component: modals[key],
        props,
      },
    ]);
  };

  const closeModal: TModals['closeModal'] = (key?: string) => {
    if (key === undefined) {
      setModal([]);
    } else {
      setModal((state) => state.filter((item) => item.key !== key));
    }
  };

  return (
    <ModalsContext.Provider
      value={{
        addModal,
        openModal,
        closeModal,
      }}
    >
      {modal.map((item) => (
        <item.Component {...item.props} open key={item.key} />
      ))}
      {children}
    </ModalsContext.Provider>
  );
};
