import { Server, Socket } from "socket.io";

import * as LISTENER from "@game/listeners";
import * as EVENTS from "@game/events";

export let io: Server;
export let gameSocket: Socket;
export const gamesInSession: Socket[] = [];

export const initializeGame = (sio: Server, cio: Socket) => {
  io = sio;
  gameSocket = cio;
  gamesInSession.push(gameSocket);

  gameSocket.on(EVENTS.DISCONNECT, LISTENER.onDisconnect);
  gameSocket.on(EVENTS.NEW_MOVE, LISTENER.newMove);
  gameSocket.on(EVENTS.CREATE_NEW_GAME, LISTENER.createNewGame);
  gameSocket.on(EVENTS.JOINS_ROOM, LISTENER.playerJoinsGame);
  gameSocket.on(EVENTS.REQUEST_USER_NAME, LISTENER.requestUserName);
  gameSocket.on(EVENTS.RECEIVED_USER_NAME, LISTENER.receivedUserName);
};
