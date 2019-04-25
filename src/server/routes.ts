// node-typescript/src/server.ts
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const server = express();

server.get("/", (_, res) => {
  res.send("First Test");
});

export default server;
