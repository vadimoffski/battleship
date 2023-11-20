import { API_BASE } from '@utils/constants';
import { TClientToServerEvents, TServerToClientEvents } from '@utils/types';
import { io, Socket } from 'socket.io-client';

export const socket: Socket<TServerToClientEvents, TClientToServerEvents> =
  io(API_BASE);

let mySocketId: string;

socket.on('createNewGame', (statusUpdate) => {
  mySocketId = statusUpdate.mySocketId;
});

export function getMySocketId(): string {
  return mySocketId;
}
