// node-typescript/src/server.ts
import * as dotenv from "dotenv";
import * as express from "express";

dotenv.config();

const server = express();

server.get("/", (_, res) => {
  res.send("First Test2");
});

export default server;
