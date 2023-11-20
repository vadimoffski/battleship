import { socket } from '@connection/socket';
import { TClientToServerEvents } from '@utils/types';

export const joinGameRoom: TClientToServerEvents['joinsRoom'] = (idData) => {
  socket.emit('joinsRoom', idData);
};
