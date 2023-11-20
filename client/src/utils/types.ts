import { FunctionComponent } from 'react';

export type TNewGame = {
  userName: string;
  gameId: string;
  mySocketId: string;
  isCreator: boolean;
};

export type TIdData = Omit<TNewGame, 'mySocketId'>;

export type TClientToServerEvents = {
  joinsRoom: (idData: TIdData) => void;
};

export type TServerToClientEvents = {
  createNewGame: (statusUpdate: TNewGame) => void;
};

export type TModals = {
  addModal(key: string, modal: FunctionComponent<any>): void;
  openModal(key: string, props?: { [key: string]: any }): void;
  closeModal(key?: string): void;
};
