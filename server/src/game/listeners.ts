import * as EVENTS from "@game/events";
import { gameSocket, gamesInSession, io } from "@game/init";
import { SocketData } from "@game/types";

export const onDisconnect = () => {
  console.log("Disconnected from the socket.io!");
  const i = gamesInSession.indexOf(gameSocket);
  gamesInSession.splice(i, 1);
};

export const newMove = (move: SocketData) => {
  console.log(`New move ${move.gameId}!`);
  const gameId = move.gameId;
  io.to(gameId).emit(EVENTS.OPPONENT_MOVE, move);
};

export const createNewGame = (gameId: SocketData["gameId"]) => {
  console.log(`Created new game ${gameId}!`);
  gameSocket.emit(EVENTS.CREATE_NEW_GAME, {
    gameId: gameId,
    mySocketId: gameSocket.id,
  });
  gameSocket.join(gameId);
};

export const playerJoinsGame = (idData: SocketData) => {
  const sock = gameSocket;
  const room: string[] = [];
  // io.sockets.adapter.rooms[idData.gameId]
  if (!room) {
    gameSocket.emit(EVENTS.STATUS, "This game session does not exist.");
    return;
  }

  if (room.length > 2) {
    gameSocket.emit(
      EVENTS.STATUS,
      "There are already 2 people playing in this room."
    );
    return;
  }

  if (room.length < 2) {
    idData.mySocketId = sock.id;
    sock.join(idData.gameId);

    if (room.length === 2) {
      io.sockets.in(idData.gameId).emit(EVENTS.START_GAME, idData.userName);
    }

    io.sockets.in(idData.gameId).emit(EVENTS.JOINED_ROOM, idData);
  }
};

export const requestUserName = (gameId: SocketData["gameId"]) => {
  console.log(`Request user name ${gameId}!`);
  io.to(gameId).emit(EVENTS.GIVE_USER_NAME, gameSocket.id);
};

export const receivedUserName = (data: SocketData) => {
  console.log(`Received user name ${data}!`);
  data.socketId = gameSocket.id;
  io.to(data.gameId).emit(EVENTS.GET_USER_NAME, data);
};
