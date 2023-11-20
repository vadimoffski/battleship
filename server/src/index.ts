import "module-alias/register";
import dotenv from "dotenv";
import express, { Express } from "express";
import { createServer } from "http";
import { Server } from "socket.io";

import * as TYPES from "@game/types";
import { onConnection } from "@game/listeners";

dotenv.config();

const port = process.env.PORT || 8000;

const app: Express = express();

const httpServer = createServer(app);

const io = new Server<
  TYPES.ClientToServerEvents,
  TYPES.ServerToClientEvents,
  TYPES.InterServerEvents,
  TYPES.SocketData
>(httpServer, {
  cors: {
    origin: `*`,
  },
});

io.on("connection", onConnection);

httpServer.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
