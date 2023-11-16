import { io, Socket } from 'socket.io-client';

const URL: string = 'http://localhost:8000';

type NewGame = {
  userName: string;
  gameId: string;
  mySocketId: string;
};

type ClientToServerEvents = {
  createNewGame: (statusUpdate: NewGame) => void;
};

const socket: Socket<ClientToServerEvents> = io(URL);

let mySocketId: string;

socket.on('createNewGame', (statusUpdate) => {
  mySocketId = statusUpdate.mySocketId;
});

function getMySocketId(): string {
  return mySocketId;
}

export { socket, getMySocketId };
