/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ServerToClientEvents {
  opponentMove: { gameId: string };
  createNewGame: {
    gameId: string;
    mySocketId: string;
  };
  status: string;
  startGame: string;
  joinedRoom: SocketData;
  giveUserName: string;
  getUserName: SocketData;
}

export interface ClientToServerEvents {
  disconnect: () => void;
  newMove: (move: SocketData["move"]) => void;
  createNewGame: (gameId: SocketData["gameId"]) => void;
  joinsRoom: (idData: SocketData) => void;
  requestUserName: (gameId: SocketData["gameId"]) => void;
  receivedUserName: (data: SocketData) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  userName: string;
  socketId: string;
  gameId: string;
  mySocketId: string;
  move: {
    gameId: string;
  };
}
