import "module-alias/register";
import dotenv from "dotenv";
import express, { Express } from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

import * as TYPES from "@game/types";
import * as game from "@game/init";

dotenv.config();

const port = process.env.PORT || 8000;

const app: Express = express();

const httpServer = createServer(app);

const io = new Server<
  TYPES.ClientToServerEvents,
  TYPES.ServerToClientEvents,
  TYPES.InterServerEvents,
  TYPES.SocketData
>(httpServer, {});

io.on("connection", (client: Socket) => {
  console.log("Connected to the socket.io!");
  game.initializeGame(io, client);
});

httpServer.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
