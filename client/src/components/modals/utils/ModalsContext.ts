import { createContext } from 'react';

import { TModals } from '@utils/types';

const initialState: TModals = {
  closeModal: () => {
    throw new Error('Not implemented');
  },
  openModal: () => {
    throw new Error('Not implemented');
  },
  addModal: () => {
    throw new Error('Not implemented');
  },
};

export const ModalsContext = createContext(initialState);
